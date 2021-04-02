import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

export default function TrackForm() {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		trackName,
	} = useContext(LocationContext);
	const [saveTrack] = useSaveTrack();

	return (
		<>
			<Input
				value={name}
				onChangeText={trackName}
				placeholder="Track Title"
			/>
			{recording ? (
				<Spacer>
					<Button
						type="outline"
						title="Stop Recording"
						onPress={stopRecording}
					/>
				</Spacer>
			) : (
				<Spacer>
					<Button title="Start Recording" onPress={startRecording} />
				</Spacer>
			)}
			{!recording && locations.length ? (
				<Spacer>
					<Button onPress={saveTrack} title="Save Track" />
				</Spacer>
			) : null}
		</>
	);
}

const styles = StyleSheet.create({});
