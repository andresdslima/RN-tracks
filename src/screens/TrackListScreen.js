import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export function TrackListScreen({ navigation }) {
	return (
		<>
			<Text style={{ fontSize: 48 }}>TrackListScreen</Text>
			<Button
				title="Go to TrackDetail"
				onPress={() => navigation.navigate('TrackDetail')}
			/>
		</>
	);
}

const styles = StyleSheet.create({});
