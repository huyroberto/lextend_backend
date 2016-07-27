//THRIFT CONNECTION
var thrift = require('thrift');
var LextendService = require('../../lextend-api/LextendService');
var LextendBase = require('../../lextend-api/LextendBase');
var ThriftTransports = require('thrift/transport');
var MultiplexProtocol = require('thrift/multiplexed_protocol');
var ThriftProtocols = require('thrift/protocol');
var auth_ttypes = require('../../lextend-api/auth_types');
var learning_ttypes = require('../../lextend-api/learning_types');
var common_ttypes = require('../../lextend-api/common_types');
var annot_ttypes = require('../../lextend-api/annot_types');
var backend_gateway = '210.211.116.19';//lextend.cloudapp.net';
var backend_port = 2016;

var connection = thrift.createConnection(backend_gateway, backend_port, { transport: thrift.TFramedTransport }),
    multiplexer = new thrift.Multiplexer(),
    client = multiplexer.createClient('LextendBase', LextendService, connection);

connection.on('error', function (err) {
    console.error(err);
});

var AuthService = function () { };
AuthService.prototype.getClient = function () {
    return client;
}
module.exports = AuthService;