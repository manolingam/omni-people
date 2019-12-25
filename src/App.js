/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import {
	SideList,
	SearchBox
} from './components/searchbox/searchbox.component';

import PeopleIcon from '@material-ui/icons/People';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

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
				style={{ width: 300 }}
				role='presentation'
				onClick={this.toggleDrawer(false)}
				onKeyDown={this.toggleDrawer(false)}
			>
				<SideList />
				<Divider />
			</div>
		);
	};

	render() {
		var iconColor = this.state.checked ? 'white' : 'black';

		return (
			<div className='main'>
				<div className='nav'>
					<label className='switch'>
						<input
							type='checkbox'
							//checked={this.state.checked}
							defaultChecked={this.state.checked}
							onChange={this.toggleThemeChange}
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

				<SearchBox />
			</div>
		);
	}
}

export default App;
