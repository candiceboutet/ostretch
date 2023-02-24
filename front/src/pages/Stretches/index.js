import React from 'react';
import axios from 'axios';
import Wrapper from '../../components/Wrapper';
import { BsArrowRightShort } from "react-icons/bs";

// Styles
import './styles.scss'
import Card from '../../components/Card';

const Stretches = () => {

    const [stretches, setStretches] = React.useState([]);

    axios.get(`http://localhost:3001/stretches`)
        .then(response => {
            
        })

    return (
        <div className='Stretches'>
            <div>
                <Wrapper
                    wrapperTitle="Tous nos étirements disponibles"
                    wrapperDescription="Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus."
                />
                <input
                    type="search"
                    name="search"
                    id="searchInput"
                    placeholder='Votre recherche...'
                />
            </div>

            <main>
                <div className='stretches-container'>
                    <div className="hautducorps">
                        <h2>Haut du corps</h2>
                        <ul>
                            {
                                stretches.map((stretch) => (
                                    <Card
                                        title={stretch.title}
                                        description={stretch.description}
                                        img={stretch.main_image}
                                        alt={stretch.title}
                                        hover={stretch.title}
                                        key={stretch.id}
                                    />
                                ))
                            }

                            <BsArrowRightShort
                                className='see-more'
                                title='Voir plus'
                            />
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Stretches;