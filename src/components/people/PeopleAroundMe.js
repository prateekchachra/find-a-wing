import React from "react";
import styles from "../../styles";

import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	FlatList
} from "react-native";
import CardItem from "../swipe/CardItem";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Demo from "../../data/demo.js";

const Matches = () => {
	return (
		<ImageBackground
			source={require("../../images/bg.png")}
			style={styles.bg}
		>
			<View style={styles.containerMatches}>
				<ScrollView>
					<View style={styles.top}>
						<Text style={styles.title}>Matches</Text>
						<TouchableOpacity>
							<Text style={styles.icon}>
								<Icon name="options-vertical" />
							</Text>
						</TouchableOpacity>
					</View>

					<FlatList
						numColumns={2}
						data={Demo}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity style={{margin: 10}}>
								<CardItem
									image={item.image}
									name={item.name}
									status={item.status}
									variant
								/>
							</TouchableOpacity>
						)}
					/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default Matches;
