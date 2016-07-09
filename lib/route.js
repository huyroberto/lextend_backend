var express = require('express');

module.exports = (function () {
    'use strict';

    var router = express.Router();
    //Get thong tin profile
    router.get('/', function (req, res) {
        res.json({ message: 'Welcome to Lextend API Gateway!' });
    });

    //Authentication route

    
    //PROFILE APIS
    router.route('/profile/register')
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
            checkConnection();
            //Kiem tra viec ton tai
            client.exist(username, function (err, response) {
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
                    client.createProfile(profile, function (err, response) {
                        console.log('create profile:');
                        console.log(err);
                        var auth_token = '';
                        if (response) {
                            client.loginWithPassword(username, password, app_id, function (err, response) {
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
    router.route('/profile')
        .get(function (req, res) {
            var auth_token = req.headers.auth_token;
            var app_id = req.headers.app_id;
            if (!auth_token) {
                res.json({ response_code: '02', response_message: 'Invalid Authentication Token' });
            }
            if (!app_id) {
                res.json({ response_code: '02', response_message: 'Invalid App Id' });
            }
            checkConnection();
            client.getProfile(auth_token, function (err, response) {
                console.log(err);
                console.log(response);
                res.json({ response_code: '00', response_message: 'Get user info success!', profile: response });
            })
        });

    //Get Learning Settings
    router.route('/profile/settings')
        .get(function (req, res) {
            try {
                var auth_token = req.headers.auth_token;
                var app_id = req.headers.app_id;
                checkConnection();
                client.getLearningSettings(auth_token, function (err, response) {
                    res.json({ response_code: '00', response_message: 'Get settings success!', settings: response });
                    return;
                });
            }
            catch (err) {
                console.log(err);
            }
            res.json({ response_code: '02', response_message: 'System Errors!' });
        });


    //LextendService_startLearningNewLanguage_args
    router.route('/profile/learn')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var lang = req.body.lang;
            var vialang = req.body.vialang;
            checkConnection();
            client.startLearningNewLanguage(auth_token, lang, vialang, learning_ttypes.LangLevel.BEGINNER, function (err, response) {
                console.log(err);
                console.log(response);
                res.json({ response_code: '00', response_message: 'Success', settings: response });
            })
        })

    //COMMON/SYSTEM APIS
    router.route('/system')
        .get(function (req, res) {
            var func = req.headers.func;
            var app_id = req.headers.app_id;
            var auth_token = req.header.auth_token;
            switch (func) {
                case 'get_supported_languages':
                    myCache.get("supported_languages", function (err, value) {
                        if (!err) {
                            if (value == undefined) {
                                checkConnection();
                                client.getSupportedLanguage(function (err, response) {
                                    myCache.set("supported_languages", response, function (err, success) {
                                    });
                                    console.log('get from server');
                                    res.json(response);
                                });
                            } else {
                                console.log('get from cache');
                                res.json(value);
                            }
                        }
                    });

                    break;
                default:
                    res.json({ response_code: '01', response_message: 'The function is not supported' });
            }
        })

    return router;
});