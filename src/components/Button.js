import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width / 3,
        width: Dimensions.get('window').width / 2,
        padding: 10,
        backgroundColor: 'rgb(0, 0, 50)',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#90EE90',
        borderRadius: 7,
    }
})

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}
