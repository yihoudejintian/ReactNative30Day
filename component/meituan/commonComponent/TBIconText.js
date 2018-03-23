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
                <Image source={{uri: this.props.icon}} style={styles.imageIcon}/>
                <Text style={styles.rightTxt}>{this.props.title}</Text>
            </View>
        </TouchableOpacity>);
    };


}
BackItem.defaultProps = {
    title: '',
    icon: 'icon_cell_rightarrow',
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',

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
        width: 55,
        height: 40,
    },
    titleStyle: {
        marginLeft: 10,
    }
});