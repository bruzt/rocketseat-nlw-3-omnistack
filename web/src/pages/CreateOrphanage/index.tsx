import React, { FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import mapIcon from '../../assets/mapIcon';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import api from "../../services/api";

interface IData {
    [key: string]: any;
}

export default function CreateOrphanage() {

    const [getLatLng, setLatLng] = useState({ lat: 0, lng: 0 });

    const [getName, setName] = useState('');
    const [getAbout, setAbout] = useState('');
    const [getFiles, setFiles] = useState<File[]>([]);
    const [getInstructions, setInstructions] = useState('');
    const [getOpeningHours, setOpeningHours] = useState('');
    const [getOpenOnWeekends, setOpenOnWeekends] = useState(true);

    const history = useHistory();

    function handleSelectFiles(event: FormEvent<HTMLInputElement>){

        const files = event.currentTarget.files ? Array.from(event.currentTarget.files) : [];

        if (files.length > 0) {

            const concatFiles = [...getFiles, ...files];

            const uniqueFiles = concatFiles.map( (file) => file['name'])
                .map( (name, index, final) => final.indexOf(name) === index && index)
                .filter( (index) => concatFiles[index as number])
                .map( (file) => concatFiles[file as number])
            ;

            setFiles(uniqueFiles);
        }
    }

    function handleRemoveFile(name: string) {

        const files = getFiles.filter((file) => file.name != name);

        setFiles(files);
    }

    async function handleSubmit(event: FormEvent) {
        
        event.preventDefault();

        const data: IData = {
            name: getName,
            latitude: getLatLng.lat,
            longitude: getLatLng.lng,
            about: getAbout,
            instructions: getInstructions,
            opening_hours: getOpeningHours,
            open_on_weekends: getOpenOnWeekends,
        }

        const orphanateData = new FormData();

        for(const key in data) orphanateData.append(key, data[key]);   

        getFiles.forEach( (file) => orphanateData.append('images', file, file.name));

        try {

            await api.post('/orphanages', orphanateData);

            alert('Orfanato cadastrado com sucesso!');

            history.push('/app');
            
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar orfanato');
        }
    }

    return (
        <Container>
            
            <Sidebar />

            <main>
                <form className="create-orphanage-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-22.4746482, -47.458847]}
                            style={{ width: '100%', height: 280 }}
                            zoom={15}
                            onclick={(event) => setLatLng(event.latlng)}
                        >
                            <TileLayer
                                url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                            />

                            {getLatLng.lat !== 0 && (
                                <Marker interactive={false} icon={mapIcon} position={[getLatLng.lat, getLatLng.lng]} />
                            )}
                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input 
                                id="name" 
                                value={getName}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                            <textarea 
                                id="about" 
                                maxLength={300} 
                                value={getAbout}
                                onChange={(event) => setAbout(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>


                            <div className="images-container">
                                {getFiles.map( (file, index) => (
                                    
                                    <div key={index} className="img-wrapper">
                                        <img  src={URL.createObjectURL(file)} alt={file.name} />

                                        <button 
                                            type='button'
                                            onClick={() => handleRemoveFile(file.name)}
                                        >
                                            X
                                        </button>
                                    </div>
                                ))}

                                <label htmlFor='image[]' className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>

                            </div>

                            <input 
                                id='image[]' 
                                multiple 
                                type="file" 
                                accept="image/png, image/gif, image/jpeg"
                                onChange={handleSelectFiles}
                            />

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <textarea 
                                id="instructions" 
                                value={getInstructions}
                                onChange={(event) => setInstructions(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Horário de atendimento</label>
                            <input 
                                id="opening_hours" 
                                value={getOpeningHours}
                                onChange={(event) => setOpeningHours(event.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">Atende fim de semana</label>

                            <div className="button-select">
                                <button 
                                    type="button" 
                                    className={getOpenOnWeekends ? 'active' : ''}
                                    onClick={() => setOpenOnWeekends(true)}
                                >
                                    Sim
                                </button>

                                <button 
                                    type="button"
                                    className={getOpenOnWeekends ? '' : 'active'}
                                    onClick={() => setOpenOnWeekends(false)}
                                >
                                    Não
                                </button>
                            </div>
                        </div>
                    </fieldset>

                    <button 
                        className="confirm-button" 
                        type="submit"
                    >
                        Confirmar
                    </button>
                </form>
            </main>
        </Container>
    );
}
