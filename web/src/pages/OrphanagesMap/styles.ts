import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    width: 100vw;
    height: 100vh;

    display: flex;

    aside {
        width: 440px;
        background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
        padding: 80px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    header h2 {
        font-size: 40px;
        font-weight: 800;
        line-height: 42px;
        margin-top: 64px;
    }

    header p {
        line-height: 28px;
        margin-top: 24px;
    }

    aside footer {
        /*font-size: 24px;
        line-height: 34px;*/

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    footer strong {
        font-weight: 800;
    }

    .leaflet-container {
        z-index: 1;
    }

    .leaflet-container .leaflet-popup-content-wrapper {
        background: rgba(254,254,254,0.8);
        border-radius: 20px;
        box-shadow: none;
    }

    .leaflet-popup-content-wrapper .leaflet-popup-content {
        color: #0089a5;
        font-size: 20px;
        font-weight: bold;
        margin: 8px 12px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .leaflet-popup-content a {
        width: 40px;
        height: 40px;
        background: #15c3d6;
        box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .leaflet-container .leaflet-popup-tip-container {
        display: none;
    }

    a.create-orphanage {
        position: absolute;
        z-index: 10;
        bottom: 40px;
        right: 40px;

        width: 64px;
        height: 64px;
        border-radius: 20px;

        background: #15c3d6;
        transition: background-color .2s;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: #17D6EB;
        }
    }
`;
