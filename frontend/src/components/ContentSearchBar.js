import React, { useEffect, useState } from 'react'
import { TextField, Box, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function ContentSearchBar({ state, set_filtered_list }) {
	const [searched_term, set_searched_term] = useState("");

	const filter_state = () => {
		const filteredResults = state.filter(dict =>
			Object.values(dict).some(value => {
				if (typeof value == "string") {
					

					return value.toLowerCase().includes(searched_term.toLowerCase())
				}
			})
		);
		set_filtered_list(filteredResults);

	}
	useEffect(() => {
		filter_state()
	}, [searched_term])

	return (
		<div>
			<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
				<TextField
					size="small"
					value={searched_term}
					onChange={(e) => set_searched_term(e.target.value)}
					margin="dense"
					id="input-with-sx"
					label="Search"
					name="searched_term"
					placeholder='First name, Last name, Email, Phone number'
					InputProps={{
						startAdornment: <InputAdornment position="start">
							<SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
						</InputAdornment>,
					}}
					variant="outlined" />
			</Box>
			<input type='hidden' value="true" name='filter' />
		</div>
	)
}
export default ContentSearchBar
