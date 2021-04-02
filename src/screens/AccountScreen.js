import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

export default function AccountScreen() {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset={{ top: "always" }}>
			<Text style={styles.header}>Account Options</Text>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</SafeAreaView>
	);
}

AccountScreen.navigationOptions = {
	title: "Account",
	tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const styles = StyleSheet.create({
	header: {
		fontSize: 20,
		alignSelf: "center",
		margin: 15,
	},
});
