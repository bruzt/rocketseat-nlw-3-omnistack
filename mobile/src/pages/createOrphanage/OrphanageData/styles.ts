import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`;

export const TitleText = styled.Text`
    color: #5c8599;
    font-size: 24px;
    font-family: 'nunito700';
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom-width: 0.8px;
    border-bottom-color: #D3E2E6;
`;

export const LabelText = styled.Text`
    color: #8fa7b3;
    font-family: 'nunito600';
    margin-bottom: 8px;
`;

export const InputText = styled.TextInput`
    background-color: #fff;
    border: 1.4px solid #d3e2e6;
    border-radius: 20px;
    height: 56px;
    padding: 18px 18px 0;
    margin-bottom: 16px;
    textAlignVertical: top;
`;

export const ImageInputButton = styled.TouchableOpacity`
    background-color: rgba(255, 255, 255, 0.5);
    border: 1.4px dashed #96D2F0;
    border-radius: 20px;
    height: 56px;
    margin-bottom: 32px;

    justify-content: center;
    align-items: center;
`;

export const UploadedImagesScroll = styled.ScrollView`
    
`;

export const UploadedImage = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    margin: 0 8px 32px 0;
`;

export const SwitchView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const NextButton = styled(RectButton)`
    background-color: #15c3d6;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 32px;
`;

export const NextButtonText = styled.Text`
    font-family: 'nunito800';
    font-size: 16px;
    color: #FFF;
`;

/*
  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },
*/