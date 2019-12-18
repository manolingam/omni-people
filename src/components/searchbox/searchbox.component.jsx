import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const SearchBox = () => {
	return (
		<div className='container'>
			<input type='search' placeholder='Search..'></input>
			<Fab
				color='primary'
				aria-label='add'
				size='medium'
				style={{ marginLeft: '5px', backgroundColor: '#2196f3' }}
			>
				<AddIcon />
			</Fab>
		</div>
	);
};

export default SearchBox;
