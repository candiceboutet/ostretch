import React from 'react';
import Wrapper from '../../components/Wrapper';
import { BsArrowRightShort } from "react-icons/bs";

// Styles
import './styles.scss'
import Illustration from '../../assets/img/illustration1.svg';

const Stretches = () => {
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

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <BsArrowRightShort 
                                className='see-more' 
                                title='Voir plus'
                            />
                        </ul>
                    </div>

                    <div className="dos">
                        <h2>Dos</h2>
                        <ul>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <BsArrowRightShort 
                                className='see-more' 
                                title='Voir plus'
                            />
                        </ul>
                    </div>

                    <div className="jambes">
                        <h2>Jambes</h2>
                        <ul>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

                            <a href="/stretch" className="card">
                                <div>
                                    <h3>Nom de l'étirement</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
                                    </p>
                                </div>
                                <img 
                                    src={ Illustration } 
                                    alt="Nom de l'étirement"
                                    title="Nom de l'étirement"
                                />
                            </a>

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