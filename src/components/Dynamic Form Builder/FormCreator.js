import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, Checkbox, FormControl, Menu, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import CustomModal from '../CustomModal';

const FormCreator = ({ fields, set_fields, add_or_edit_new_field, set_add_or_edit_new_field, field_name, is_field_required, field_data_type, set_field_name, set_is_field_required, set_field_data_type }) => {

	const [alert, set_alert] = useState(false);
	const [loading, set_loading] = useState(false);

	const [radio_options, set_radio_options] = useState([]);
	const [number_of_radio_options, set_number_of_radio_options] = useState(1);

	const field_data_types = ["Text", "Number", "Phone Number", "Toggle", "Radio Button"];


	const add_field = () => {
		let new_field = {};
		new_field["name"] = field_name;
		new_field["inputType"] = field_data_type;
		new_field["required"] = is_field_required;

		if (field_data_type == "Radio Button") {
			new_field["value"] = radio_options;
			new_field["answer"] = "None";
		} else {
			if (field_data_type == "Toggle")
				new_field["value"] = false;
			else
				new_field["value"] = "";

		}

		if (typeof add_or_edit_new_field === "boolean") {
			const all_fields = [...fields];
			all_fields.push(new_field);
			set_fields(all_fields);

			set_field_name("");
			set_field_data_type("Text");
			set_is_field_required(false);

		} else {
			const all_fields = [...fields];
			all_fields[add_or_edit_new_field] = new_field;
			set_fields(all_fields);
		}
		set_add_or_edit_new_field(false);
	};




	useEffect(() => {
		let all_radio_options = JSON.parse(JSON.stringify(radio_options));

		for (
			var i = 0;
			i < Math.abs(parseInt(number_of_radio_options) - radio_options.length);
			i++
		) {
			if (all_radio_options.length <= parseInt(number_of_radio_options)) {
				all_radio_options.push("Add an option");
			} else {
				all_radio_options.pop(all_radio_options.length, 1);
			}
		}

		set_radio_options(all_radio_options);
	}, [number_of_radio_options]);

	useEffect(() => {
		if (typeof add_or_edit_new_field != "boolean") {
			if (field_data_type == "Radio Button") {
				set_number_of_radio_options(
					fields[add_or_edit_new_field]["value"].length
				);
				set_radio_options(fields[add_or_edit_new_field]["value"]);
			}
		}
	}, [add_or_edit_new_field]);


	return (
		<Box>
			<style
				dangerouslySetInnerHTML={{
					__html: "\n  #basic-menu{\n    z-index:9931000 !important;\n  }\n  "
				}}
			/>

			{add_or_edit_new_field || add_or_edit_new_field === 0 ?
				<CustomModal set_preview={set_add_or_edit_new_field}>
					<Box
						sx={{
							width: { xl: "35%", lg: "50%", md: "60%", sm: "80%", xs: "90%" },
							h: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							bgcolor: "white",
							cursor: "auto",
							borderRadius: 3,
							boxShadow: 24,
							p: { xl: 4, lg: 4, md: 4, sm: 4, xs: 2 },
						}}
					>
						{alert ? (
							<Alert
								onClose={() => {
									set_alert(false);
								}}
								severity={alert.toLowerCase().includes("[error]") ? "error" : "success"}
								sx={{
									p: 2,
									width: '80%',
									zIndex: 9992000,

								}}
							>
								{alert}
							</Alert>
						) : (
							""
						)}

						<style
							dangerouslySetInnerHTML={{
								__html: "\n#menu-{\nz-index:9992000}\n",
							}}
						/>
						<Typography variant="h2" my={2}>
							{typeof add_or_edit_new_field == "boolean"
								? "Add a new field"
								: "Update the field"}
						</Typography>

						<Box sx={{ mb: 3, width: 1 }}>
							{/* Data Type Field  */}
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Box sx={{ flex: 1 }}>
									<Typography variant="subtitle2" align="left">
										Data Type
									</Typography>
								</Box>
								<Box
									sx={{
										flex: 1,
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: "center",
										flexWrap: "wrap",
										mb: 2
									}}
								>
									<FormControl fullWidth>
										<Select
											size="small"
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											align="left"
											renderValue={(selected) => {
												return <strong>{selected}</strong>;
											}}
											value={field_data_type}
											onChange={(e) => {
												set_field_data_type(e.target.value);
											}}
										>
											{field_data_types.map((field_data_type) => (
												<MenuItem value={field_data_type}>{field_data_type}</MenuItem>
											))}
										</Select>
									</FormControl>
								</Box>
							</Box>

							{/* Name Field  */}
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: 2
								}}
							>
								<Box sx={{ flex: 1 }}>
									<Typography variant="subtitle2" align="left">
										{field_data_type == "Toggle" ? "Yes/No Question" : field_data_type == "Radio Button" ? "Question" : "Name"}
									</Typography>
								</Box>
								<Box
									sx={{
										flex: 1,
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: "center",
										flexWrap: "wrap",
									}}
								>

									<TextField value={field_name} size="small" onChange={(e) => { set_field_name(e.target.value) }} fullWidth id="outlined-basic"
										label={field_data_type == "Toggle" ? "" : field_data_type == "Radio Button" ? "E.g Agree with terms and service? " : "Name of this field i.e Age"} variant="outlined" />
								</Box>
							</Box>

							{/* Required Field  */}
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: 2
								}}
							>
								<Box sx={{ flex: 1 }}>
									<Typography variant="subtitle2" align="left">
										Is Required?
									</Typography>
								</Box>
								<Box
									sx={{
										flex: 1,
										display: "flex",
										textAlign: "center",
										justifyContent: "left",
										alignItems: "left",
									}}
								>
									<Checkbox
										checked={is_field_required}
										onChange={(e) => { set_is_field_required(e.target.checked) }}
										inputProps={{ 'aria-label': 'controlled' }}
										size="medium"
									/>
								</Box>
							</Box>

							{/* If data type if radio Field  */}


							{field_data_type == "Radio Button" ? (
								<Box sx={{ width: 1, textAlign: "left" }}>
									<Typography
										mt={2}
										component="label"
										for={"name"}
										variant="subtitle2"
									>
										Select no of options:
									</Typography>
									<TextField
										fullWidth
										sx={{ bgcolor: "#e8e8e8" }}
										variant="outlined"
										type="number"
										inputProps={{ className: "number-input" }}
										onWheel={(e) => {
											e.target.blur()
										}}
										value={number_of_radio_options}

										onChange={(e) => {
											let value = e.target.value;
											if (value > 1) {
												set_number_of_radio_options(value)
											} else {
												set_number_of_radio_options(1);
											}
										}
										}
									/>
									<Typography mt={4} variant="subtitle2">
										Options
									</Typography>
									{radio_options.map((option, index) => {
										return (
											<Box mt={2}>
												<TextField
													fullWidth
													sx={{ bgcolor: "#e8e8e8" }}
													variant="outlined"
													placeholder={
														radio_options[index] == "Add an option"
															? radio_options[index]
															: ""
													}
													value={
														radio_options[index] == "Add an option"
															? ""
															: radio_options[index]
													}
													onChange={(e) => {
														let updated_option = JSON.parse(
															JSON.stringify(radio_options)
														);
														updated_option[index] = e.target.value;
														set_radio_options(updated_option);
													}}
												/>
											</Box>
										);
									})}
								</Box>
							) : (
								""
							)}
						</Box>
						<Box sx={{ width: 1 }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-around",
									alignItems: "center",
									p: 2,
								}}
							>


								<Button
									variant="outlined"
									fullWidth
									sx={{ minHeight: '43px', }}
									onClick={() => {
										set_add_or_edit_new_field(false);
										set_field_name("");
										set_field_data_type("Text");
										set_is_field_required(false);
										set_alert(false)
									}}
								>
									Cancel
								</Button>
								<Button
									variant="contained"
									fullWidth
									sx={{ minHeight: '43px', }}
									onClick={() => {
										add_field();
									}}
								>
									{typeof add_or_edit_new_field === "boolean"
										? "Add"
										: "Update"}
								</Button>
							</Box>

							{alert ? (
								<Alert
									onClose={() => {
										set_alert(false);
									}}
									severity={alert.toLowerCase().includes("[error]") ? "error" : "success"}
									sx={{
										p: 2, width: '80%',
										zIndex: 9923213,
									}}
								>
									{alert}
								</Alert>
							) : (
								""
							)}
						</Box>
					</Box>
				</CustomModal>
				: ""}

		</Box>


	)
}


export default FormCreator;
