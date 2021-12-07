import React, { Component} from 'react';
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';

class Search extends React.Component {
    render() {
        return(
            <View style={styles.main_container}>
                <TextInput style={styles.textInput} placeholder='Titre du film'/>
                <Button style={{ height: 50 }} title='Button' onPress={() => {}}/>
                <FlatList
                    data={films}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    textInput: { 
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search