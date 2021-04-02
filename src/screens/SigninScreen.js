import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

export default function SigninScreen({ navigation }) {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText="Sign In to Your Tracker Account"
				errorMessage={state.errorMessage}
				submitButtonText="Sign In"
				onSubmit={signin}
			/>
			<NavLink
				routeName="Signup"
				text="Don't have an account?  Sign Up Instead"
			/>
		</View>
	);
}

SigninScreen.navigationOptions = {
	headerShown: false,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 50,
	},
});
