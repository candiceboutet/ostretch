import { useState } from 'react';

// Styles
import Info from '../../components/Info';
import InfoForm from '../../components/InfoForm';
import './styles.scss'

const MySpace = ({user}) => {

    const [isEditOpen, setIsEditOpen] = useState(false);

    const onEdit = () => {
        setIsEditOpen(!isEditOpen);
    }

    return (
        <div className='MySpace'>
            <div className="bienvenue">Bienvenue {user.username}</div>
            <div className="box">
                
                <h2>Mes informations</h2>
                { isEditOpen ? <InfoForm user={user} handleClick={onEdit}/> : <Info user={user} handleClick={onEdit} />}
     
            </div>
            <div className="box">
          
                <h2>Mes favoris</h2>
                
            </div>
        </div>
    );
};

export default MySpace;