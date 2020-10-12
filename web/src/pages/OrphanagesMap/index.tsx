import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { Container } from './styles';

import mapMarkerImg from '../../assets/images/map-marker.svg';

export default function OrphanagesMap() {

    return (
        <Container>
            
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy logo"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Cordeirópolis</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-22.4746482, -47.458847]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </Map>

            <Link to='/' className='create-orphanage'>
                <FiPlus size={32} color='#eee' />
            </Link>

        </Container>
    );
}
