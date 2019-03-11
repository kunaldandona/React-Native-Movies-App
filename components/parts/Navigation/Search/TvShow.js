import React, { Component } from 'react'
import { View,  StyleSheet } from 'react-native'
import { Container, Content, Text, Card, Thumbnail } from 'native-base';

import Form from './Form'

class TvShow extends Component {
    state = {
        text: null,
        results: [],
    }

    fetchMovieData = () => {
        const Url = `https://api.themoviedb.org/3/search/tv?api_key=8367b1854dccedcfc9001204de735470&language=en-US&query=${this.state.text}&page=1`
        fetch(Url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    render() {
        return (
            <Content style={{padding: 10}}>
                <Container style={styles.container}>
                    <Form
                    onSubmit={this.fetchMovieData}
                    onChangeText={text => this.setState({ text })} />
                    {this.state.results.slice(0, 10).map((result, i) => {
                        return (
                            <Card key={i} style={styles.movieInfo}>
                                <View>
                                <Thumbnail square large style={styles.movieImage} source={{uri: `https://image.tmdb.org/t/p/original/${result.poster_path}`}} /> 
                                </View>
                                <View style={{paddingLeft: 10, width: 0, flexGrow: 1}}>
                                    <Text style={styles.movieTitle}>{result.original_name}</Text>
                                    <Text style={{fontSize: 15}} numberOfLines={4} ellipsizeMode='tail'>{result.overview}</Text>
                                </View>
                            </Card>
                        )
                    })}
                </Container>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 180,
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
    },
    movieInfo: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        height: 150,
    },
    movieImage:{
        width: 100,
        height: 150, 
        resizeMode: 'contain'
    },
    movieTitle: {
        fontSize: 23,
        padding: 5,
    }
})

export default TvShow
