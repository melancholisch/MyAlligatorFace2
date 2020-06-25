import * as React from 'react';
import {Button, View, Text } from 'react-native';

export default class Friends extends React.Component {    
    
    render(){
        const { navigation } = this.props;
        const { route } = this.props;
        const {currentFriends} = route.params;
        const {possibleFriends} = route.params;
        const { addFriend } = route.params;
        

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add friends here!</Text>

        {possibleFriends.map((friend, index) => (
            <Button
                key={ friend }
                title={`Add ${ friend }`}
                onPress={() =>
                addFriend(index)
                }
            />
            )
        )
        }

        <Button
          title="Back to home"
          onPress={() => navigation.navigate('Home')
          }
        />
        </View>
    );
    }
}