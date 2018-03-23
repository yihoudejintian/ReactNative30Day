package com.reactandroidbridge;

import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.reactandroidbridge.module.DetailModule;

public class MainActivity extends ReactActivity {

    private static final String TAG = MainActivity.class.getSimpleName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.e(TAG,"onCreate");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.e(TAG,"onStart");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.e(TAG,"onRestart");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.e(TAG,"onResume");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.e(TAG,"onPause");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.e(TAG,"onDestroy");
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */



    @Override
    protected String getMainComponentName() {
        Log.e(TAG,"getMainComponentName");
        return "ReactAndroidBridgea";
    }

    public void ss(){
        DetailModule nativeModule = getReactInstanceManager().getCurrentReactContext().getNativeModule(DetailModule.class);

    }

}
