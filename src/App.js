import React from 'react';

import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			checked: localStorage.getItem('theme') === 'dark' ? true : false,
			theme: localStorage.getItem('theme')
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

	render() {
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
					<p>Omni Users</p>
					<PeopleAltRoundedIcon className='people' />
				</div>
				<hr></hr>
				<div className='container'>
					<input type='search' placeholder='Search..'></input>
				</div>
			</div>
		);
	}
}

export default App;
