import React from 'react';

import SearchBox from './components/searchbox/searchbox.component';
import PeopleIcon from '@material-ui/icons/People';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			checked: localStorage.getItem('theme') === 'dark' ? true : false,
			theme: localStorage.getItem('theme'),
			right: false
		};
	}

	componentDidMount() {
		document
			.getElementsByTagName('HTML')[0]
			.setAttribute('data-theme', localStorage.getItem('theme'));
	}

	toggleThemeChange = () => {
		const { checked } = this.state;
		if (checked === false) {
			localStorage.setItem('theme', 'dark');

			document
				.getElementsByTagName('HTML')[0]
				.setAttribute('data-theme', localStorage.getItem('theme'));

			this.setState({
				checked: true
			});
		} else {
			localStorage.setItem('theme', 'light');

			document
				.getElementsByTagName('HTML')[0]
				.setAttribute('data-theme', localStorage.getItem('theme'));

			this.setState({
				checked: false
			});
		}
	};

	toggleDrawer = open => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		this.setState({ right: open });
	};

	sideList = () => {
		return (
			<div
				className='side-drawer'
				style={{ width: 250 }}
				role='presentation'
				onClick={this.toggleDrawer(false)}
				onKeyDown={this.toggleDrawer(false)}
			>
				<List>
					{[
						'Omni User 1',
						'Omni User 2',
						'Omni User 3',
						'Omni User 4'
					].map((text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
			</div>
		);
	};

	render() {
		var iconColor = this.state.checked ? 'white' : 'black';

		return (
			<div className='app'>
				<div className='nav'>
					<label className='switch'>
						<input
							type='checkbox'
							//checked={this.state.checked}
							defaultChecked={this.state.checked}
							onChange={() => this.toggleThemeChange()}
						/>
						<span className='slider round' />
					</label>

					<PeopleIcon
						className='people-icon'
						onClick={this.toggleDrawer(true)}
						style={{ color: iconColor }}
					/>

					{this.toggleDrawer(true)}
					<Drawer
						className='drawer'
						anchor='right'
						open={this.state.right}
						onClose={this.toggleDrawer(false)}
					>
						{this.sideList()}
					</Drawer>
				</div>
				<hr></hr>
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
				<SearchBox />
			</div>
		);
	}
}

export default App;
