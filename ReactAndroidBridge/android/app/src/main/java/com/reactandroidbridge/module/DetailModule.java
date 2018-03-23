package com.reactandroidbridge.module;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.reactandroidbridge.DetailActivity;
import com.reactandroidbridge.TestActivity;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by tongqinyuan on 2017/12/27.
 */

public class DetailModule extends ReactContextBaseJavaModule implements ActivityEventListener{

    private final ReactApplicationContext reactContext;
    public static final String EVENT_NAME = "nativeCallRn";

    //保存打开的activity，js里的回调接口
    private List<Callback> successCallBack = new ArrayList<>();

    public DetailModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        //注册activity的打开和返回监听，用于activity返回的时候回调
        reactContext.addActivityEventListener(this);
    }


    //定义一个module名字
    @Override
    public String getName() {
        return "DetailModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }

    /**
     * 定义一个方法，让js可以收到参数
     * RN中剩下的两种通信方式，存在一个共同的特点：
     从RN层调用Native层，Native层处理完成后，回调RN层
     */
    @ReactMethod
    public void getDataFromIntent(Callback successBack, Callback erroBack){
        try {
            Activity currentActivity = getCurrentActivity();
            //获取到当前activity中intent数据
            String result_text1 = currentActivity.getIntent().getStringExtra("result_text1");//会有对应数据放入
            String result_text2 = currentActivity.getIntent().getStringExtra("result_text2");//会有对应数据放入
            String result_text3 = currentActivity.getIntent().getStringExtra("result_text3");//会有对应数据放入
            String result_text4 = currentActivity.getIntent().getStringExtra("result_text4");//会有对应数据放入
            if (TextUtils.isEmpty(result_text1)) {
                result_text1 = "No Data";
            }
            if (TextUtils.isEmpty(result_text2)) {
                result_text2 = "No Data";
            }
            if (TextUtils.isEmpty(result_text3)) {
                result_text3 = "No Data";
            }
            if (TextUtils.isEmpty(result_text4)) {
                result_text4 = "No Data";
            }
            successBack.invoke(result_text1, result_text2, result_text3, result_text4);
        } catch (Exception e) {
            erroBack.invoke(e.getMessage());
        }
    }

    /**这是RN调用原生android的方法
     * 使用RCTDeviceEventEmitter进行android与RN通信
     */
    @ReactMethod
    public void getDataFromIntent(String params){
        Activity currentActivity = getCurrentActivity();
        if( getReactApplicationContext() != null){
            Intent intent = new Intent( getReactApplicationContext(), TestActivity.class);
            intent.putExtra("params",params);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivity(intent);
        }else{
            Log.e("DetailModule","跳转失败");
        }

    }

    /**
     * Native调用RN,吧msg参数传递给RN
     * RCTDeviceEventEmitter
     */
    public void nativeCallRn(String msg) {
        Log.e("tests",msg+"==执行了吗=");
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(EVENT_NAME,msg);
    }

    //定义一个react native 调用的方法
    @ReactMethod
    public void startActivityByRN(final String text1, final String text2, final String text3, final String text4,
                                  final Callback successBack, final Callback errorBack) {
        successCallBack.add(successBack);
        try {
            Activity currentActivity = getCurrentActivity();
            if (null != currentActivity) {
                Intent intent = new Intent(currentActivity, DetailActivity.class);
                intent.putExtra("result_text1", text1);
                intent.putExtra("result_text2", text2);
                intent.putExtra("result_text3", text3);
                intent.putExtra("result_text4", text4);
                intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
                //currentActivity.startActivityForResult(intent, 1100);
                currentActivity.startActivity(intent);
            }
        } catch (Exception e) {
            e.printStackTrace();
            errorBack.invoke(e.getMessage());
        }

    }

    @ReactMethod
    public void RNCallNativeCallback(String msg,Callback c){
        try {
            String newmsg = "callback就是一个回调，类似安卓中定义一个接口，用于回调"+msg;
            c.invoke(newmsg);
        }catch (Exception e){
            c.invoke(e.getMessage()+"错误");
        }

    }

    @ReactMethod
    public void RNCallNativePromise(String msg, Promise p){
        String newmsg = "Promise就是一个回调，类似安卓中定义一个接口，用于回调"+msg;
        p.resolve(newmsg);
    }

    @ReactMethod
    public void IntentDataToJs(Callback successBack, Callback errorBack){
        try{
            Activity currentActivity = getCurrentActivity();
            int page = currentActivity.getIntent().getIntExtra("page",0);
            successBack.invoke(page+"");
        }catch (Exception e){
            e.printStackTrace();
            errorBack.invoke(e.getMessage());
        }

    }


    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {

    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
