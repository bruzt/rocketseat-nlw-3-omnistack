import React, { useCallback, useState } from 'react';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { AppLoading } from 'expo';

import api from '../../services/api';

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

export interface IOrphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: Array<{
        id: number;
        path: string;
        url: string;
    }>;
}

export default function OrphanagesMap() {

    const [getOrphanages, setOrphanages] = useState<IOrphanage[]>();

    const navigation = useNavigation();

    useFocusEffect(useCallback( () => {
        fetchOrphanates();
    }, []));

    async function fetchOrphanates() {
        
        try {

            const response = await api.get('/orphanages');
            
            setOrphanages(response.data);
            
        } catch (error) {
            console.log(error);
            alert('Erro ao buscar orfanatos');
        }
    }

    if(!getOrphanages) return <AppLoading />;
 
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
                {getOrphanages.map( (orphanage) => (
                    <Marker 
                            key={orphanage.id}
                            icon={mapMarker}
                            coordinate={{
                                latitude: Number(orphanage.latitude),
                                longitude: Number(orphanage.longitude),
                            }}
                            /*calloutAnchor={{
                                x: 2.7,
                                y: 0.8
                            }}*/
                    >
                        <Callout 
                            tooltip={true}
                            onPress={() => navigation.navigate('OrphanageDetails', { orphanage })}
                        >
                                <CalloutView>
                                    <CalloutText>{orphanage.name}</CalloutText>
                                </CalloutView>
                        </Callout>
                    </Marker>
                ))}
            </Map>

            <FooterView>
                <FooterText>{getOrphanages.length} orfanatos encontrados</FooterText>

                <CreateOrphanageButton
                    onPress={() => navigation.navigate('SelectMapPosition')}
                >
                    <PlusIcon />
                </CreateOrphanageButton>
            </FooterView>

        </Container>
    );
}
