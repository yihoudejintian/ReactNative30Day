/**
 * Created by tongqinyuan on 2017/12/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class BackItem extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        //做复杂操作
    };

    render() {
        return (<TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <View style={styles.LeftViewStyle}>
                    <Image source={{uri:this.props.leftIcon}} style={styles.leftimageIcon}/>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                </View>
                <View style={styles.rightViewStyle}>
                    <Text style={styles.rightTxt}>{this.props.rightTitle}</Text>
                    <Image source={{uri: this.props.icon}} style={styles.imageIcon}/>
                </View>
            </View>
        </TouchableOpacity>);
    };


}
BackItem.defaultProps = {
    title: '',
    leftIcon:'',
    rightTitle: '',
    icon: 'icon_cell_rightarrow',
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white',
    },
    LeftViewStyle:{
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftimageIcon:{
        width:24,
        height:24,
        borderRadius:12,
    },
    rightViewStyle: {
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightTxt: {
        marginRight: 5,
        fontSize: 12,
    },
    imageIcon: {
        width: 8,
        height: 13,
    },
    titleStyle: {
        marginLeft:10,
    }
});