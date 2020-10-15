import React from 'react';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'

import { 
    Container, 
    Map, 
    CalloutView,
    CalloutText, 
    FooterView, 
    FooterText,
    CreateOrphanageButton,
    PlusIcon,
} from './styles';

import mapMarker from '../../assets/map-marker.png';

export default function OrphanagesMap() {

    const navigation = useNavigation();

    return (
        <Container>
            <Map
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -22.4746482,
                    longitude: -47.458847,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }}
            >
                <Marker 
                        icon={mapMarker}
                        coordinate={{
                            latitude: -22.4746482,
                            longitude: -47.458847,
                        }}
                        /*calloutAnchor={{
                            x: 2.7,
                            y: 0.8
                        }}*/
                >
                    <Callout 
                        tooltip={true}
                        onPress={() => navigation.navigate('OrphanagesDetails')}
                    >
                            <CalloutView>
                                <CalloutText>Lar Legal</CalloutText>
                            </CalloutView>
                    </Callout>
                </Marker>
            </Map>

            <FooterView>
                <FooterText>2 orfanatos encontrados</FooterText>

                <CreateOrphanageButton
                    onPress={() => {}}
                >
                    <PlusIcon />
                </CreateOrphanageButton>
            </FooterView>

        </Container>
    );
}
