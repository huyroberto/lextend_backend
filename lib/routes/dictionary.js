module.exports = (function () {
    'use strict';
    var express = require('express');
    var sync = require('synchronize');
    var auth_ttypes = require('../../lextend-api/auth_types');
    var learning_ttypes = require('../../lextend-api/learning_types');
    var common_ttypes = require('../../lextend-api/common_types');
    var annot_ttypes = require('../../lextend-api/annot_types');
    var BackendService = require('../services/BackendService.js');

    var backendService = new BackendService();

    var router = express.Router();
    //Get thong tin profile
    router.get('/', function (req, res) {
        //backendService.checkConnection();
        res.json({ message: 'Dictionary API -  Lextend API Gateway!' });
    });

    router.route('/lookup')
        .post(function (req, res) {
            var auth_token = req.headers.auth_token;
            var app_id = req.headers.app_id;
            var from_lang_id = req.body.from_lang || "eng";
            var to_lang_id = req.body.to_lang || "vie";
            var word = req.body.word || "home";
            var searchExample = req.body.show_example || false;
            console.log(req.body.show_example, searchExample);
            console.log('Dictionary Lookup');
            // 1:string authToken, 2:string fromlangid, 3:string tolangid, 4:string word, 5:bool searchExample)
            backendService.getClient().lookup(auth_token, from_lang_id, to_lang_id, word, searchExample, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({ response_code: '00', response_message: 'Success!', data: response });
            });
        });
    router.route('/lookup_suggestions')
        .post(function (req, res) {
            var auth_token = req.headers.auth_token;
            var app_id = req.headers.app_id;
            var from_lang_id = req.body.from_lang || "eng";
            var to_lang_id = req.body.to_lang || "vie";
            var word = req.body.word || "home";
            console.log('Dictionary Get Lookup Suggestions');
            backendService.getClient().getLookupSuggestions(auth_token, from_lang_id, to_lang_id, word, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({ response_code: '00', response_message: 'Success!', data: response });
            })
        });
        router.route('/search_examples')
        .post(function (req, res) {
            var auth_token = req.headers.auth_token;
            var app_id = req.headers.app_id;
            var from_lang_id = req.body.from_lang || "eng";
            var to_lang_id = req.body.to_lang || "vie";
            var word = req.body.word || "home";
            console.log('Dictionary Search Examples');
            backendService.getClient().searchExamples(auth_token, from_lang_id, to_lang_id, word, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Errors', data: err });
                }
                res.json({ response_code: '00', response_message: 'Success!', data: response });
            })
        });
    return router;
})();