import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import Microlink from '@microlink/react';

import './searchbox.style.css';

let users = [];

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
				`http://infinite-garden-52200.herokuapp.com/users/${e.target.value}`
			)
				.then(res => res.json())
				.then(data => {
					// eslint-disable-next-line array-callback-return
					data.map(i => {
						temp.push({
							id: i['id'],
							name: i['name'],
							screen_name: i['screen_name'],
							url: i['url']
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
										this.setState({ people: people });
									}}
								>
									<AddIcon />
								</Fab>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
