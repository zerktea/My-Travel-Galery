import '../index.css'
import { FaGlobeAfrica } from 'react-icons/fa';

export default function Header(){
    return (
    <div className='header'>
    <i><FaGlobeAfrica /></i>
    <h3 className='header--text'>
        Catalogue
    </h3>
    </div>
    )

}