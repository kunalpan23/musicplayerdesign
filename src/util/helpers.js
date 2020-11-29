import React from 'react';

const CurrentDisplayImage = ({ currentSong }) => {
	return (
		<div className='fx fx-jc fx-1 fx-ac currentSongImageContainer'>
			<div className='currentSongImage'>
				<div className='currentSongImage__inner'>
					<div className='circular__inner'>
						<img src={currentSong.cover} alt='Cover' />
					</div>
				</div>
			</div>
		</div>
	);
};

const ButtonAction = ({ className, onClick, iconClassName }) => {
	return (
		<button className={className} onClick={onClick}>
			<div className='backBtn__inner circular__inner fx fx-jc fx-ac'>
				<i className={`fa fa-${iconClassName}`}></i>
			</div>
		</button>
	);
};

const ButtonActionPlayPause = ({ className, onClick }) => {
	return (
		<button className={className} onClick={onClick}>
			<div className='circular__inner fx fx-jc fx-ac'>
				<i className='fa fa-play play'></i>
				<i className='fa fa-pause pause'></i>
			</div>
		</button>
	);
};

const Control = (props) => {

	const {startTime, endTime, onChangedRange, onClickPrev, onClickNext, onClickPlayPause } = props;
	return (
		<div className="player__wrap--controls controls">
			<div className="controls__ranger">
				<div className="fx fx-ac">
					<span className="controls__ranger--timer currentTime">
						{ 
							/* Current Timer */ "0.93"
						}
					</span>
					<span className="fx fx-1"></span>
					<span className="controls__ranger--timer endTime">
						{ 
							/* End Timer */"2.93"
						}
					</span>
				</div>
				<div>
				
				</div>
			</div>
		</div>
	)
};

export { CurrentDisplayImage, ButtonAction, ButtonActionPlayPause, Control };
