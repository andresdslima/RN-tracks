import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Spacer } from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

export function SignupScreen({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { state, signup } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3>Sign Up for Tracker</Text>
			</Spacer>
			<Input
				label="Email"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer />
			<Input
				label="Password"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
				secureTextEntry
			/>
			{state.errorMessage && (
				<Text style={styles.error}>{state.errorMessage}</Text>
			)}
			<Spacer>
				<Button
					title="Sign Up"
					onPress={() => {
						signup({ email, password });
						// navigation.navigate('trackList');
					}}
				/>
			</Spacer>
		</View>
	);
}

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 100,
	},
	error: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
		marginTop: 10,
		justifyContent: 'center',
	},
});
