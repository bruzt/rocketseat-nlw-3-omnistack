import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { 
    Container,
    TitleText,
    BackButton,
    XButton,
} from './styles';

interface IProps {
    title: string;
    showCancel?: boolean
}

export default function Header({ title, showCancel = true }: IProps) {

    const navigation = useNavigation();

    return (
        <Container>
            <BackButton onPress={navigation.goBack}>
                <Feather name='arrow-left' color='#15d6d6' size={24} />
            </BackButton>

            <TitleText>{title}</TitleText>
            
            {showCancel 
                ? (
                    <XButton onPress={() => navigation.navigate('OrphanagesMap')}>
                        <Feather name='x' color='#ff669d' size={24} />
                    </XButton>
                ) : (
                    <View />
                )
            }
        </Container>
    );
}
