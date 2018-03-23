/**
 * Created by tongqinyuan on 2017/12/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import BackItem from './../commonComponent/BackItem';


export default class FacebookTabBarExample extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //做复杂操作
        const {state} = this.props.navigation;
    };

    render() {
        return (<View style={styles.container}>
            <ScrollView>
                <View style={{marginTop: 10, marginBottom: 10}}>
                    <BackItem title={'扫一扫'}/>
                </View>
                <View>
                    <BackItem title={'省流量默认'}/>
                </View>
                <View>
                    <BackItem title={'消息提醒'}/>
                </View>
                <View>
                    <BackItem title={'邀请好友'}/>
                </View>
                <View>
                    <BackItem title={'清除缓存'} rightTitle={'19.9M'}/>
                </View>
                <View>
                    <BackItem title={'意见反馈'}/>
                </View>
                <View>
                    <BackItem title={'问卷调查'}/>
                </View>
                <View>
                    <BackItem title={'帮助支付'}/>
                </View>
                <View>
                    <BackItem title={'网络诊断'}/>
                </View>
                <View style={{marginTop: 10,}}>
                    <BackItem title={'精品应用'} />
                </View>
                <View>
                    <BackItem title={'扫一扫'}/>
                </View>
                <BackItem title={'扫一扫'}/>
                <BackItem title={'扫一扫'}/>
                <BackItem title={'扫一扫'}/>
                <BackItem title={'扫一扫'}/>

            </ScrollView>
        </View>);
    };


}

const styles = StyleSheet.create({
    container: {},
});
