import React, { Component } from 'react';
import { List, Playing } from './component/index';
import Loading from './util/Loading';
import 'font-awesome/css/font-awesome.min.css';
import track from './tracks/tracks.json';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			track: track,
			currentPlayingSong: track[0],
			loading: true,
			showPlayingNow: false,
			audio: new Audio()
		};

		this.currentPlayingSong = this.currentPlayingSong.bind(this);
		this.togglePlayingMode = this.togglePlayingMode.bind(this);
		this.playPauseCurrentPlayingSong = this.playPauseCurrentPlayingSong.bind(
			this
		);

		this.addToFavorite = this.addToFavorite.bind(this);
	}

	componentWillMount() {
		const audio = this.state.audio;

		audio.src = this.state.currentPlayingSong.source;

		this.setState({
			loading: true,
			audio: audio
		});
	}

	componentDidMount() {
		const audio = this.state.audio;
		audio.addEventListener('loadeddata', () => {
			if (audio.readyState >= 2) {
				// audio.play();
				this.setState({
					loading: false
				});
			}
		});
	}

	playPauseCurrentPlayingSong() {
		const audio = this.state.audio;
		if (audio.paused) {
			audio.play();
			return 'play';
		}

		audio.pause();
		return 'pause';
	}

	currentPlayingSong(currSong) {
		const audioFile = this.state.audio;
		audioFile.src = currSong.source;

		this.setState({ loading: true });

		audioFile.addEventListener('loadeddata', () => {
			if (audioFile.readyState >= 2) {
				this.setState({
					currentPlayingSong: currSong,
					loading: false,
					audio: audioFile
				});
				audioFile.play();
			}
		});
	}

	togglePlayingMode() {
		this.setState({
			showPlayingNow: !this.state.showPlayingNow
		});
	}

	addToFavorite({ name }) {
		const track = this.state.track;
		const index = track.findIndex((o) => o.name === name);
		track[index].favorite = !track[index].favorite;

		this.setState({ track: track });
	}

	render() {
		return (
			<div className='wrap fx fx-jc fx-ac'>
				<div className='wrap__inner player'>
					<List
						track={this.state.track}
						currentSong={this.state.currentPlayingSong}
						currentPlayingSong={this.currentPlayingSong}
						togglePlayingMode={this.togglePlayingMode}
						playPauseCurrentSong={this.playPauseCurrentPlayingSong}
						addToFavorite={this.addToFavorite}
					/>
					<Playing
						showPlayingNow={this.state.showPlayingNow}
						togglePlayingMode={this.togglePlayingMode}
						currentSong={this.state.currentPlayingSong}
						track={this.state.track}
					/>
					<Loading loading={this.state.loading} />
				</div>
			</div>
		);
	}
}
