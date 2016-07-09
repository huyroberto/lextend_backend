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
        res.json({ message: 'Material API -  Lextend API Gateway!' });
    });

    //MATERIALS
    router.route('/recommended')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var langid = req.body.lang_id;
            var via_lang = req.body.lang_via_id;

            console.log('Get Recommended Materials');
            backendService.getClient().getRecommendedMaterials(auth_token, langid, via_lang, false,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({ response_code: '00', response_message: 'Success', data: response })
                    }
                });
        });

    router.route('/user_material')
        .post(function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var langid = req.body.lang_id;
            var via_lang = req.body.lang_via_id;
            var pageToken = req.body.page;
            var limit = req.body.limit;

            console.log('List User Materials', req);
            backendService.getClient().listUserMaterials(auth_token, langid, via_lang, pageToken, limit,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { materials: response.materialSummaries, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        });
    router.route('/like')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var material_uri = req.body.material_uri;
            console.log('Like Material');

            backendService.getClient().likeMaterial(auth_token, material_uri,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { materials: response.materialSummaries, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        }
        );
    router.route('/add_comment')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var material_uri = req.body.material_uri;
            var message = req.body.message;

            var comment = new learning_ttypes.Comment();
            comment.message = message;
            comment.resourceUri = material_uri;

            console.log('Add material comment');

            backendService.getClient().addComment(auth_token, material_uri, comment,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { materials: response.materialSummaries, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        }
        );
    router.route('/edit_comment')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var comment_uri = req.body.comment_uri;
            var message = req.body.message;

            console.log('Edit material comment');
            console.log(comment_uri);

            backendService.getClient().editComment(auth_token, comment_uri, message,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: response
                        });
                    }
                }
            );
        }
        );

    router.route('/create')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var lang_id = req.body.lang_id;
            var lang_via_id = req.body.lang_via_id;
            var title = req.body.title;
            var content = req.body.content;
            var material = new learning_ttypes.Material();
            material.langid = lang_id;
            material.vialangid = lang_via_id;
            material.title = title;
            material.content = content;
            //material.picUri = null;
            //material.videoUri = null;

            backendService.getClient().createUserMaterial(auth_token, material,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { materials: response.materialSummaries, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        }
        );
        router.route('/edit')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var material_uri = req.body.material_uri;
            var lang_id = req.body.lang_id;
            var lang_via_id = req.body.lang_via_id;
            var title = req.body.title;
            var content = req.body.content;
            var material = new learning_ttypes.Material();
            material.materialUri = material_uri;
            material.langid = lang_id;
            material.vialangid = lang_via_id;
            material.title = title;
            material.content = content;
            //material.picUri = null;
            //material.videoUri = null;

            backendService.getClient().updateUserMaterial(auth_token, material,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { materials: response.materialSummaries, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        }
        );
        router.route('/delete')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var material_uri = req.body.material_uri;

            backendService.getClient().deleteUserMaterial(auth_token, material_uri,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { materials: response.materialSummaries, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        }
        );
    router.route('/list_comments')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var material_uri = req.body.material_uri;
            var pageToken = req.body.page;
            var limit = req.body.limit;
            if (!pageToken) pageToken = -1;
            if (!limit) limit = 20;
            console.log('List Material Comments');
            backendService.getClient().getMaterialComments(auth_token, material_uri, pageToken, limit,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { comments: response.selectedComments, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        }
        );
    router.route('/favourites')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var langid = req.body.lang;
            var via_lang = req.body.via_lang;
            var pageToken = req.body.page;
            var limit = req.body.limit;
            console.log('List Favouries Materials');
            backendService.getClient().listUserFavourites(auth_token, langid, via_lang, pageToken, limit,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { materials: response.materialSummaries, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        }
        );

    router.route('/summaries')
        .post(

        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var uris = req.body.uris.split(',');
            console.log('Get Material Summaries');
            backendService.getClient().getMaterialSummaries(auth_token, uris,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: { materials: response.materialSummaries, pageToken: Number(response.pageToken) }
                        });
                    }
                }
            );
        }
        );

    router.route('/detail')
        .post(
        function (req, res) {
            var app_id = req.headers.app_id;
            var auth_token = req.headers.auth_token;

            var uris = req.body.material_uri;
            console.log('Get Material');
            backendService.getClient().getMaterial(auth_token, uris,
                function (err, response) {
                    if (err) {
                        res.json({ response_code: '96', response_message: 'System Errors', data: err });
                    }
                    else {
                        res.json({
                            response_code: '00', response_message: 'Success',
                            data: response
                        });
                    }
                });
        }
        );

    return router;

})();