import React from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

class Search extends React.Component {
    render() {
        return(
            <View style={{ marginTop: 20}}>
                <TextInput style={styles.textInput} placeholder='Titre du film'/>
                <Button style={styles.button} title='Button' onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: { 
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5
    },
    button: {
        height: 50,
    }
})

export default Search