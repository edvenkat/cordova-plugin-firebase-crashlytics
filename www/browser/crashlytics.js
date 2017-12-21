var PLUGIN_NAME = 'Crashlytics';

function Crashlytics() {
}

Crashlytics.prototype = {
  crash: function() {
    alert("Crash! Bang!");
  },
  logPriority: function(priority, tag, message) {
    console.debug("P: " + priority + "   T: " + tag + "   M: " + message);
  },
  log: function(message) {
    console.debug(message);
  },
  setString: function(key, value) {
    console.debug(key + ":" + value);
  },
  setBool: function(key, value) {
    console.debug(key + ":" + value);
  },
  setDouble: function(key, value) {
    console.debug(key + ":" + value);
  },
  setFloat: function(key, value) {
    console.debug(key + ":" + value);
  },
  setInt: function(key, value) {
    console.debug(key + ":" + value);
  }
};

module.exports = {
  initialise: function() {
    return new Crashlytics();
  }
};
