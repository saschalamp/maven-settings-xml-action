var core = require('@actions/core');
var settings = require('./settings');

function run() {
  try {
    // open default template
    var templateXml = settings.getSettingsTemplate();

    // update from action input
    settings.updateServers(templateXml);
    settings.updateRepositories(templateXml);
    settings.updatePluginRepositories(templateXml);

    // write template to filepath
    settings.writeSettings( templateXml);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

module.exports = {
  run
}