//THRIFT CONNECTION
var thrift = require('thrift');
var sync = require('synchronize');
var async = require('async');
var LextendService = require('../../lextend-api/LextendService');
var ThriftTransports = require('thrift/transport');
var ThriftProtocols = require('thrift/protocol');
var auth_ttypes = require('../../lextend-api/auth_types');
var learning_ttypes = require('../../lextend-api/learning_types');
var common_ttypes = require('../../lextend-api/common_types');
var annot_ttypes = require('../../lextend-api/annot_types');

transport = ThriftTransports.TBufferedTransport()
protocol = ThriftProtocols.TBinaryProtocol()

var connection = thrift.createConnection("lextend.cloudapp.net", 2016, {
    transport: transport,
    protocol: protocol
});

var is_connected = true;
connection.on('error', function (err) {
    console.log('connection error:');
    console.log(err);
    is_connected = false;
});

// Create a Calculator client with the connection
var client = thrift.createClient(LextendService, connection);

var AuthService = function () { };

AuthService.prototype.loginWithPassword = function (username, password, app_id) {
    sync.fiber(function () {
        var result = sync.await(client.loginWithPassword(username, password, app_id,sync.defer()));
        console.log('Sync call: ', result);
        return result;
    });
    // }, function(err, results){
    //     console.log('Sync result: ', results);
        
    // });
    // client.loginWithPassword(username, password, app_id, function (err, response) {
    //     if (response) {
    //         auth_token = response.tokenstr;
    //         console.log(response);
    //         return { response_code: '00', response_message: 'Login success!', auth_token: auth_token };
    //     }
    //     else {
    //         return { response_code: '01', response_message: 'Invalid user information' };
    //     }
    // });
};

module.exports = AuthService;