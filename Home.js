import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {

    render(){
      const { navigation } = this.props;
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>We have {this.props.friends.current.length} friends  !</Text>
        <Button
          title="Go to add friends"
          onPress={() => navigation.navigate('Friends')}
        />
      </View>
      
    );
  }
}
const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};
export default connect(mapStateToProps)(HomeScreen);
