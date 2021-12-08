import React, { Component} from 'react';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { films: [] }
    }

    loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => this.setState({ films: data.results }))
    }

    render() {
        return(
            <View style={styles.main_container}>
                <TextInput style={styles.textInput} placeholder='Titre du film'/>
                <Button style={{ height: 50 }} title='Button' onPress={() => this.loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
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