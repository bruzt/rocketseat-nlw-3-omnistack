import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import mapMarkerImg from '../../assets/map-marker.png';

import {
    ScrollContainer,
    ImagesView,
    StyledImage,
    DetailsView,
    TitleText,
    DescriptionText,
    MapContainer,
    Map,
    GoogleMapsButton,
    RoutesText,
    SeparatorView,
    ScheduleView,
    ScheduleItemBlue,
    ScheduleTextBlue,
    ScheduleItemGreen,
    ScheduleTextGreen,
    ScheduleItemRed,
    ScheduleTextRed,
    ContactButton,
    ContactButtonText,
} from './styles';

import { IOrphanage } from '../OrphanagesMap';

export default function OrphanageDetails() {

    const route = useRoute();

    const { orphanage } = route.params as { orphanage: IOrphanage };

    return (
        <ScrollContainer>
            <ImagesView>
                <ScrollView horizontal pagingEnabled>
                    {orphanage.images.map( (image) => (
                        <StyledImage key={image.id} source={{ uri: image.url }} />
                    ))}
                </ScrollView>
            </ImagesView>

            <DetailsView>
                <TitleText>{orphanage.name}</TitleText>
                <DescriptionText>{orphanage.about}</DescriptionText>

                <MapContainer>
                    <Map
                        initialRegion={{
                            latitude: Number(orphanage.latitude),
                            longitude: Number(orphanage.longitude),
                            latitudeDelta: 0.008,
                            longitudeDelta: 0.008,
                        }}
                        zoomEnabled={false}
                        pitchEnabled={false}
                        scrollEnabled={false}
                        rotateEnabled={false}
                    >
                        <Marker
                            icon={mapMarkerImg}
                            coordinate={{
                                latitude: Number(orphanage.latitude),
                                longitude: Number(orphanage.longitude)
                            }}
                        />
                    </Map>

                    <GoogleMapsButton 
                        onPress={() => Linking.openURL(`http://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`)}
                    >
                        <RoutesText>Ver rotas no Google Maps</RoutesText>
                    </GoogleMapsButton>
                </MapContainer>

                <SeparatorView />

                <TitleText>Instruções para visita</TitleText>
                <DescriptionText>{orphanage.instructions}</DescriptionText>

                <ScheduleView>
                    <ScheduleItemBlue>
                        <Feather name="clock" size={40} color="#2AB5D1" />
                        <ScheduleTextBlue>{orphanage.opening_hours}</ScheduleTextBlue>
                    </ScheduleItemBlue>
                    {orphanage.open_on_weekends 
                        ? (
                            <ScheduleItemGreen>
                                <Feather name="info" size={40} color="#39CC83" />
                                <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
                            </ScheduleItemGreen>
                        ) : (
                            <ScheduleItemRed>
                                <Feather name="info" size={40} color="#FF669D" />
                                <ScheduleTextRed>Não atendemos fim de semana</ScheduleTextRed>
                            </ScheduleItemRed>
                        )
                    }
                </ScheduleView>

                <ContactButton onPress={() => { }}>
                    <FontAwesome name="whatsapp" size={24} color="#FFF" />
                    <ContactButtonText>Entrar em contato</ContactButtonText>
                </ContactButton>
            </DetailsView>
        </ScrollContainer>
    )
}