import React, { Component } from 'react';
import { CurrentDisplayImage, ButtonAction, Control } from '../util/helpers';

export default class Playing extends Component {
	playingNowHeading(togglePlayingMode) {
		return (
			<div className='player__wrap--top fx fx-ac'>
				<ButtonAction
					className='player__wrap--top-backBtn backBtn fx fx-jc fx-ac'
					onClick={togglePlayingMode}
					iconClassName='arrow-left'
				/>
				<div className='player__wrap--top-heading fx fx-jc fx-ac fx-1'>
					<p>NOW PLAYING</p>
				</div>
				<ButtonAction
					className='player__wrap--top-options backBtn fx fx-jc fx-ac'
					iconClassName='bars'
				/>
			</div>
		);
	}

	render() {
		const { showPlayingNow, togglePlayingMode, currentSong } = this.props;
		return (
			<div
				className={`player__wrap fx fx-dc ${showPlayingNow ? 'active' : ''}`}>
				{this.playingNowHeading(togglePlayingMode)}

				<CurrentDisplayImage currentSong={currentSong} />

				<div className='player__wrap--detail fx fx-ac fx-jc fx-dc'>
					<h1 className='player__wrap--detail-title'>{currentSong.name}</h1>
					<p className='player__wrap--detail-artist'>{currentSong.artist}</p>
				</div>

				<Control  /> 
			</div>
		);
	}
}
