import React, { Component } from 'react'
import {Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from './CardItem';
import City from './City';
import Filters from './Filters';
import styles from '../../styles';
import Demo from '../../data/demo';

export default class SwipePeople extends Component {
    render() {
        return (
            <ImageBackground source={require("../../images/bg.png")}
			style={styles.bg}>
            <View style={styles.containerHome}>
				<View style={styles.top}>
					<City />
					<Filters />
				</View>

        <CardStack
          style={styles.content}

          renderNoMoreCards={() => (
          
          <Text style={styles.noMoreCards}>
              No more wings available in this area! Please check back again!
          </Text>)}
            loop={true}
            verticalSwipe={false}
            ref={swiper => (this.swiper = swiper)}
        >
            {Demo.map((item, index) => (
                <Card key={index}>
                    <CardItem
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        matches={item.match}
                        renderLocal={item.renderLocal}
						          renderPremium={item.renderPremium}
                        actions
                        onPressLeft={() => this.swiper.swipeLeft()}
                        onPressRight={() => this.swiper.swipeRight()}
                    />
                </Card>
            ))}
        </CardStack>


        </View>
        </ImageBackground>
        );
    }
}
