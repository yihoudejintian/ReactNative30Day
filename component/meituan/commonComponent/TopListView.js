/**
 * Created by tongqinyuan on 2017/12/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    TouchableOpacity,
    Image,
    Dimensions,
    ListView,
    ScrollView,
} from 'react-native';

const {width,height} = Dimensions.get('window');
const cellNum = 5;
const itemWidth = Math.floor(width / 5);
export default class TopListView extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource : ds.cloneWithRows(this.props.dataArr),
        }
    };

    componentDidMount(){
        //做复杂操作
    };

    render(){
        return (<ListView dataSource={this.state.dataSource}
                          renderRow={this.renderChildsView}
                          contentContainerStyle={styles.contentContainerStyle}

        />);
    };

    renderChildsView(rowData, sectionID, rowID, highlightRow){

         return (<TouchableOpacity activeOpacity={0.5} style={styles.tabitemStyle} >
            <Image source={{uri:rowData.image}} style={styles.imageIcon} />
            <Text >{rowData.title}</Text>
        </TouchableOpacity>);
    };


};

TopListView.defaultProps={
    dataArr:[],
}



const styles = StyleSheet.create({

    imageIcon:{
        width:40,
        height:40,
    },
    tabitemStyle:{
        width:itemWidth,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:5,
    },
    contentContainerStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width,
        backgroundColor:'white',

    },
});