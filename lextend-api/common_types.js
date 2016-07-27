//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
ttypes.ErrorCode = {
  'UNKNOWN' : 0,
  'AUTHENTICATION_FAIL' : 1,
  'BAD_DATA_FORMAT' : 2,
  'INTERNAL_ERROR' : 3,
  'TOKEN_EXPIRE' : 4,
  'TOKEN_INVALID' : 5,
  'USERNAME_EXISTED' : 6,
  'LIMIT_REACHED' : 7,
  'WORD_NOT_FOUND' : 8,
  'INVALID_UPDATE' : 9,
  'INVALID_LANGUAGE_CODE' : 10,
  'ILLEGAL_ARGUMENT' : 11
};
ttypes.TEST_PASS_SCORE = 5;
ttypes.TEST_PASS_WITH_HINT_SCORE = 5;
ttypes.TEST_PEEK_SCORE = 3;
ttypes.TEST_EASY = 10;
ttypes.LOOKUP_BY_CLICKING = 1;
ttypes.LOOKUP_IN_DICTIONARY = 2;
ttypes.MEDIA_CHUNK_STARTING_NUM = 1;
ttypes.FIRST_PAGE_TOKEN = -1;
ttypes.LAST_PAGE_TOKEN = -2;
ttypes.MIME_IMAGE_JPEG = 'image/jpeg';
ttypes.MIME_IMAGE_JPG = 'image/jpg';
ttypes.MIME_IMAGE_PNG = 'image/png';
ttypes.MIME_IMAGE_BMP = 'image/bmp';
ttypes.MIME_AUDIO_MP3 = 'audio/mp3';
ttypes.MIME_AUDIO_OGG = 'audio/ogg';
ttypes.MIME_AUDIO_WAV = 'audio/wav';
ttypes.MIME_VIDEO_MP4 = 'video/mp4';
ttypes.USERNAME_MAX_LENGTH = 32;
ttypes.USERNAME_MIN_LENGTH = 3;
ttypes.USERNAME_REGEX = '^[a-z0-9]([a-z0-9]{0,30}[a-z0-9])?$';
ttypes.PASSWORD_MAX_LEGNTH = 32;
ttypes.PASSWORD_MIN_LENGTH = 4;
ttypes.MEDIA_DATA_LIMIT = 20971520;
ttypes.MEDIA_ID_REGEX = '^[a-z0-9]([a-z0-9_-]{0,62}[a-z0-9])?$';
ttypes.MEDIA_ID_MIN_LENGTH = 6;
ttypes.MEDIA_ID_MAX_LENGTH = 64;
ttypes.MAX_NUM_WORDS_PER_WORDBOOK = 100;
