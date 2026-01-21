import React from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { Contact } from '../contact/Contact';
import { Footer } from '../../components/footer/Footer';
import { Profil } from '../profil/Profil';
import { Skills } from '../skills/Skills';
import { mainProjects as MainProjects } from '../projects/Projects';
import './Home.scss';



const Home: React.FC = () => {

    return (
        <>
            
            <main className='backgroundStyle'>
                <Navigation />
                <Profil />
                <Skills />
                <MainProjects />
                <Contact />
                <Footer />
            </main>
            
        </>
    );

};

export default Home;