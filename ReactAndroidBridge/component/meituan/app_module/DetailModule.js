/**
 * Created by tongqinyuan on 2017/12/28.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    DeviceEventEmitter,
    ToastAndroid,
    View,
} from 'react-native';

import {NativeModules} from 'react-native';
const {DetailModule} = NativeModules;

export default DetailModule;