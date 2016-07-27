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

transport = ThriftTransports.TBufferedTransport()
protocol = ThriftProtocols.TBinaryProtocol()
//  transport = TSocket.TSocket(host, port)
//    transport = TTransport.TBufferedTransport(transport)

//    protocol = TBinaryProtocol.TBinaryProtocol(transport)
//baseservice = LextendBase.Client(ThriftProtocols.MultiplexProtocol.createClient(protocol, 'LextendBase'))
//authservice = LextendAuth.Client(ThriftProtocols.MultiplexProtocol(protocol, 'LextendAuth'))
//mediaservice = LextendMedia.Client(ThriftProtocols.MultiplexProtocol(protocol, 'LextendMedia'))
//transport = ThriftTransports.TSocket();//backend_gateway,backend_port,50000);
var connection = thrift.createConnection(backend_gateway, backend_port, {transport: thrift.TFramedTransport}),
       multiplexer = new  thrift.Multiplexer(),
       root =  multiplexer.createClient('LextendBase',LextendService,connection);        
 
       connection.on('error', function(err) {
           console.error(err);
           test.done();
       });
//var client = MultiplexProtocol.createClient('fd', null,null);
//var connection = null;
var is_connected = false;

// Create a Calculator client with the connection
var client = null;

var BackendService = function () { };

BackendService.prototype.getClient = function () {
    try {
        if (is_connected == false || !connection || connection.connected == false) {
            console.log('Init connection');
            connection = thrift.createConnection(backend_gateway, backend_port, {
                transport: transport,
                protocol: protocol
            });
            console.log('Init Client');
            client = thrift.createClient(LextendService, connection);
            is_connected = true;
            connection.on('error', connection_error);
        }
        console.log('Connect to server', connection.connected);
        return client;
    }
    catch (err) {
        console.log('Get Client Error:', err);
        return null;
    }
}

var connection_error = function (err) {
    console.log('connection error:', err);
    is_connected = false;
    client = null;
}

module.exports = BackendService;