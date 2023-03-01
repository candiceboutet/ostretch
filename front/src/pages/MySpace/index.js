import { useState } from 'react';

// Styles
import Info from '../../components/Info';
import InfoForm from '../../components/InfoForm';
import './styles.scss'

const MySpace = ({user}) => {

    const [isEditOpen, setIsEditOpen] = useState(false);

    const onEdit = () => {
        setIsEditOpen(true);
    }

    return (
        <div className='MySpace'>
            <div className="bienvenue">Bienvenue {user.username}</div>
            <div className="box">
                
                <h2>Mes informations</h2>
                { isEditOpen ? <InfoForm user={user}/> : <Info user={user} handleEdit={onEdit} />}
     
            </div>
            <div className="box">
          
                <h2>Mes favoris</h2>
                <p className=''> Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus.Lorem ipsum dolor sit amet consectetur.</p>
    
            </div>
        </div>
    );
};

export default MySpace;