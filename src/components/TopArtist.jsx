import React from 'react';
import ImageArtist from './ImageArtist'
class TopArtists extends React.Component {
	state = {
		artist:[]
	}
	componentDidMount() {
		fetch('http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=test&api_key=12d91a15ff05bdc70cdf55f838926f80&limit=10&format=json')
			.then(result => result.json())
			.then(data => {
				let artistArray = []
				for (let index = 0; index < data.topartists.artist.length; index++) {
					artistArray.push(data.topartists.artist[index])
				}
				this.setState({ artist: artistArray })
			})
	}
	render() {
		const mappingFunction = p =><div key={p.mbid}>{p.name}<br/></div>
		return(
			<div>
				{this.state.artist.map(mappingFunction)}
				<ImageArtist artist={this.state.artist}/>
			</div>
		)
	}
}
export default TopArtists;