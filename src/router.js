import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import ChatWindow from './components/chat/ChatWindow';
import SwipePeople from './components/swipe/SwipePeople';
import Profile from './components/profile/Profile';
import PeopleAroundMe from './components/people/PeopleAroundMe';
import Messages from './components/messages/Messages';
import styles from './styles';
import SetLocation from './components/common/SetLocation';
const RouterComponent = () => {

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
            rightButtonTextStyle={styles.navRight}
            leftButtonTextStyle={styles.navLeft}
            titleStyle={styles.navTitle}
            
                leftTitle="My Messages"
                onLeft={() => {
                    Actions.userMessages();
                }}
                 rightTitle="Around You"
                 onRight={() => {
                    Actions.aroundMe();
                 }}
            component={SwipePeople} title="Find A Wing" ></Scene>           
            <Scene key="aroundMe"
             rightButtonTextStyle={styles.navRight}
             leftButtonTextStyle={styles.navLeft}
             titleStyle={styles.navAroundMe}
                rightTitle="Find A Wing"
                onRight={() => {
                   Actions.swipeScreen();
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

};


export default RouterComponent;