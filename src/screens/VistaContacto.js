import MapContainer from "../components/Maps";
import './styles.css'

export default function VistaContacto(){

    return(
        <>
        <h3 className="TituloContacto">Contacto con el desarrollador</h3>
        <div className="divMapa">
            <MapContainer/>
        </div>
        </>
    )
}