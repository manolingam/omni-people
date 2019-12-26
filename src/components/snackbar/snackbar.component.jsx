import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class SimpleSnackbar extends React.Component {
	constructor() {
		super();
		this.state = {
			open: true
		};
	}

	handleClose = reason => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ open: false });
	};

	render() {
		console.log(this.state.open);
		return (
			<div>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={this.state.open}
					autoHideDuration={1000}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					message={<span id='message-id'>Note archived</span>}
					action={[
						<Button
							key='undo'
							color='secondary'
							size='small'
							onClick={this.handleClose}
						>
							UNDO
						</Button>,
						<IconButton
							key='close'
							aria-label='close'
							color='inherit'
							onClick={this.handleClose}
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</div>
		);
	}
}

export default SimpleSnackbar;
