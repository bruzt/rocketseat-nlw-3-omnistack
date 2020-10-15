import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { AppLoading } from 'expo';

import Routes from './src/routes';

export default function App() {

    const [fontsLoaded] = useFonts({
        nunito600: Nunito_600SemiBold,
        nunito700: Nunito_700Bold,
        nunito800: Nunito_800ExtraBold,
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <SafeAreaView style={style.appContainer}>
            <StatusBar style="light" backgroundColor='#111' />
            <Routes />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    }
});
