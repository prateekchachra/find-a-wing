import React, {Component} from "react";
import styles from "../../styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
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
			height: variant ? 170 : 350,
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
						<Icon name="heart" size={30} color="#900"/> {matches}% Match!
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
					<TouchableOpacity style={styles.miniButton}>
						<Text style={styles.star}>
							<Icon name="star" size={30} color="#900" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
						<Text style={styles.like}>
							<Icon name="like" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => onPressRight()}
					>
						<Text style={styles.dislike}>
							<Icon name="dislike" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.miniButton}>
						<Text style={styles.flash}>
							<Icon name="flash" />
						</Text>
					</TouchableOpacity>
				</View>

				
		
			)}
				{/*	<View style={styles.footer}>
				<View style={styles.buttonContainer}>
				<TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
					this.swiper.swipeLeft();
				}}>
					<Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
					this.swiper.goBackFromLeft();
				}}>
					<Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
					this.swiper.swipeRight();
				}}>
					<Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
				</TouchableOpacity>
				</View>

			</View> */}
		</View>
	);
}
		

}



export default CardItem;
