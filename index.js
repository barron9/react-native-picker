import React, { Component } from "react";
import {
    Text,
    View,
    FlatList
} from "react-native";
import mockapi from './MockApi'
import GMSingleListItem from './GMSingleListItem'
const languagedata = mockapi._getlanguages("1")

class LanguageScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { selecteditem:false }
    }
    _setlanguage(item) {
        item.isChecked=!item.isChecked
        this.setState({ selectedLang: item }
        )
    }
    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor:'#eee' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    data={languagedata.data.langs}
                    renderItem={({ item }) =>
                        <GMSingleListItem data={item} 
                        selected={(item.isChecked) == true && (this.state.selectedLang && this.state.selectedLang.isChecked) == true ? true : false} 
                        onPress={() => this._setlanguage(item)} />
                    }
                />
            </View>
        );
    }
}


