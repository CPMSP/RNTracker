import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

export default function TrackDetailScreen({ navigation }) {
	const { state } = useContext(TrackContext);
	const _id = navigation.getParam("_id");

	const track = state.find(t => t._id === _id);
	const initialCoords = track.locations[0].coords;

	return (
		<View>
			<Text style={styles.trackTitle}>{track.name}</Text>
			<MapView
				initialRegion={{
					longitudeDelta: 0.01,
					latitudeDelta: 0.01,
					...initialCoords,
				}}
				style={styles.map}>
				<Polyline
					coordinates={track.locations.map(loc => loc.coords)}
				/>
			</MapView>
		</View>
	);
}

TrackDetailScreen.navigationOptions = {
	title: "Track Details",
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
	trackTitle: {
		fontSize: 20,
		alignSelf: "center",
		margin: 15,
	},
});
