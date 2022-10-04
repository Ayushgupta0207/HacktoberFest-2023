import {
	Avatar,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {FormHelperText} from "@material-ui/core";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {useHistory} from "react-router-dom";

const SignUp = () => {
	const paperStyle = {padding: "20px", width: "300px", margin: "0 auto"};
	const avatarStyle = {backgroundColor: "#1c8f98"};
	const captionStyle = {fontSize: "10px"};
	const headerStyle = {margin: 0, fontFamily: "Urbanist"};
	const elementStyle = {margin: "5px 0"};

	const initialValues = {
		name: "",
		username: "",
		email: "",
		gender: "",
		contactNumber: "",
		password: "",
		confirmPassword: "",
	};

	let history = useHistory();

	const onSubmit = (values, props) => {
		console.log(values);
		setTimeout(() => {
			props.resetForm();
			props.setSubmitting(false);
		}, 1000);
		console.log(props);
		history.push("/home");
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().min(3, "Too short").required("Required"),
		username: Yup.string().min(3, "Too short").required("Required"),
		email: Yup.string()
			.email("Enter a valid mail address")
			.required("Required"),
		gender: Yup.string()
			.oneOf(["male", "female", "other"], "Required")
			.required("Required"),
		contactNumber: Yup.number()
			.typeError("Enter valid phone number")
			.required("Required"),
		password: Yup.string()
			.min(6, "Minimum 6 characters required")
			.required("Required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password")], "Password doesn't match")
			.required("Required"),
	});

	return (
		<Grid>
			<Paper style={paperStyle}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<AddCircleIcon />
					</Avatar>
					<h2 style={headerStyle}> Sign up </h2>
					<Typography variant="caption" style={captionStyle}>
						Create an Account here!
					</Typography>
				</Grid>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{(props) => (
						<Form>
							<Field
								as={TextField}
								label="Name"
								name="name"
								placeholder="Enter your name"
								helperText={<ErrorMessage name="name" />}
								variant="outlined"
								fullWidth
								style={elementStyle}
								required
								// value={data.Name}
								// onChange={(value) => setData({...data, Name: value})}
							/>
							<Field
								as={TextField}
								label="Username"
								name="username"
								helperText={<ErrorMessage name="username" />}
								placeholder="Enter your username"
								variant="outlined"
								fullWidth
								style={elementStyle}
								required
							/>
							<Field
								as={TextField}
								label="Email"
								name="email"
								type="email"
								helperText={<ErrorMessage name="email" />}
								placeholder="Enter your email-id"
								variant="outlined"
								fullWidth
								style={elementStyle}
								required
							/>
							<FormControl component="fieldset" style={elementStyle} required>
								<FormLabel component="legend">Gender</FormLabel>
								<Field
									as={RadioGroup}
									aria-label="gender"
									name="gender"
									style={{display: "initial"}}
								>
									<FormControlLabel
										value="male"
										control={<Radio />}
										label="Male"
									/>
									<FormControlLabel
										value="female"
										control={<Radio />}
										label="Female"
									/>
									<FormControlLabel
										value="other"
										control={<Radio />}
										label="Other"
									/>
								</Field>
							</FormControl>
							<FormHelperText>
								<ErrorMessage name="gender" />
							</FormHelperText>
							<Field
								as={TextField}
								label="Contact No."
								name="contactNumber"
								helperText={<ErrorMessage name="contactNumber" />}
								placeholder="Enter your contact no."
								variant="outlined"
								fullWidth
								style={elementStyle}
								required
							/>
							<Field
								as={TextField}
								label="Password"
								name="password"
								type="password"
								helperText={<ErrorMessage name="password" />}
								placeholder="Enter your password"
								variant="outlined"
								fullWidth
								style={elementStyle}
								required
							/>
							<Field
								as={TextField}
								label="Confirm Password"
								name="confirmPassword"
								type="password"
								helperText={<ErrorMessage name="confirmPassword" />}
								placeholder="Re-enter your password"
								variant="outlined"
								fullWidth
								style={elementStyle}
								required
							/>
							<Button
								type="submit"
								color="primary"
								variant="contained"
								disabled={props.isSubmitting}
								fullWidth
								style={elementStyle}
							>
								{props.isSubmitting ? "Loading" : "Sign Up"}
							</Button>
						</Form>
					)}
				</Formik>
			</Paper>
		</Grid>
	);
};

export default SignUp;
