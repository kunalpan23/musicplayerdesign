import React, { Component } from 'react';
import {
	CurrentDisplayImage,
	ButtonAction,
	ButtonActionPlayPause
} from '../util/helpers';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.currentPlayingSong = props.currentPlayingSong;
		this.playPauseCurrentSong = props.playPauseCurrentSong;
		this.setCurrentSong = this.setCurrentSong.bind(this);
		this._playPauseCurrentSong = this._playPauseCurrentSong.bind(this);
	}

	setCurrentSong(e, o) {
		this.currentPlayingSong(e);
	}

	_playPauseCurrentSong(e, o) {
		const className = this.playPauseCurrentSong();
		switch (className) {
			case 'play':
				o.currentTarget.classList.remove('play');
				o.currentTarget.classList.add('pause');
				break;
			case 'pause':
				o.currentTarget.classList.remove('pause');
				o.currentTarget.classList.add('play');
				break;

			default:
				break;
		}
	}

	SongList() {
		return (
			<ul className='player__list--list-items listItems'>
				{this.props.track.map((e, i) => {
					return (
						<li
							key={i}
							className={`listItems__item fx fx-ac ${e.name ===
								this.props.currentSong.name && 'active'}`}>
							<div
								className='fakeClick'
								onClick={(o) => this.setCurrentSong(e, o)}></div>
							<div
								className='listItems__item--details fx-1'
								onClick={(o) => this.setCurrentSong(e, o)}>
								<h1 className='listItems__item--details-heading'>{e.name}</h1>
								<p className='listItems__item--details-artist'>{e.artist}</p>
							</div>
							<ButtonActionPlayPause
								className={`listItems__item--details-playBtn ${e.name ===
									this.props.currentSong.name && 'pause'}`}
								onClick={(o) => this._playPauseCurrentSong(e, o)}
							/>
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		return (
			<>
				<div className='player__list fx fx-dc'>
					<div className='credits'>
						<div className='credits__text'>
							<p className='credits__text--inner'>credit:</p>
							<a href='https://codepen.io/JavaScriptJunkie/pens/public'>
								Muhammed Erdem
							</a>
							{' & '}
							<a href='https://dribbble.com/kedavra'>Filip Legierski</a>
						</div>
					</div>
					<div className='player__list--header fx fx-ac'>
						<ButtonAction
							className={`player__list--header-favBtn favBtn fx fx-jc fx-ac ${this
								.props.currentSong.favorite && 'favorite'}`}
							onClick={(o) => this.props.addToFavorite(this.props.currentSong)}
							iconClassName='heart'
						/>

						<CurrentDisplayImage currentSong={this.props.currentSong} />

						<ButtonAction
							className='player__list--header-option option fx fx-jc fx-ac'
							onClick={this.props.togglePlayingMode}
							iconClassName='ellipsis-h'
						/>
					</div>

					<div className='player__list--list fx-1'>{this.SongList()}</div>
				</div>
			</>
		);
	}
}
