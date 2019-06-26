import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import ChatWindow from './components/chat/ChatWindow';
import SwipePeople from './components/swipe/SwipePeople';
import Profile from './components/profile/Profile';
import PeopleAroundMe from './components/people/PeopleAroundMe';
import Messages from './components/messages/Messages';
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
                rightTitle="Find A Wing"
                onRight={() => {
                   Actions.swipeScreen();
                }}
            component={PeopleAroundMe} title="People Around You"></Scene>

            <Scene key="chat" 
            component={ChatWindow} title="Chat with your match!"></Scene>
            <Scene key="userProfile" 
            component={Profile} title="View Profile"></Scene>
            <Scene key="userMessages" 
            component={Messages} title="My Messages"></Scene>



             </Scene>
            </Scene>
        </Router>

    );

};


export default RouterComponent;