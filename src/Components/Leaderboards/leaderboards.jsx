import React, { Component } from 'react';
import Track from '../track';
import PopularSongs from './popular_songs';
import RepeatedSongs from './repeated_songs';
import * as Actions from '../../Actions/api_actions'

class Leaderboards extends Component {
    state = { popularSong: {}, repeatedSong: {}, page: null, user: null }

    componentDidMount() {
        Actions.ApiPromise(Actions.MostPopularSong)
            .then(obj => {
                this.setState({
                    popularSong: obj[0]
                });
            });
        
        Actions.ApiPromise(Actions.MostRepeatedTracks)
            .then(obj => 
                this.setState({
                    repeatedSong: obj[0]
                }));
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