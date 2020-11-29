import React from 'react';

export default function Loading(props) {
	const { loading } = props;

	return (
		<div className={`player__loading ${loading && 'active'}`}>
			<div className='fx player__loading--inner fx-ac fx-jc'>...Loading</div>
		</div>
	);
}
