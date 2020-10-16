import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`;

export const ImagesView = styled.View`
    height: 240px;
`;

export const StyledImage = styled.Image`
    width: ${Dimensions.get('window').width}px;
    height: 240px;
    resizeMode: cover;
`;

export const DetailsView = styled.View`
    padding: 24px;
`;

export const TitleText = styled.Text`
    color: #4D6F80;
    font-size: 30px;
    font-family: 'nunito700';
`;

export const DescriptionText = styled.Text`
    font-family: 'nunito600';
    color: #5c8599;
    line-height: 24px;
    margin-top: 16px;
`;

export const MapContainer = styled.View`
    border-radius: 20px;
    overflow: hidden;
    border: 1.2px solid #B3DAE2;
    margin-top: 40px;
    background: #E6F7FB;
`;

export const Map = styled(MapView)`
    width: 100%;
    height: 150px;
`;

export const GoogleMapsButton = styled.TouchableOpacity`
    padding: 16px;
    align-items: center;
    justify-content: center;
`;

export const RoutesText = styled.Text`
    font-family: 'nunito700';
    color: #0089a5;
`;

export const SeparatorView = styled.View`
    height: 0.8px;
    width: 100%;
    background: #D3E2E6;
    margin: 40px 0;
`;

export const ScheduleView = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
`;

const ScheduleItemView = styled.View`
    width: 48%;
    padding: 20px;
`;

export const ScheduleItemBlue = styled(ScheduleItemView)`
    background: #E6F7FB;
    border: 1px solid #B3DAE2;
    border-radius: 20px;
`;

export const ScheduleItemGreen = styled(ScheduleItemView)`
    background: #E6F7FB;
    border: 1px solid #A1E9C5;
    border-radius: 20px;
`;

export const ScheduleItemRed = styled(ScheduleItemView)`
    background: #FDF6F9;
    border: 1px solid #FFBCD4;
    border-radius: 20px;
`;

const ScheduleText = styled.Text`
    font-family: 'nunito600';
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
`;

export const ScheduleTextBlue = styled(ScheduleText)`
    color: #5C8599;
`;

export const ScheduleTextGreen = styled(ScheduleText)`
    color: #37C77F;
`;

export const ScheduleTextRed = styled(ScheduleText)`
    color: #FF669D;
`;

export const ContactButton = styled(RectButton)`
    background: #3CDC8C;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
    font-family: 'nunito800';
    color: #FFF;
    font-size: 16px;
    margin-left: 16px;
`;
