import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const GMSingleListItem = (props) => {
    if (props.data.isChecked || props.selected) {

        return (
            <TouchableOpacity onPress={() => props && props.onPress()} activeOpacity={1}
                style={{
                    backgroundColor: 'white', alignItems: 'center',
                    flex: 1, elevation: 2,
                    borderColor: '#ff9000', borderWidth: .5,
                    borderRadius: 1, alignItems: 'center',
                    marginTop: 10, marginLeft: 10, marginRight: 10,
                    padding: 20, flexDirection: 'row',
                }}>
                <View style={{
                    position: 'absolute', right: 0, top: 0,
                    width: 0,
                    height: 0,
                    backgroundColor: 'transparent',
                    borderStyle: 'solid',
                    borderRightWidth: 25,
                    borderTopWidth: 25,
                    borderRightColor: 'transparent',
                    borderTopColor: '#ff9000',
                    transform: [
                        { rotate: '90deg' }
                    ],
                }}>

                </View>

                <FoundationIcon name="check" size={12} color={"white"} style={{ position: 'absolute', top: 1, right: 1 }} />

                <Text style={{ marginLeft: 10 }}>{props.data.name}</Text>
            </TouchableOpacity>);
    }
    else {

        return (
            <TouchableOpacity onPress={() => props && props.onPress()} activeOpacity={1}
                style={{
                    backgroundColor: 'white', alignItems: 'center',
                    flex: 1, elevation: 2,
                    borderColor: '#eee', borderWidth: .5,
                    borderRadius: 1, alignItems: 'center',
                    marginTop: 10, marginLeft: 10, marginRight: 10,
                    padding: 20, flexDirection: 'row',
                }}>

                <Text style={{ marginLeft: 10 }}>{props.data.name}</Text>
            </TouchableOpacity>);

    }


}




export default GMSingleListItem
