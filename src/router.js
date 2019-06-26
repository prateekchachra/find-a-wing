import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import ChatWindow from './components/chat/ChatWindow';
import SwipePeople from './components/swipe/SwipePeople';
import Profile from './components/profile/Profile';
import PeopleAroundMe from './components/people/PeopleAroundMe';
import Messages from './components/messages/Messages';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import SetLocation from './components/common/SetLocation';
class RouterComponent extends Component{

    state= {
        optionsTab: ''
    }
    render(){
    return(
        <Router>
            <Scene key="root" hideNavBar>
           {/*     <Scene key="auth">
            <Scene key="login" component = {LoginForm} title="Please Login" initial>
            </Scene>
            <Scene key="register" component = {Register} title="Register your profile"></Scene>
    </Scene> */}
            <Scene key="main">
            <Scene key="swipeScreen" initial
            leftButtonTextStyle={styles.navLeft}
            titleStyle={styles.navTitle}
                leftTitle="My Messages"
                onLeft={() => {
                    Actions.userMessages();
                }}
               renderRightButton={() => (<TouchableOpacity>
                   <Icon name="dots-three-vertical" size={20}/>
                   </TouchableOpacity>
               )}
            component={SwipePeople} title="Find A Wing" ></Scene>           
            <Scene key="aroundMe"
             titleStyle={styles.navAroundMe}
             rightButtonImage={this.state.optionsTab}
             onRight={() => {
                Actions.aroundMe();
             }}
            component={PeopleAroundMe} title="People Around You"></Scene>

            <Scene key="chat" 
             titleStyle={styles.navAroundMe}
            component={ChatWindow} title="Chat with your match!"></Scene>
            <Scene key="userProfile" 
             titleStyle={styles.navAroundMe}
            component={Profile} title="View Profile"></Scene>

            <Scene key="userMessages" 
             titleStyle={styles.navAroundMe}     
            component={Messages} title="My Messages"></Scene>
            <Scene key="location" 
             titleStyle={styles.navAroundMe}     
            component={SetLocation} title="Select Location"></Scene>


             </Scene>
            </Scene>
        </Router>

    );
                }
}


export default RouterComponent;