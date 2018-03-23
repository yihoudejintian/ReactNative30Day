package com.reactandroidbridge;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.view.View;
import android.widget.TextView;

/**
 * Created by tongqinyuan on 2017/12/28.
 */

public class ActivityCallActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_call_activity);
        Toolbar mToolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(mToolbar);

        String params = getIntent().getStringExtra("params");

        TextView text = (TextView) findViewById(R.id.text);
        if(!TextUtils.isEmpty(params)){
            text.append(params);
        }

    }


    public void Back(View view){
        finish();
    }
}
