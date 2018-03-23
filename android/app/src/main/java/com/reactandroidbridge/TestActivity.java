package com.reactandroidbridge;

import android.annotation.TargetApi;
import android.app.ActivityOptions;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.internal.widget.ViewUtils;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.transition.Transition;
import android.transition.TransitionInflater;
import android.util.Log;
import android.util.Pair;
import android.view.View;
import android.widget.TextView;

import com.facebook.react.bridge.WritableMap;

/**
 * Created by tongqinyuan on 2017/12/27.
 */

public class TestActivity extends AppCompatActivity {

    static final int REQUEST_CODE_VIEW_SHOT = 5407;
    private TextView mContent;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_test);
        Toolbar mToolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(mToolbar);

        mContent = (TextView) findViewById(R.id.content);
        String params = getIntent().getStringExtra("params");
        TextView txt = (TextView) findViewById(R.id.text);

        if(!TextUtils.isEmpty(params)){
            txt.append(params);
        }




    }

    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    public void CallRn(View view){
        Log.e("---","sendMsgToRN");
//        MainApplication.getReactPackage().mDetailModule.nativeCallRn("hello world");
//        Intent intent = new Intent(this,SingleActivity.class);
//        startActivity(intent);

        Intent intent = new Intent();
//        intent.setClass(this, MainActivity.class);
//        intent.putExtra("page",2);

        intent.setAction(Intent.ACTION_VIEW);
        Uri uri = Uri.parse("rou://rou/app/main/mine");
        intent.setData(uri);
        startActivity(intent);
     //   ActivityOptions options =
     //           ActivityOptions.makeSceneTransitionAnimation(this,
       //                 Pair.create(view, getResources().getString(R.string.transition_shot)),
           //             Pair.create(view, getResources().getString(R.string
         //                       .transition_shot_background)));
       // startActivityForResult(intent, REQUEST_CODE_VIEW_SHOT, options.toBundle());

    }

    public void AtCallOfflineRn(View view){
//        Intent intent = new Intent(this,SingleActivity.class);
////        startActivity(intent);
//
        MainApplication.getReactPackage().mDetailModule.nativeCallRn("hello world");
    }


    public void AtCallAt(View view){
        Intent intent = new Intent(this,ActivityCallActivity.class);
        intent.putExtra("params","哈哈哈哈");
        startActivity(intent);
    }

}
