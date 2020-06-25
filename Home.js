import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            possibleFriends: [
            'Allie',
            'Gator',
            'Lizzie',
            ],
            currentFriends: [],
        }
        }
        addFriend = (index) => {
            const {
            currentFriends,
            possibleFriends,
            } = this.state
        
        const addedFriend = possibleFriends.splice(index, 1)
        
        currentFriends.push(addedFriend)
        
        this.setState({
        currentFriends,
        possibleFriends,
        })
    }
    render(){
        const { navigation } = this.props;
        
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>We have friends {this.state.currentFriends.length} !</Text>
        <Button
          title="Go to add friends"
          onPress={() => navigation.navigate('Friends', { currentFriends: this.state.currentFriends, possibleFriends: this.state.possibleFriends, addFriend: this.addFriend })}
        />
      </View>
      
    );
  }
}
