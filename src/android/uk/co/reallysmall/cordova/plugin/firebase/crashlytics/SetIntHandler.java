package uk.co.reallysmall.cordova.plugin.firebase.crashlytics;

import android.util.Log;

import com.crashlytics.android.Crashlytics;

import org.json.JSONArray;
import org.json.JSONException;

public class SetIntHandler implements ActionHandler {
    @Override
    public boolean handle(JSONArray args) {
        try {
            final String key = args.getString(0);
            final Integer value = args.getInt(1);

            Crashlytics.setInt(key, value);
        } catch (JSONException e) {
            Log.e(FirebaseCrashlyticsPlugin.TAG, "Error setting int", e);
        }
        return true;
    }
}
