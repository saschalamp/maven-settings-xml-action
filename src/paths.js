var core = require('@actions/core');
var os = require('os');
var path = require('path');

function getSettingsPath() {
    var settingsPath = core.getInput('settingsPath');
    if (settingsPath == '') {
        settingsPath = path.join(os.homedir(), '.m2', 'settings.xml')
    }
    return settingsPath;
}

module.exports = {
    getSettingsPath
}
