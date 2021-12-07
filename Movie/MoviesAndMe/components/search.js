import React from 'react';
import { View, Button, TextInput } from 'react-native';

class Search extends React.Component {
    render() {
        return(
            <View>
                <Text>Normalement c'est pas pété !</Text>
                <TextInput placeholder="Chercher"></TextInput>
                <Button placeholder="Appuie"></Button>
            </View>
        )
    }
}

export default Search
