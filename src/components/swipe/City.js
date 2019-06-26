import React, {Component} from "react";
import styles from "../../styles";

import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { Actions } from "react-native-router-flux";

class City extends Component {
	
	onLocPress(){
		Actions.location();

	}
	render(){
	return (
		<TouchableOpacity style={styles.city} onPress={this.onLocPress.bind(this)}>
			<Text style={styles.cityText}>
				<Icon name="location-pin" />San Francisco
			</Text>
		</TouchableOpacity>
	);
}
}
export default City;
