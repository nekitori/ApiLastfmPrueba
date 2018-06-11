import React from 'react';
class ImageArtist extends React.Component {
	render() {
		const mappingFunction = p =>
		<div key={p.mbid}>
		<p>{p.name}</p><img src={p.image[2]['#text']} alt="hola" />
		</div>
		return (
			<div>
				{this.props.artist.map(mappingFunction)}
			</div>
		)
	}
}
export default ImageArtist;