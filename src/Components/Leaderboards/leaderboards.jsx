import React, { Component } from 'react';
import Track from '../track';
import PopularSongs from './popular_songs';
import RepeatedSongs from './repeated_songs';

//https://shipitback20190620080140.azurewebsites.net/api/mostpopularsong
class Leaderboards extends Component {
    state = { popularSong: {}, repeatedSong: {}, page: null }

    componentDidMount() {
        fetch("https://shipitback20190620080140.azurewebsites.net/api/mostpopularsong")
            .then(res => res.json())
            .then(obj => {
                this.setState(function () {
                return {
                    popularSong: obj[0]
                };
                });
                this.forceUpdate();
            }, 'aluhadora');




        fetch("https://shipitback20190620080140.azurewebsites.net/api/values")
            .then(res => res.json())
            .then(obj => {
                this.setState(function () {
                return {
                    repeatedSong: obj[0]
                };
                });
                this.forceUpdate();
            }, 'aluhadora');
    }

    pageToPopular()
    {
        this.setState({
            page: <PopularSongs />
        })
    }

    pageToRepeated()
    {
        this.setState({
            page: <RepeatedSongs />
        })
    }


    render() { 
        const { popularSong, page, repeatedSong } = this.state;

        return ( page || 
            <div style={{marginTop: 50}}>
                <b>Leaderboards</b>

                <div style={{marginLeft: 300, marginTop: 10}}>
                    <Track track={{name: popularSong.songName, 
                        img: popularSong.image, 
                        info: "Has been played " + popularSong.songCount + " times",
                        link: {text: "More popular songs...", onClick: this.pageToPopular.bind(this)}}}/>

                    <Track track={{name: repeatedSong.songName, 
                        img: repeatedSong.image, 
                        info: "Has been played " + repeatedSong.songCount + " times by " + repeatedSong.name + " alone",
                        link: {text: "More repeated songs...", onClick: this.pageToRepeated.bind(this)}}}/>
                </div>
                

        </div> );
    }
}
 
export default Leaderboards;