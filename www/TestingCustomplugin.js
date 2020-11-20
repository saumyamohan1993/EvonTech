var exec = require('cordova/exec');

// module.exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'TestingCustomplugin', 'coolMethod', [arg0]);
// };

module.exports.add= function (arg0, success, error) {
    exec(success, error, 'TestingCustomplugin', 'add', [arg0]);
};