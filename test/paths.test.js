var assert = require('assert');
var process = require('process');
var os = require('os');
var path = require('path');

var paths = require('../src/paths');

describe('run paths.js', function () {
    it('Settings path should be in the default location when not given explicitly', function () {
        // given input
        process.env['INPUT_SETTINGSPATH'] = '';

        // when
        var settingsPath = paths.getSettingsPath();

        // then
        assert.equal(settingsPath, path.join(os.homedir(), '.m2', 'settings.xml'));
    });

    it('Settings path should be in the given location', function () {
        // given input
        process.env['INPUT_SETTINGSPATH'] = '/usr/share/maven/ref/settings.xml';

        // when
        var settingsPath = paths.getSettingsPath();

        // then
        assert.equal(settingsPath, '/usr/share/maven/ref/settings.xml');
    });
});
