/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import Microlink from '@microlink/react';

import './searchbox.style.css';
// import SimpleSnackbar from '../snackbar/snackbar.component';

let users = [];
// let snackbar = false;

export const SideList = () => {
	return (
		<List>
			{users.map((text, index) => (
				<ListItem button key={text}>
					<Microlink
						url={`https://twitter.com/${text}`}
						size='small'
					/>
				</ListItem>
			))}
		</List>
	);
};

export class SearchBox extends React.Component {
	constructor() {
		super();
		this.state = {
			people: []
		};
	}

	onChangeHandler = e => {
		let temp = [];
		if (e.target.value) {
			fetch(
				`https://infinite-garden-52200.herokuapp.com/users/${e.target.value}`
			)
				.then(res => res.json())
				.then(data => {
					// eslint-disable-next-line array-callback-return
					data.map(i => {
						temp.push({
							id: i['id'],
							name: i['name'],
							screen_name: i['screen_name'],
							url: i['url'],
							profile_pic: i['profile_image_url_https']
						});
					});

					this.setState({ people: temp });
				});
		} else {
			temp = [];
			this.setState({ people: temp });
		}
	};

	render() {
		let people = this.state.people;
		return (
			<div className='search-component'>
				<p className='title'>
					<span>&#10024;</span> Omni People <span>&#10024;</span>
					<br />
					<span style={{ marginTop: '7px', fontSize: '0.8em' }}>
						Companion for{' '}
						<a href='https://www.omni.fyi/'>
							<i>Omni Wallet</i>
						</a>
					</span>
				</p>
				<input
					type='search'
					placeholder='twitter handle..'
					onChange={this.onChangeHandler}
				></input>

				<div className='box'>
					{people.map(person => {
						return (
							<div
								key={person['id']}
								style={{
									display: 'flex',
									flexDirection: 'row'
								}}
							>
								<img
									style={{
										borderRadius: '50px',
										padding: '5px'
									}}
									src={person['profile_pic']}
									alt=''
								/>
								<p>{person['name']}</p>
								<Fab
									color='primary'
									aria-label='add'
									size='small'
									id='fab'
									onClick={() => {
										users.push(person['screen_name']);
										var index = people.indexOf(person);
										people.splice(index, 1);
										this.setState({
											people: people
										});
										// snackbar = true;
									}}
								>
									<AddIcon />
								</Fab>
							</div>
						);
					})}
					{/* {snackbar ? <SimpleSnackbar /> : null} */}
				</div>
			</div>
		);
	}
}
