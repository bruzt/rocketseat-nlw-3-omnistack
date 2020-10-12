import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from '../../assets/images/logo.svg';

export default function Landing() {

    return (
        <Container>
            
            <div className="content-wrapper">
                <img src={logoImg} alt="logo"/>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Cordeirópolis</strong>
                    <span>São Paulo</span>
                </div>

                <Link to="/app" className='enter-app'>
                    <FiArrowRight size={26} color='rgba(1, 1, 1, 0.6)' />
                </Link>
            </div>

        </Container>
    );
}
