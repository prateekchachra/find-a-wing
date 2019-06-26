import React, {Component} from "react";
import styles from "../../styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Actions } from "react-native-router-flux";

class  CardItem  extends Component {
	onImagePress(){
		Actions.userProfile();
	}	
	
	render() {
		const {
			actions,
			description,
			image,
			matches,
			name,
			onPressLeft,
			onPressRight,
			status,
			variant
		} = this.props
		
	// Custom styling
	const fullWidth = Dimensions.get("window").width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 170 : 220,
			margin: variant ? 0 : 20
		}
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
			paddingBottom: variant ? 5 : 7,
			color: "#363636",
			fontSize: variant ? 15 : 30
		}
	];

	return (
		<View style={styles.containerCardItem}>
			{/* IMAGE */}

			<TouchableOpacity onPress={this.onImagePress.bind(this)}>
			<Image source={image} style={imageStyle} />
			</TouchableOpacity>
			{/* MATCHES */}
			{matches && (
				<View style={styles.matchesCardItem}>
					<Text style={styles.matchesTextCardItem}>
						<Icon name="laugh" size={16} color="#FFFFFF"/> {matches}% Match!
					</Text>
				</View>
			)}

			{/* NAME */}
			<Text style={nameStyle}>{name}</Text>

			{/* DESCRIPTION */}
			{description && (
				<Text style={styles.descriptionCardItem}>{description}</Text>
			)}

			{/* STATUS */}
			{status && (
				<View style={styles.status}>
					<View style={status === "Online" ? styles.online : styles.offline} />
					<Text style={styles.statusText}>{status}</Text>
				</View>
			)}

			{/* ACTIONS */}
		 {actions && (
				<View style={styles.actionsCardItem}>
					
					<TouchableOpacity style={styles.button} onPress={() => onPressRight()}>
						<Text style={styles.like}>
							<Icon name="thumbs-up" size={30} color="#283" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => onPressLeft()}
					>
						<Text style={styles.dislike}>
							<Icon name="thumbs-down" size={30} color="#900" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.miniButton}>
						<Text style={styles.refresh}>
							<Icon name="redo"size={27} color="#2c1dc4"  />
						</Text>
					</TouchableOpacity>
				</View>

				
		
		 )} 
		</View>
	);
}
		

}



export default CardItem;
