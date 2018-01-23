/* jshint -W097 */
// jshint strict:true
/*jslint node: true */
/*jslint esversion: 6 */
'use strict';

module.exports.parse = function (raw) {
    const message = {};
    message.protocol = 'FHT';
    message.raw = raw;

    return message;
};

module.exports.cmd = function () {
    return false;
};
