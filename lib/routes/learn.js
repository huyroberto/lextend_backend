module.exports = (function () {
    'use strict';
    var express = require('express');
    var sync = require('synchronize');

    var BackendService = require('../services/BackendService.js');
    var backendService = new BackendService();
    var auth_ttypes = require('../../lextend-api/auth_types');
    var learning_ttypes = require('../../lextend-api/learning_types');
    var common_ttypes = require('../../lextend-api/common_types');
    var annot_ttypes = require('../../lextend-api/annot_types');
    //CACHE
    var NodeCache = require("node-cache");
    var myCache = new NodeCache();

    var router = express.Router();
    //Get thong tin profile
    router.get('/', function (req, res) {
        //backendService.checkConnection();
        res.json({ message: 'Learning API -  Lextend API Gateway!' });
    });
    router.route('/supported_languages')
        .get(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.header.auth_token;
            myCache.get("supported_languages", function (err, value) {
                if (!err) {
                    if (value == undefined) {
                        console.log('Get Support Languages');
                        backendService.getClient().getSupportedLanguage(function (err, response) {
                            if (err) {
                                res.json({ response_code: '96', response_message: 'System Errors', data: err });
                            }
                            myCache.set("supported_languages", response, function (err, success) {
                            });
                            res.json({ response_code: '00', response_message: 'Success', data: response });
                            console.log('get from server');

                        });
                    } else {
                        console.log('get from cache');
                        res.json({ response_code: '00', response_message: 'Success', data: value });
                    }
                }
            });
            // res.json({response_code:'96', response_message:'System Errors',data:null});
        });

    router.route('/get_wordbook')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var wordbook_uri = req.body.wordbook_uri;

            console.log('Get Detail Wordbooks');
            backendService.getClient().getWordbook(auth_token, wordbook_uri, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({
                    response_code: '00', response_message: 'Success',
                    data: response
                });
            });
        });

    router.route('/system_wordbooks')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var lang_id = req.body.lang;
            var page_size = req.body.page_size;
            var page_index = req.body.page_index;
            if (!lang_id) lang_id = "eng";
            if (!page_size) page_size = 10;
            //if (!page_index) 
            page_index = -1;
            console.log('Get Recommend Wordbooks');
            backendService.getClient().getRecommendedWordbooks(auth_token, lang_id, page_index, page_size, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({
                    response_code: '00', response_message: 'Success',
                    data: { wordbooks: response.wordbooks, pageToken: Number(response.pageToken) }
                });
            });
        });

    router.route('/user_wordbooks')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var lang_id = req.body.lang;
            var page_size = req.body.page_size;
            var page_index = req.body.page_index;
            if (!lang_id) lang_id = "eng";
            if (!page_size) page_size = 10;
            //if (!page_index) 
            page_index = -1;
            console.log('List User Wordbooks');
            backendService.getClient().listUserWordbook(auth_token, lang_id, page_index, page_size, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({
                    response_code: '00', response_message: 'Success',
                    data: { wordbooks: response.wordbooks, pageToken: Number(response.pageToken) }
                });
                console.log('get from server');
            });
        });

    router.route('/create_wordbook')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var wordbook = new learning_ttypes.Wordbook();
            wordbook.langid = req.body.lang;
            wordbook.title = req.body.title;
            wordbook.description = req.body.description;
            wordbook.words = req.body.words.split(',');

            // this.wordbookUri = null;
            // this.coverPicUri = null;
            console.log('Create User WordBook');
            backendService.getClient().createUserWordbook(auth_token, wordbook, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({
                    response_code: '00', response_message: 'Success',
                    data: response
                });
                console.log('get from server');
            });
        });

        router.route('/create_wordbook')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var wordbook = new learning_ttypes.Wordbook();
            wordbook.langid = req.body.lang;
            wordbook.title = req.body.title;
            wordbook.description = req.body.description;
            wordbook.words = req.body.words.split(',');

            // this.wordbookUri = null;
            // this.coverPicUri = null;
            console.log('Create User WordBook');
            backendService.getClient().createUserWordbook(auth_token, wordbook, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({
                    response_code: '00', response_message: 'Success',
                    data: response
                });
                console.log('get from server');
            });
        });

        router.route('/update_wordbook')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var wordbook = new learning_ttypes.Wordbook();
            
            wordbook.wordbookUri = req.body.wordbook_uri;
            wordbook.langid = req.body.lang;
            wordbook.title = req.body.title;
            wordbook.description = req.body.description;
            wordbook.words = req.body.words.split(',');

            // this.wordbookUri = null;
            // this.coverPicUri = null;
            console.log('Create User WordBook');
            console.log(req.body);
            backendService.getClient().updateUserWordbook(auth_token, wordbook, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({
                    response_code: '00', response_message: 'Success',
                    data: response
                });
                console.log('get from server');
            });
        });

    router.route('/language_new')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var lang = req.body.lang;
            var vialang = req.body.vialang;
            console.log('Start Learning New Language');
            backendService.getClient().startLearningNewLanguage(auth_token, lang, vialang, learning_ttypes.LangLevel.BEGINNER, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({ response_code: '00', response_message: 'Success', settings: response });
            })
        });
    //Get Learning Settings
    router.route('/language_settings')
        .get(function (req, res) {
            try {
                var auth_token = req.headers.auth_token;
                var app_id = req.headers.app_id;
                console.log('Get Learning Settings');
                backendService.getClient().getLearningSettings(auth_token, function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    res.json({ response_code: '00', response_message: 'Get settings success!', settings: response });
                    return;
                });
            }
            catch (err) {
                console.log(err);
                res.json({ response_code: '02', response_message: 'System Errors!' });
            }
        });
    router.route('/language_update')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var languageSettings = new learning_ttypes.LearningSetting();
            var langid = req.body.lang;
            var viaLangids = req.body.vialang;
            var number_new_word_per_day = req.body.number_new_word_per_day;
            var number_word_per_day = req.body.number_word_per_day;
            var level = req.body.level;
            
            console.log('Update Learning Settings');
            backendService.getClient().updateLearningSettings(auth_token, langid, number_word_per_day, number_new_word_per_day, level, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                else {
                    res.json({ response_code: '00', response_message: 'Success' });
                }
            })
        });


    return router;
})();