import estilos from './Sensores.module.css'
import { Card } from './Card'
import { Link } from 'react-router-dom' 
import {NavigationArrow } from '@phosphor-icons/react'

export function Sensores({propsSensor}){
    return(
        <Card>
            
            <div className={estilos.container}>
                <h3 className={estilos.identificador}>{propsSensor.id}</h3>
                
                <div className={estilos.icone}>
                    <NavigationArrow size={35} />
                </div>
                
                <div className={estilos.containerInfo}>
                    <p className={estilos.campo}>Tipo de Sensor: {propsSensor.tipo}</p>
                    <p className={estilos.campo}>Localização: {propsSensor.localizacao}</p>
                    <p className={estilos.campo}>Latitude: {propsSensor.latitude}</p>
                    <p className={estilos.campo}>Longitude: {propsSensor.longitude}</p>
                    <p className={estilos.campo}>Responsável: {propsSensor.responsavel}</p>
                </div>

        
                <Link 
                    className={estilos.botao}
                    to={`alterar-sensor/${propsSensor.id}`}>
                        Alterar
                </Link>
                
                
            </div>
            
        </Card>
        
    )
}