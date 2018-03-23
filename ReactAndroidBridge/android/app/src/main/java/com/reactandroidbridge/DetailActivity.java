package com.reactandroidbridge;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

/**
 * Created by tongqinyuan on 2017/12/27.
 */

public class DetailActivity extends ReactActivity {

    private static int i = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        i++;
        Log.e("DetailActivity  " , "DetailActivity onCreate ");
    }

    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);

        Log.e("DetailActivity  " , "DetailActivity Intent ");
//        overridePendingTransition(R.anim.fade_in, R.anim.fade_out);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.e("DetailActivity  " , "DetailActivity onDestroy ");
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     * <p>
     * 这里指定了js的默认加载类名字，然后你需要在js中register它
     */
    @Override
    protected String getMainComponentName() {
        return "detail";
    }

    @Override
    public void onBackPressed() {
        Intent intent = new Intent();
        //intent.putExtra("result", "我是传说中的返回数据 " + i--);
        //setResult(Activity.RESULT_OK, intent);

        //super.onBackPressed();
        intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
        intent.setClass(this, MainActivity.class);
        startActivity(intent);
    }
}
