module.exports = (function () {
    'use strict';
    var express = require('express');
    var sync = require('synchronize');
    var auth_ttypes = require('../../lextend-api/auth_types');
    var learning_ttypes = require('../../lextend-api/learning_types');
    var common_ttypes = require('../../lextend-api/common_types');
    var annot_ttypes = require('../../lextend-api/annot_types');
    var BackendService = require('../services/BackendService.js');
    var AuthService = require('../services/AuthService.js');

    var backendService = new BackendService();
    var authService = new AuthService();

    var router = express.Router();
    //Get thong tin profile
    router.get('/', function (req, res) {
        //backendService.checkConnection();
        res.json({ message: 'Authentication API -  Lextend API Gateway!' });
    });

    
    router.route('/logout')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            console.log('Logout');
            authService.getClient().logout(auth_token, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Error', data: err })
                }
                else {
                    res.json({ response_code: '00', response_message: 'Success', data: response })
                }
            })
        });
    router.route('/internal')
        .post(function (req, res) {
            // try {
                var username = req.body.username;
                var password = req.body.password;
                var app_id = req.headers.app_id;
                if (!username || !password || !app_id) {
                    res.json({ response_code: '01', response_message: 'Invalid Request' });
                    return;
                }
                console.log('Login password');

                authService.getClient().loginWithPassword(username, password, app_id, function (error, response) {
                    if (error) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: error });
                    }
                    if (response) {
                        var auth_token = response.tokenstr;
                        console.log(response);
                        res.json({ response_code: '00', response_message: 'Login success!', auth_token: auth_token });
                    }
                    else {
                        res.json({ response_code: '01', response_message: 'Invalid user information' });
                    }
                });
            // }
            // catch (err) {
            //     res.json({ response_code: '96', response_message: err });
            // }
        });
    router.route('/google')
        .post(function (req, res) {
            try {
                var app_id = req.headers.app_id;
                var google_token = req.body.google_token;
                if (!app_id || !google_token) {
                    res.json({ response_code: '01', response_message: 'Invalid Request' })
                    return;
                }
                console.log('Login with Gooogle');
                authService.loginWithGoogleAccount(google_token, app_id, function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                        return;
                    }
                    if (response) {
                        var auth_token = response.tokenstr;
                        res.json({ response_code: '00', response_message: 'Login Success!', auth_token: auth_token });
                        return;
                    }
                    else {
                        res.json({ response_code: '01', response_message: 'Invalid user information' });
                    }
                })
            }
            catch (err) {
                res.json({ response_code: '96', response_message: err });
            }
        });
    router.route('/forgot_password')
        .post(function (req, res) {
            var username = req.body.username;
            var app_id = req.headers.app_id;
            
            authService.getClient().forgotPassword(username, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                if (response) {
                    res.json({ response_code: '00', response_message: 'Forgot Password Success!', result: response });
                }
                else {
                    res.json({ response_code: '01', response_message: 'System Errors'});
                }
            })
        });
    return router;
})();