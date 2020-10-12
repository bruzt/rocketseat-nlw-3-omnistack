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
