import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapEvent, Marker } from 'react-native-maps';

import { 
    Container,
    Map,
    NextButton,
    NextButtonText,
} from './styles';

import mapMarkerImg from '../../../assets/map-marker.png';

export default function SelectMapPosition() {

    const [getLatLng, setLatLng] = useState({ latitude: 0, longitude: 0 });
    
    const navigation = useNavigation();
    
    return (
        <Container>
            <Map
                initialRegion={{
                    latitude: -22.4746482,
                    longitude: -47.458847,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
                onPress={(event) => setLatLng(event.nativeEvent.coordinate)}
            >
                {getLatLng.latitude !== 0 && (
                    <Marker
                        icon={mapMarkerImg}
                        coordinate={{ latitude: getLatLng.latitude, longitude: getLatLng.longitude }}
                    />
                )}
            </Map>

            {getLatLng.latitude !== 0 && (
                <NextButton onPress={() => navigation.navigate('OrphanageData', { coordinates: getLatLng })}>
                    <NextButtonText>Próximo</NextButtonText>
                </NextButton>
            )}

        </Container>
    )
}