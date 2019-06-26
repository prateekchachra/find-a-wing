import React, {Component} from "react";
import styles from "../../styles";

import {
	ScrollView,
	View,
	Text,
	ImageBackground,
	TouchableOpacity
} from "react-native";
import ProfileItem from "./ProfileItem";
import Icon from '../common/Icon';
import Demo from "../../data/demo.js";
import { Actions } from "react-native-router-flux";

class  Profile extends Component {
	onChatButtonPress(){

		Actions.chat();
	}


	render(){
	const {
		age,
		image,
		info1,
		info2,
		info3,
		info4,
		location,
		match,
		name
	} = Demo[7];

	return (
		<ImageBackground
			source={require("../../images/bg.png")}
			style={styles.bg}
		>
			<ScrollView style={styles.containerProfile}>
				<ImageBackground source={image} style={styles.photo}>
					<View style={styles.top}>
						<TouchableOpacity>
							<Text style={styles.topIconLeft}>
								<Icon name="chevronLeft" />
							</Text>
						</TouchableOpacity>

						<TouchableOpacity>
							<Text style={styles.topIconRight}>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>

				<ProfileItem
					matches={match}
					name={name}
					age={age}
					location={location}
					info1={info1}
					info2={info2}
					info3={info3}
					info4={info4}
				/>

				<View style={styles.actionsProfile}>
					<TouchableOpacity style={styles.circledButton}>
						<Text style={styles.iconButton}>
							<Icon name="optionsH" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.roundedButton}
					 onPress={this.onChatButtonPress.bind(this)}>
						<Text style={styles.iconButton}>
							<Icon name="chat" />
						</Text>
						<Text style={styles.textButton}>Start chatting</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
	}
}

export default Profile;
