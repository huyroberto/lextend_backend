module.exports = (function () {
    'use strict';

    var express = require('express');
    var sync = require('synchronize');
    var auth_ttypes = require('../../lextend-api/auth_types');
    var learning_ttypes = require('../../lextend-api/learning_types');
    var common_ttypes = require('../../lextend-api/common_types');
    var annot_ttypes = require('../../lextend-api/annot_types');
    var AuthService = require('../services/AuthService.js');

    var authService = new AuthService();

    var router = express.Router();

    router.route('/register')
        .post(function (req, res) {
            //Lay cac tham so
            var username = req.body.username;
            var password = req.body.password;
            var email = req.body.email;
            var app_id = req.headers.app_id;

            //Neu tham so khong hop le
            if (!username || !password || !app_id || !email) {
                res.json({ response_code: '01', response_message: 'Invalid Request' });
                return;
            }
            //Kiem tra viec ton tai
            console.log('Check Exists');
            authService.getClient().exist(username, function (err, response) {
                if(err){
                                res.json({ response_code: '96', response_message: 'System Errors', data: err });       
                            }
                var existed = false;
                existed = response;
                if (existed == true) {
                    res.json({ response_code: '02', response_message: 'The username existed!' });
                    return;
                }
                //Tao request
                var profile = new auth_ttypes.Profile();
                profile.username = username;
                profile.password = password;
                profile.email = email;
                try {
                    console.log('Create Profile');
                    authService.getClient().createProfile(profile, function (err, response) {
                        if(err){
                                res.json({ response_code: '96', response_message: 'System Errors', data: err });       
                            }
                        console.log('create profile:');
                        console.log(err);
                        var auth_token = '';
                        if (response) {
                            console.log('Login with Password');
                            backendService.getClient().loginWithPassword(username, password, app_id, function (err, response) {
                                if(err){
                                res.json({ response_code: '96', response_message: 'System Errors', data: err });       
                            }
                                auth_token = response.tokenstr;
                                console.log(response);
                                res.json({ response_code: '00', response_message: 'Register success!', auth_token: auth_token });
                            });
                        }
                        else {
                            res.json({ response_code: '02', response_message: 'System Fail!' });
                        }
                    })
                }
                catch (err) {
                    console.log(err);
                    res.json({ response_code: '02', response_message: 'System Errors!' });
                }
            });
        });

    //Get profile detail
    router.route('/')
        .get(function (req, res) {
            var auth_token = req.headers.auth_token;
            var app_id = req.headers.app_id;
            if (!auth_token) {
                res.json({ message: 'Profile API -  Lextend API Gateway!' });
                //res.json({ response_code: '02', response_message: 'Invalid Authentication Token' });
            }
            if (!app_id) {
                res.json({ response_code: '02', response_message: 'Invalid App Id' });
            }
            console.log('Get Profile');
            authService.getClient().getProfile(auth_token, function (err, response) {
                if(err){
                                res.json({ response_code: '96', response_message: 'System Errors', data: err });       
                            }
                res.json({ response_code: '00', response_message: 'Get user info success!', profile: response });
            })
        });

    router.route('/update')
        .post(function(req,res){
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var profile = new auth_ttypes.Profile();
            profile.fullName = req.body.fullName;
            profile.avatarUri = req.avatarUri;
            profile.birthTime = req.birthTime;
        });
    return router;
})();