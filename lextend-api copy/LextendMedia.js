//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var auth_ttypes = require('./auth_types');
var learning_ttypes = require('./learning_types');
var common_ttypes = require('./common_types');
var annot_ttypes = require('./annot_types');
var media_ttypes = require('./media_types');


var ttypes = require('./backend_types');
//HELPER FUNCTIONS AND STRUCTURES

var LextendMedia_uploadMediaPartial_args = function(args) {
  this.authToken = null;
  this.mediaInfo = null;
  this.chunkNum = null;
  this.chunk = null;
  if (args) {
    if (args.authToken !== undefined && args.authToken !== null) {
      this.authToken = args.authToken;
    }
    if (args.mediaInfo !== undefined && args.mediaInfo !== null) {
      this.mediaInfo = new media_ttypes.MediaInfo(args.mediaInfo);
    }
    if (args.chunkNum !== undefined && args.chunkNum !== null) {
      this.chunkNum = args.chunkNum;
    }
    if (args.chunk !== undefined && args.chunk !== null) {
      this.chunk = args.chunk;
    }
  }
};
LextendMedia_uploadMediaPartial_args.prototype = {};
LextendMedia_uploadMediaPartial_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.mediaInfo = new media_ttypes.MediaInfo();
        this.mediaInfo.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.chunkNum = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.chunk = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LextendMedia_uploadMediaPartial_args.prototype.write = function(output) {
  output.writeStructBegin('LextendMedia_uploadMediaPartial_args');
  if (this.authToken !== null && this.authToken !== undefined) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.mediaInfo !== null && this.mediaInfo !== undefined) {
    output.writeFieldBegin('mediaInfo', Thrift.Type.STRUCT, 2);
    this.mediaInfo.write(output);
    output.writeFieldEnd();
  }
  if (this.chunkNum !== null && this.chunkNum !== undefined) {
    output.writeFieldBegin('chunkNum', Thrift.Type.I32, 3);
    output.writeI32(this.chunkNum);
    output.writeFieldEnd();
  }
  if (this.chunk !== null && this.chunk !== undefined) {
    output.writeFieldBegin('chunk', Thrift.Type.STRING, 4);
    output.writeBinary(this.chunk);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LextendMedia_uploadMediaPartial_result = function(args) {
  this.success = null;
  this.ioerr = null;
  if (args instanceof ttypes.LextendIOError) {
    this.ioerr = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.ioerr !== undefined && args.ioerr !== null) {
      this.ioerr = args.ioerr;
    }
  }
};
LextendMedia_uploadMediaPartial_result.prototype = {};
LextendMedia_uploadMediaPartial_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ioerr = new ttypes.LextendIOError();
        this.ioerr.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LextendMedia_uploadMediaPartial_result.prototype.write = function(output) {
  output.writeStructBegin('LextendMedia_uploadMediaPartial_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.ioerr !== null && this.ioerr !== undefined) {
    output.writeFieldBegin('ioerr', Thrift.Type.STRUCT, 1);
    this.ioerr.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LextendMedia_mergeMediaChunks_args = function(args) {
  this.authToken = null;
  this.mediaInfo = null;
  this.totalNumChunks = null;
  if (args) {
    if (args.authToken !== undefined && args.authToken !== null) {
      this.authToken = args.authToken;
    }
    if (args.mediaInfo !== undefined && args.mediaInfo !== null) {
      this.mediaInfo = new media_ttypes.MediaInfo(args.mediaInfo);
    }
    if (args.totalNumChunks !== undefined && args.totalNumChunks !== null) {
      this.totalNumChunks = args.totalNumChunks;
    }
  }
};
LextendMedia_mergeMediaChunks_args.prototype = {};
LextendMedia_mergeMediaChunks_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.mediaInfo = new media_ttypes.MediaInfo();
        this.mediaInfo.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.totalNumChunks = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LextendMedia_mergeMediaChunks_args.prototype.write = function(output) {
  output.writeStructBegin('LextendMedia_mergeMediaChunks_args');
  if (this.authToken !== null && this.authToken !== undefined) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.mediaInfo !== null && this.mediaInfo !== undefined) {
    output.writeFieldBegin('mediaInfo', Thrift.Type.STRUCT, 2);
    this.mediaInfo.write(output);
    output.writeFieldEnd();
  }
  if (this.totalNumChunks !== null && this.totalNumChunks !== undefined) {
    output.writeFieldBegin('totalNumChunks', Thrift.Type.I32, 3);
    output.writeI32(this.totalNumChunks);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LextendMedia_mergeMediaChunks_result = function(args) {
  this.success = null;
  this.ioerr = null;
  if (args instanceof ttypes.LextendIOError) {
    this.ioerr = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.ioerr !== undefined && args.ioerr !== null) {
      this.ioerr = args.ioerr;
    }
  }
};
LextendMedia_mergeMediaChunks_result.prototype = {};
LextendMedia_mergeMediaChunks_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ioerr = new ttypes.LextendIOError();
        this.ioerr.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LextendMedia_mergeMediaChunks_result.prototype.write = function(output) {
  output.writeStructBegin('LextendMedia_mergeMediaChunks_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.ioerr !== null && this.ioerr !== undefined) {
    output.writeFieldBegin('ioerr', Thrift.Type.STRUCT, 1);
    this.ioerr.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LextendMedia_getMediaInfo_args = function(args) {
  this.authToken = null;
  this.mediaUri = null;
  if (args) {
    if (args.authToken !== undefined && args.authToken !== null) {
      this.authToken = args.authToken;
    }
    if (args.mediaUri !== undefined && args.mediaUri !== null) {
      this.mediaUri = args.mediaUri;
    }
  }
};
LextendMedia_getMediaInfo_args.prototype = {};
LextendMedia_getMediaInfo_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.mediaUri = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LextendMedia_getMediaInfo_args.prototype.write = function(output) {
  output.writeStructBegin('LextendMedia_getMediaInfo_args');
  if (this.authToken !== null && this.authToken !== undefined) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.mediaUri !== null && this.mediaUri !== undefined) {
    output.writeFieldBegin('mediaUri', Thrift.Type.STRING, 2);
    output.writeString(this.mediaUri);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LextendMedia_getMediaInfo_result = function(args) {
  this.success = null;
  this.ioerr = null;
  if (args instanceof ttypes.LextendIOError) {
    this.ioerr = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new media_ttypes.MediaInfo(args.success);
    }
    if (args.ioerr !== undefined && args.ioerr !== null) {
      this.ioerr = args.ioerr;
    }
  }
};
LextendMedia_getMediaInfo_result.prototype = {};
LextendMedia_getMediaInfo_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new media_ttypes.MediaInfo();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ioerr = new ttypes.LextendIOError();
        this.ioerr.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LextendMedia_getMediaInfo_result.prototype.write = function(output) {
  output.writeStructBegin('LextendMedia_getMediaInfo_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ioerr !== null && this.ioerr !== undefined) {
    output.writeFieldBegin('ioerr', Thrift.Type.STRUCT, 1);
    this.ioerr.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LextendMedia_downloadMediaChunk_args = function(args) {
  this.authToken = null;
  this.info = null;
  this.offset = null;
  this.limit = null;
  if (args) {
    if (args.authToken !== undefined && args.authToken !== null) {
      this.authToken = args.authToken;
    }
    if (args.info !== undefined && args.info !== null) {
      this.info = new media_ttypes.MediaInfo(args.info);
    }
    if (args.offset !== undefined && args.offset !== null) {
      this.offset = args.offset;
    }
    if (args.limit !== undefined && args.limit !== null) {
      this.limit = args.limit;
    }
  }
};
LextendMedia_downloadMediaChunk_args.prototype = {};
LextendMedia_downloadMediaChunk_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authToken = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.info = new media_ttypes.MediaInfo();
        this.info.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.offset = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.limit = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LextendMedia_downloadMediaChunk_args.prototype.write = function(output) {
  output.writeStructBegin('LextendMedia_downloadMediaChunk_args');
  if (this.authToken !== null && this.authToken !== undefined) {
    output.writeFieldBegin('authToken', Thrift.Type.STRING, 1);
    output.writeString(this.authToken);
    output.writeFieldEnd();
  }
  if (this.info !== null && this.info !== undefined) {
    output.writeFieldBegin('info', Thrift.Type.STRUCT, 2);
    this.info.write(output);
    output.writeFieldEnd();
  }
  if (this.offset !== null && this.offset !== undefined) {
    output.writeFieldBegin('offset', Thrift.Type.I64, 3);
    output.writeI64(this.offset);
    output.writeFieldEnd();
  }
  if (this.limit !== null && this.limit !== undefined) {
    output.writeFieldBegin('limit', Thrift.Type.I64, 4);
    output.writeI64(this.limit);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LextendMedia_downloadMediaChunk_result = function(args) {
  this.success = null;
  this.ioerr = null;
  if (args instanceof ttypes.LextendIOError) {
    this.ioerr = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.ioerr !== undefined && args.ioerr !== null) {
      this.ioerr = args.ioerr;
    }
  }
};
LextendMedia_downloadMediaChunk_result.prototype = {};
LextendMedia_downloadMediaChunk_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ioerr = new ttypes.LextendIOError();
        this.ioerr.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LextendMedia_downloadMediaChunk_result.prototype.write = function(output) {
  output.writeStructBegin('LextendMedia_downloadMediaChunk_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeBinary(this.success);
    output.writeFieldEnd();
  }
  if (this.ioerr !== null && this.ioerr !== undefined) {
    output.writeFieldBegin('ioerr', Thrift.Type.STRUCT, 1);
    this.ioerr.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var LextendMediaClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
LextendMediaClient.prototype = {};
LextendMediaClient.prototype.seqid = function() { return this._seqid; }
LextendMediaClient.prototype.new_seqid = function() { return this._seqid += 1; }
LextendMediaClient.prototype.uploadMediaPartial = function(authToken, mediaInfo, chunkNum, chunk, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_uploadMediaPartial(authToken, mediaInfo, chunkNum, chunk);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_uploadMediaPartial(authToken, mediaInfo, chunkNum, chunk);
  }
};

LextendMediaClient.prototype.send_uploadMediaPartial = function(authToken, mediaInfo, chunkNum, chunk) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('uploadMediaPartial', Thrift.MessageType.CALL, this.seqid());
  var args = new LextendMedia_uploadMediaPartial_args();
  args.authToken = authToken;
  args.mediaInfo = mediaInfo;
  args.chunkNum = chunkNum;
  args.chunk = chunk;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LextendMediaClient.prototype.recv_uploadMediaPartial = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LextendMedia_uploadMediaPartial_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ioerr) {
    return callback(result.ioerr);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('uploadMediaPartial failed: unknown result');
};
LextendMediaClient.prototype.mergeMediaChunks = function(authToken, mediaInfo, totalNumChunks, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_mergeMediaChunks(authToken, mediaInfo, totalNumChunks);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_mergeMediaChunks(authToken, mediaInfo, totalNumChunks);
  }
};

LextendMediaClient.prototype.send_mergeMediaChunks = function(authToken, mediaInfo, totalNumChunks) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('mergeMediaChunks', Thrift.MessageType.CALL, this.seqid());
  var args = new LextendMedia_mergeMediaChunks_args();
  args.authToken = authToken;
  args.mediaInfo = mediaInfo;
  args.totalNumChunks = totalNumChunks;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LextendMediaClient.prototype.recv_mergeMediaChunks = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LextendMedia_mergeMediaChunks_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ioerr) {
    return callback(result.ioerr);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('mergeMediaChunks failed: unknown result');
};
LextendMediaClient.prototype.getMediaInfo = function(authToken, mediaUri, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getMediaInfo(authToken, mediaUri);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getMediaInfo(authToken, mediaUri);
  }
};

LextendMediaClient.prototype.send_getMediaInfo = function(authToken, mediaUri) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getMediaInfo', Thrift.MessageType.CALL, this.seqid());
  var args = new LextendMedia_getMediaInfo_args();
  args.authToken = authToken;
  args.mediaUri = mediaUri;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LextendMediaClient.prototype.recv_getMediaInfo = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LextendMedia_getMediaInfo_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ioerr) {
    return callback(result.ioerr);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getMediaInfo failed: unknown result');
};
LextendMediaClient.prototype.downloadMediaChunk = function(authToken, info, offset, limit, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_downloadMediaChunk(authToken, info, offset, limit);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_downloadMediaChunk(authToken, info, offset, limit);
  }
};

LextendMediaClient.prototype.send_downloadMediaChunk = function(authToken, info, offset, limit) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('downloadMediaChunk', Thrift.MessageType.CALL, this.seqid());
  var args = new LextendMedia_downloadMediaChunk_args();
  args.authToken = authToken;
  args.info = info;
  args.offset = offset;
  args.limit = limit;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

LextendMediaClient.prototype.recv_downloadMediaChunk = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new LextendMedia_downloadMediaChunk_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ioerr) {
    return callback(result.ioerr);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('downloadMediaChunk failed: unknown result');
};
var LextendMediaProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
LextendMediaProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

LextendMediaProcessor.prototype.process_uploadMediaPartial = function(seqid, input, output) {
  var args = new LextendMedia_uploadMediaPartial_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.uploadMediaPartial.length === 4) {
    Q.fcall(this._handler.uploadMediaPartial, args.authToken, args.mediaInfo, args.chunkNum, args.chunk)
      .then(function(result) {
        var result = new LextendMedia_uploadMediaPartial_result({success: result});
        output.writeMessageBegin("uploadMediaPartial", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.LextendIOError) {
          var result = new LextendMedia_uploadMediaPartial_result(err);
          output.writeMessageBegin("uploadMediaPartial", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("uploadMediaPartial", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.uploadMediaPartial(args.authToken, args.mediaInfo, args.chunkNum, args.chunk, function (err, result) {
      if (err == null || err instanceof ttypes.LextendIOError) {
        var result = new LextendMedia_uploadMediaPartial_result((err != null ? err : {success: result}));
        output.writeMessageBegin("uploadMediaPartial", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("uploadMediaPartial", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LextendMediaProcessor.prototype.process_mergeMediaChunks = function(seqid, input, output) {
  var args = new LextendMedia_mergeMediaChunks_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.mergeMediaChunks.length === 3) {
    Q.fcall(this._handler.mergeMediaChunks, args.authToken, args.mediaInfo, args.totalNumChunks)
      .then(function(result) {
        var result = new LextendMedia_mergeMediaChunks_result({success: result});
        output.writeMessageBegin("mergeMediaChunks", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.LextendIOError) {
          var result = new LextendMedia_mergeMediaChunks_result(err);
          output.writeMessageBegin("mergeMediaChunks", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("mergeMediaChunks", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.mergeMediaChunks(args.authToken, args.mediaInfo, args.totalNumChunks, function (err, result) {
      if (err == null || err instanceof ttypes.LextendIOError) {
        var result = new LextendMedia_mergeMediaChunks_result((err != null ? err : {success: result}));
        output.writeMessageBegin("mergeMediaChunks", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("mergeMediaChunks", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LextendMediaProcessor.prototype.process_getMediaInfo = function(seqid, input, output) {
  var args = new LextendMedia_getMediaInfo_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getMediaInfo.length === 2) {
    Q.fcall(this._handler.getMediaInfo, args.authToken, args.mediaUri)
      .then(function(result) {
        var result = new LextendMedia_getMediaInfo_result({success: result});
        output.writeMessageBegin("getMediaInfo", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.LextendIOError) {
          var result = new LextendMedia_getMediaInfo_result(err);
          output.writeMessageBegin("getMediaInfo", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getMediaInfo", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getMediaInfo(args.authToken, args.mediaUri, function (err, result) {
      if (err == null || err instanceof ttypes.LextendIOError) {
        var result = new LextendMedia_getMediaInfo_result((err != null ? err : {success: result}));
        output.writeMessageBegin("getMediaInfo", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getMediaInfo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

LextendMediaProcessor.prototype.process_downloadMediaChunk = function(seqid, input, output) {
  var args = new LextendMedia_downloadMediaChunk_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.downloadMediaChunk.length === 4) {
    Q.fcall(this._handler.downloadMediaChunk, args.authToken, args.info, args.offset, args.limit)
      .then(function(result) {
        var result = new LextendMedia_downloadMediaChunk_result({success: result});
        output.writeMessageBegin("downloadMediaChunk", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        if (err instanceof ttypes.LextendIOError) {
          var result = new LextendMedia_downloadMediaChunk_result(err);
          output.writeMessageBegin("downloadMediaChunk", Thrift.MessageType.REPLY, seqid);
        } else {
          var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("downloadMediaChunk", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.downloadMediaChunk(args.authToken, args.info, args.offset, args.limit, function (err, result) {
      if (err == null || err instanceof ttypes.LextendIOError) {
        var result = new LextendMedia_downloadMediaChunk_result((err != null ? err : {success: result}));
        output.writeMessageBegin("downloadMediaChunk", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("downloadMediaChunk", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

