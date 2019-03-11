import React, { Component } from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native'
import { Container, Content, Text, Button, Icon, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    imageStyle: {
        width: 300,
        height: 350,
    },
    titleText: {
        fontSize: 20,
        marginTop: 20,
    },
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
})

class NowPlaying extends Component {
    state = {
        results: [],
        total: 0,
        isLoaded: false,
    }

    componentDidMount = () => {
        const Url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8367b1854dccedcfc9001204de735470&language=en-US`
        fetch(Url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results,
                        page: data.total_pages,
                        total: data.total_results,
                        isLoaded: true,
                    })
                })
        }

    render() {
        let current = Math.floor(this.state.total/this.state.page);
        let random = Math.floor(Math.random() * (+current - +0)) + +0; 
        let movie = this.state.results[random];

        if(this.state.isLoaded){
        return(
            <Content style={{padding: 10}}>
            <Container>
                <Card style={{flex: 0}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
                        <Body>
                        <Text>{movie.title}</Text>
                        <Text note>Released on: {movie.release_date}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem >
                    <Body style={styles.section}>
                        <Image style={styles.imageStyle} resizeMode={'contain'} source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
                        <Text style={{textAlign: 'center', marginTop: 20}}>
                        {movie.overview}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                        <Icon name="trending-up" />
                        <Text>Trending: {movie.popularity}</Text>
                        </Button>
                    </Left>
                </CardItem>
                </Card>
            </Container>
            </Content>
        )
                            
    } else {
        return (
            <Content>
               <Text style={styles.titleText}>Loading...</Text>
            </Content>
        )
    }
    }
}

export default NowPlaying
