import React, {Component} from "react";
import styles from "../../styles";

import {
	ScrollView,
	Text,
	TouchableOpacity,
	ImageBackground,
	View,
	FlatList
} from "react-native";
import Message from "./Message";
import Icon from "react-native-vector-icons/Entypo";
import Demo from "../..//data/demo.js";
import { Actions } from "react-native-router-flux";

class Messages extends Component {


	onMessagePress(){
		Actions.chat();
		
	}

	render(){
	return (
		<ImageBackground
			source={require("../../images/bg.png")}
			style={styles.bg}
		>
			<View style={styles.containerMessages}>
				<ScrollView>
					<View style={styles.top}>
						<Text style={styles.title}>Messages</Text>
						<TouchableOpacity>
							<Text style={styles.icon}>
								<Icon name="dots-three-vertical" />
							</Text>
						</TouchableOpacity>
					</View>

					<FlatList
						data={Demo}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity onPress={this.onMessagePress.bind(this)}>
								<Message
									image={item.image}
									name={item.name}
									lastMessage={item.message}
								/>
							</TouchableOpacity>
						)}
					/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
}

}

export default Messages;
