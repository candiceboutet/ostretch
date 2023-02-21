import React from 'react';
import HumanBody from '../../components/HumanBody/humanbody';
import Navbar from '../../components/Navbar';

// Components
import Wrapper from '../../components/Wrapper';

// Styles
import './home.scss';

const Home = () => {
    return (
        <>
            <header>
                <div className='Home'>
                    <Navbar />
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
            </main>
        </>
    );
};

export default Home;