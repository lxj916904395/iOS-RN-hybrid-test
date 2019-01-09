import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    FlatList
} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class RNHighScores extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredData: ['啊飒飒是方法', 'saasafsafasf', 'das阿萨德撒飞洒发生发顺丰']
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <AnimatedFlatList
                    renderItem={this._renderItemComponent.bind(this)}
                    horizontal={false}
                    data={this.state.filteredData}
                    numColumns={1}
                    keyExtractor={(item, index)=>index}
                    bounces={false}
                />
            </View>
        );
    }

    _renderItemComponent({item, index}) {
        return (
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    itemView: {
        width: 300,
        height: 100,
        backgroundColor: 'red',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    }

});

// 整体js模块的名称
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);