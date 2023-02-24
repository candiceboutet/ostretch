import React from 'react';

// Components
import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';
import HumanBody from '../../components/HumanBody/HumanBody';

// Styles
import './home.scss';
import Illustration from '../../assets/img/illustration1.svg';

const Home = () => {
    return (
        <>
            <header>
                <div className='Home'>
                    <Wrapper
                        wrapperTitle="Une nouvelle approche des étirements"
                        wrapperDescription="Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus."
                    />
                    <a className='discover-button' href="/">
                        Découvrir
                    </a>
                </div>
            </header>

            <main>
                <HumanBody />
                <Card 
                    title="Etirement trapèze"
                    description="Lorem ipsum dolor sit amet consectetur. Enim pharetra mollis sed mauris. Varius dui nulla adipiscing elementum risus."
                    img={Illustration}
                    alt="Etirement trapèze"
                    hover="Etirement trapèze"
                    key={1}
                />
            </main>
        </>
    );
};

export default Home;