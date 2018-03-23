package com.reactandroidbridge;

import android.content.Context;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.NativeModuleCallExceptionHandler;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.reactandroidbridge.rnpackage.DetailPackage;

import junit.framework.Assert;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * Created by tongqinyuan on 2017/12/27.
 */

public class SingleActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

    ReactRootView mReactRootView;

    ReactInstanceManager mReactInstanceManager;

    String path = Environment.getExternalStorageDirectory().getPath() +File.separator+ "android.bundle";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        mReactRootView = (ReactRootView) findViewById(R.id.single_react_root_view);

        if (new File(path).exists()) {
            setReactNative();
        } else {
            //todo 可以从网络上下载
        }
    }

    public void saveAndroidBundle(){
        new Thread(new Runnable() {
            @Override
            public void run() {
               try{
                   AssetManager assets = getResources().getAssets();
                   String[] bundles = assets.list("bundle");

                   InputStream open = assets.open("bundle/android.bundle");
                   String path = Environment.getExternalStorageDirectory().getPath();
                   File file = new File(path,"android.bundle");

                   OutputStream outputStream = new FileOutputStream(file);

                   byte[] bytes = new byte[1024];
                   int len = 0;
                   while ((len=open.read(bytes))!=-1){
                       outputStream.write(bytes,0,len);
                   }



               }catch (Exception e){
                    e.printStackTrace();
               }finally {

               }
            }
        }).start();
    }


    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(this);
        }
    }


    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    
    private void setReactNative() {
        if (new File(path).exists()) {
            mReactInstanceManager = ReactInstanceManager.builder()
                    .setApplication(this.getApplication())
                    .setJSBundleFile(path)//设置加载文件
                    .setNativeModuleCallExceptionHandler(new NativeModuleCallExceptionHandler() {
                        @Override
                        public void handleException(Exception e) {
                            e.printStackTrace();
                        }
                    })
                    .addPackage(new DetailPackage())
                    .addPackage(new MainReactPackage())
                    .setJSMainModulePath("index")
                    .setUseDeveloperSupport(BuildConfig.DEBUG)
                    .setInitialLifecycleState(LifecycleState.RESUMED)
                    .build();
            mReactRootView.startReactApplication(mReactInstanceManager, "ReactAndroidBridge", null);//启动入口
        } else {
            Toast.makeText(this, "保存 android.bundle 到手机的根目录下。", Toast.LENGTH_LONG).show();
        }
    }
}
