import React from "react";
import {View,Text, Button} from "react-native";

export default props=>{
    return(
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text> Profile Screen</Text>
            <Button
            title="Go to Settings"
            onPress={()=>props.navigation.navigate('Settings')}/>

        </View>
    )
}