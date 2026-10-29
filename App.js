import React from 'react';
import { ScrollView, Text } from 'react-native';
import Boat from './components/Boat';

const App = () => {
    return (
        <ScrollView style={{ marginTop: 40, padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>
                GetABoat - For Sale
            </Text>

            <Boat
                name="SEA RAY 500 SUNDANCER"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                icon_name="sailboat"
                poster={require('./img/sea_ray.jpg')}
            />
            <Boat
                name="FOUR WINNS HORIZON 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                icon_name="sailboat"
                poster={require('./img/four_winns.jpg')}
            />
            <Boat
                name="FLIPPER 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                icon_name="sailboat"
                poster={require('./img/flipper.jpg')}
            />
            <Boat
                name="PRINCESS V48"
                description="There is the possibility for an optional hydraulic bathing platform and a dinghy garage."
                icon_name="sailboat"
                poster={require('./img/princess.jpg')}
            />
            <Boat
                name="BAYLINER VR5"
                description="The deck is one of the roomiest you'll ever see, thanks to the BeamForward design."
                icon_name="sailboat"
                poster={require('./img/bayliner.jpg')}
            />
            <Boat
                name="FAIRLINE SQUADRON 58"
                description="At the sporty end of the luxury cruiser spectrum, the Squadron 58 proves high performance."
                icon_name="sailboat"
                poster={require('./img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default App;