import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
`;

export const Map = styled(MapView)`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
`;

export const CalloutView = styled.View`
    width: 160px;
    height: 46px;

    padding: 0 16px;
    margin-bottom: 5px;
    background: rgba(254, 254, 254, 0.8);
    border-radius: 16px;

    justify-content: center;
    align-items: center;
`;

export const CalloutText = styled.Text`
    color: #0089a5;
    font-size: 14px;
    font-family: 'nunito700';
`;

export const FooterView = styled.View`
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;

    background: #fff;
    border-radius: 20px;
    height: 56px;
    padding-left: 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    elevation: 3;
`;

export const FooterText = styled.Text`
    color: #8fa7b3;
    font-family: 'nunito700';
`;

export const CreateOrphanageButton = styled(RectButton)`
    width: 56px;
    height: 56px;
    background: #15c3d6;
    border-radius: 20px;

    justify-content: center;
    align-items: center;
`;

export const PlusIcon = styled(Feather).attrs({
    name: 'plus',
    size: 20,
    color: '#eee',
})`
    
`;
