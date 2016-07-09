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
        res.json({ message: 'Word API -  Lextend API Gateway!' });
    });

    router.route('/today_words')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;
            var lang = req.body.lang_id;
            var lang_via = req.body.lang_via_id;
            var force_refresh = false;

            backendService.getClient().getTodayWords(auth_token, lang, lang_via,force_refresh, function (err, response) {
                if (err) {
                    res.json({ response_code: '96', response_message: 'System Error', data: err })
                }
                else {
                    res.json({ response_code: '00', response_message: 'Success', data: response })
                }
            })
        });
    return router;
})();