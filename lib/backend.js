//THRIFT CONNECTION
var thrift = require('thrift');
var LextendService = require('../lextend-api/LextendService');
var ThriftTransports = require('thrift/transport');
var ThriftProtocols = require('thrift/protocol');
var auth_ttypes = require('../lextend-api/auth_types');
var learning_ttypes = require('../lextend-api/learning_types');
var common_ttypes = require('../lextend-api/common_types');
var annot_ttypes = require('../lextend-api/annot_types');
var backend_gateway = '210.211.116.19',//'lextend.cloudapp.net';
var backend_port = 2016;

transport = ThriftTransports.TBufferedTransport()
protocol = ThriftProtocols.TBinaryProtocol()

var connection = null;
var is_connected = false;

// Create a Calculator client with the connection
var client = null;

var BackendService = function () { };

BackendService.prototype.getClient = function(){
    if(is_connected == false){
        connection = thrift.createConnection(backend_gateway, backend_port,{
            transport: transport,
            protocol: protocol
        });
        
        client = thrift.createClient(LextendService, connection);
        is_connected = true;
        connection.on('error',connection_error);
    }
    return client;
}

var connection_error = function(err){
    console.log('connection error:', err);
    is_connected = false;
}
BackendService.prototype.checkConnection = function () {
    console.log('Check connection from backendService');
    if (is_connected == false) {
        connection = thrift.createConnection("lextend.cloudapp.net", 2016, {
            transport: transport,
            protocol: protocol
        });

        connection.on('error', function (err) {
            console.log('connection error:');
            console.log(err);
            is_connected = false;
        });

        client = thrift.createClient(LextendService, connection);
        is_connected = true;
    }
}

module.exports = BackendService;