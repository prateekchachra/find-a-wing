import React from "react";

import styles from "../../styles";


import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Filters = () => {
	return (
		<TouchableOpacity style={styles.filters}>
			<Text style={styles.filtersText}>
				<Icon name="filter" size={10}/> Filters
			</Text>
		</TouchableOpacity>
	);
};

export default Filters;
