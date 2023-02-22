import '../index.css'
import { FaMapPin } from 'react-icons/fa';

export default function Elements(props){

    return(
        
            <div className="element">
                <div className="element--imageplace">                                                               
                    <img src={`../../public/images/${props.res.imageUrl}`} alt={props.res.title} className="element--image" />
                </div>                
                <div className="element--text">
                    <p ><span className="map"> <FaMapPin /></span> <span className="element--country">{props.res.title}</span> <a href={props.res.googleMapsUrl} target="_blank" >View on Google Maps</a></p>
                    <h1>{props.res.location}</h1>
                    <p><b>{props.res.startDate}</b>-<b>{props.res.endDate}</b></p>
                    <p>{props.res.description}</p>
                </div>
            </div>
        
    )
}