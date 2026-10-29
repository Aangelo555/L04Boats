import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color:'red'}}>
                <FontAwesome6 name={icon_name} size={18} color="red" /> {name}
            </Text>
            <Text>{description}</Text>
            <Image
                source={poster}
                style={{ width: 400, height: 200 }}
            />
        </View>
    );
};

export default Boat;