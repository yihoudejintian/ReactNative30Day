package com.reactandroidbridge.rnpackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.reactandroidbridge.module.DetailModule;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by tongqinyuan on 2017/12/27.
 */

public class DetailPackage implements ReactPackage {


    public DetailModule mDetailModule;

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        mDetailModule = new DetailModule(reactContext);
        return Arrays.<NativeModule>asList(mDetailModule);
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
