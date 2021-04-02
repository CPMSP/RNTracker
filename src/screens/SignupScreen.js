import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

export default function SignupScreen({ navigation }) {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText="Sign Up for Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={signup}
			/>
			<NavLink
				routeName="Signin"
				text="Already Have an Account?  Sign in Instead"
			/>
		</View>
	);
}

SignupScreen.navigationOptions = {
	headerShown: false,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 50,
	},
});
