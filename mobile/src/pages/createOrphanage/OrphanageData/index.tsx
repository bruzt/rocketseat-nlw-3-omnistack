import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as imagePicker from 'expo-image-picker';

import api from '../../../services/api';

import { 
    ScrollContainer,
    TitleText,
    LabelText,
    InputText,
    ImageInputButton,
    UploadedImagesScroll,
    UploadedImage,
    SwitchView,
    NextButton,
    NextButtonText,
} from './styles';

interface ICoordinates {
    latitude: number;
    longitude: number;
}

interface IData {
    [key: string]: any;
}

export default function OrphanageData() {

    const [getName, setName] = useState('');
    const [getAbout, setAbout] = useState('');
    const [getWhatsapp, setWhatsapp] = useState('');
    const [getImages, setImages] = useState<string[]>([]);
    const [getInstructions, setInstructions] = useState('');
    const [getOpeningHours, setOpeningHours] = useState('');
    const [getOpenOnWeekends, setOpenOnWeekends] = useState(false);

    const { coordinates } = useRoute().params as { coordinates: ICoordinates };

    const navigation = useNavigation();

    async function handlePickImages(){

        const { status } = await imagePicker.requestCameraRollPermissionsAsync();

        if(status !== 'granted'){
            alert('É necessario permisão');
            return;
        }

        const result = await imagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: imagePicker.MediaTypeOptions.Images,
        });

        if(result.cancelled) return;

        setImages([ ...getImages, result.uri ]);
    }

    async function onSubmit() {

        const data: IData = {
            name: getName,
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            about: getAbout,
            instructions: getInstructions,
            opening_hours: getOpeningHours,
            open_on_weekends: getOpenOnWeekends,
        }

        const orphanateData = new FormData();

        for(const key in data) orphanateData.append(key, data[key]);   

        getImages.forEach( (image, index) => {

            const imgName = index + '-' + image.split('/').splice(-1)[0].split('.')[0] + '.jpg';
 
            orphanateData.append(
                'images', 
                {
                    name: imgName,
                    type: 'image/jpg',
                    uri: image,
                } as any,
                imgName
            );
        });       
        
        try {

            await api.post('/orphanages', orphanateData);

            navigation.navigate('OrphanagesMap');
            
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar orfanato');
        }
    }

    return (
        <ScrollContainer contentContainerStyle={{ padding: 24 }}>
            <TitleText>Dados</TitleText>

            <LabelText>Nome</LabelText>
            <InputText
                value={getName}
                onChangeText={setName}
            />

            <LabelText>Sobre</LabelText>
            <InputText
                style={{ height: 110 }}
                multiline
                value={getAbout}
                onChangeText={setAbout}
            />

            {/*
                <LabelText>Whatsapp</LabelText>
                <InputText 
                    value={getWhatsapp}
                    onChangeText={setWhatsapp}
                />
            */}

            <LabelText>Fotos</LabelText>
            <ImageInputButton onPress={handlePickImages}>
                <Feather name="plus" size={24} color="#15B6D6" />
            </ImageInputButton>

            <UploadedImagesScroll horizontal>
                {getImages.map( (image, index) => (
                    <UploadedImage 
                        key={index}
                        source={{ uri: image}}
                    />
                ))}
            </UploadedImagesScroll>

            <TitleText>Visitação</TitleText>

            <LabelText>Instruções</LabelText>
            <InputText
                style={{ height: 110 }}
                multiline
                value={getInstructions}
                onChangeText={setInstructions}
            />

            <LabelText>Horario de visitas</LabelText>
            <InputText 
                value={getOpeningHours}
                onChangeText={setOpeningHours}
            />

            <SwitchView>
                <LabelText>Atende final de semana?</LabelText>
                <Switch
                    thumbColor="#fff"
                    trackColor={{ false: '#ccc', true: '#39CC83' }}
                    value={getOpenOnWeekends}
                    onValueChange={setOpenOnWeekends}
                />
            </SwitchView>

            <NextButton onPress={onSubmit}>
                <NextButtonText>Cadastrar</NextButtonText>
            </NextButton>
        </ScrollContainer>
    )
}