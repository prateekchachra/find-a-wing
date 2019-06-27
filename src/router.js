import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {View} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';


import ChatWindow from './components/chat/ChatWindow';
import SwipePeople from './components/swipe/SwipePeople';
import Profile from './components/profile/Profile';
import PeopleAroundMe from './components/people/PeopleAroundMe';
import Messages from './components/messages/Messages';
import styles from './styles';
import SetLocation from './components/common/SetLocation';
import SetStatus from './components/user/SetStatus';
import Settings from './components/settings/Settings';
import Welcome from './components/welcome/Welcome';
import EditProfile from './components/user/EditProfile';




const NavigatorMenu = ({isSwipeScreen}) => (
    <Menu>
      <MenuTrigger>
      <Icon name="options-vertical" size={20}/>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption 
        onSelect={() => {isSwipeScreen ? Actions.aroundMe() : Actions.swipeScreen()}} 
        text={isSwipeScreen ? 'Around Me' : 'Back To Search'} />
        <MenuOption onSelect={() => Actions.editProfile()} text='Edit Profile' />
        <MenuOption onSelect={() => Actions.setStatus()} text='Set Status' />
        <MenuOption onSelect={() => Actions.settings()} text='Settings' />
            <View style={{
            marginVertical: 5,
            marginHorizontal: 2,
            borderBottomWidth: 1,
            borderColor: '#ccc',
            }}/>
         <MenuOption onSelect={() => Actions.logout()} text='Logout' />
      </MenuOptions>
    </Menu>
  );

class RouterComponent extends Component{



    refSwipeScreenMenu(r){
        r = this.menu;

    }


      onOptionSelect(menu, value){
          menu.close();
          Actions.jump(value);
      }


    render(){




    return(
        
        <MenuProvider>
        <Router>
            <Scene key="root" hideNavBar>
           {/*     <Scene key="auth">
            <Scene key="login" component = {LoginForm} title="Please Login" initial>
            </Scene>
            <Scene key="register" component = {Register} title="Register your profile"></Scene>
    </Scene> */}
            <Scene key="main">

            <Scene key="welcome" initial
             titleStyle={styles.navTitle}
             renderRightButton={NavigatorMenu(
                {isSwipeScreen: true}
            )}
            component={Welcome} title="Welcome"></Scene>

            <Scene key="swipeScreen"
            leftButtonTextStyle={styles.navLeft}
            titleStyle={styles.navTitle}
                leftTitle="My Messages"
                onLeft={() => {
                    Actions.userMessages();
                }}
               renderRightButton={NavigatorMenu(
                   {isSwipeScreen: true}
               )}
            component={SwipePeople} title="Find A Wing" ></Scene> 


            <Scene key="aroundMe"
             titleStyle={styles.navAroundMe}
             renderRightButton={NavigatorMenu(
                {isSwipeScreen: false}
            )}
            component={PeopleAroundMe} title="People Around You"></Scene>

            <Scene key="chat" 
             titleStyle={styles.title}
            component={ChatWindow} title="Chat with your match!"></Scene>
            <Scene key="userProfile"
             titleStyle={styles.navAroundMe}
            component={Profile} title="View Profile"></Scene>

            <Scene key="userMessages" 
             titleStyle={styles.navTitle}     
            component={Messages} title="My Messages"></Scene>
            <Scene key="location" 
             titleStyle={styles.navTitle}     
            component={SetLocation} title="Select Location"></Scene>
            <Scene key="setStatus" 
             titleStyle={styles.navTitle}     
            component={SetStatus} title="Set Your Current Status"></Scene>
            <Scene key="settings" 
             titleStyle={styles.navTitle}     
            component={Settings} title="Settings"></Scene>
            <Scene key="editProfile" 
             titleStyle={styles.navTitle}     
            component={EditProfile} title="Edit Your Profile"></Scene>


             </Scene>
            </Scene>
        </Router>
        </MenuProvider>

    );
 }
}


export default RouterComponent;