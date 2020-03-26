/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { Button, Text, Title } from 'react-native-paper'
import BackgroundTimer from 'react-native-background-timer'
import TrackPlayer from 'react-native-track-player'
import VideoPlayer from 'react-native-video-player'


class App extends React.Component {


  state = {
    counter: 0
  }

  _interval = 0;
  onStart = () => {
    BackgroundTimer.start()
    this._interval = BackgroundTimer.setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
      if (this.state.counter === 20) {

        // TrackPlayer.setupPlayer().then(async () => {

        //   // Adds a track to the queue
        //   await TrackPlayer.add({
        //     id: 'trackId',
        //     url: require('./title.mp3'),
        //     title: 'Track Title',
        //     artist: 'Track Artist',

        //   });

        //   // Starts playing it
        //   TrackPlayer.play();


        // });
        
        <VideoPlayer 
          source={{ uri:"youtube.com/watch?v=rCxIvGGhb7k"}}
        />

      }


    }, 1000);


  }


  onStop = () => {
    BackgroundTimer.clearInterval(this._interval);
    TrackPlayer.stop();
  }

  render() {


    return (
      <View style={styles.container}>
        <Button raised theme={{ roundness: 3 }} mode="contained" onPress={this.onStart}>
          Start
        </Button>
        <Button raised theme={{ roundness: 3 }} mode="contained" onPress={this.onStop}>
          Stop
        </Button>
        <Title>{this.state.counter}</Title>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
