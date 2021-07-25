import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chat extends React.Component {

    state = {
        messages: [
            {
                _id: 4,
                text: '-_-',
                createdAt: new Date(),
                user: {
                  _id: 1,
                  name: 'Dhananjay',
                  avatar: 'https://placeimg.com/141/140/any',
                },
              },
            {
              _id: 3,
              text: 'mera nahi ho payega',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Jagdish',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
            {
                _id: 2,
                text: 'haan, kaise sawaal pooch raha hai',
                createdAt: new Date(),
                user: {
                  _id: 3,
                  name: 'Jai',
                  avatar: 'https://placeimg.com/140/141/any',
                },
            },
            {
                _id: 1,
                text: 'chal rahe hai naa?',
                createdAt: new Date(),
                user: {
                  _id: 4,
                  name: 'Om',
                  avatar: 'https://placeimg.com/140/142/any',
                },
            }
          ]
      };
    
    user = {
        _id: 1,
        name: 'dhananjay'
    };

    _onSend = function onSend(messages, message){
        this.setState({
            messages: GiftedChat.append(messages, message)
          })
    }
    render() {
        return (
          <GiftedChat
            messages={this.state.messages}
            onSend={message => this._onSend(this.state.messages, message)}
            user={this.user}
            renderUsernameOnMessage={true}
            isTyping={true}
            alwaysShowSend={true}
            isCustomViewBottom 
          />
        );
      }
}