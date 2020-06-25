import * as React from 'react';
import {Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from './FriendsActions';


class Friends extends React.Component {    
    render(){
        const { navigation } = this.props;     
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add friends here!</Text>

        {this.props.friends.possible.map((friend, index) => (
            <Button
                key={ friend }
                title={`Add ${ friend }`}
                onPress={() =>
                this.props.addFriend(index)
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
const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
};
const mapDispatchToProps = dispath => (
    bindActionCreators({
        addFriend,
    }, dispath)
);
export default connect(mapStateToProps, mapDispatchToProps)(Friends);