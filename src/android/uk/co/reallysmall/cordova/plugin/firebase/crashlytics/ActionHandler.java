package uk.co.reallysmall.cordova.plugin.firebase.crashlytics;

import org.json.JSONArray;

public interface ActionHandler {
    boolean handle(JSONArray args);
}
