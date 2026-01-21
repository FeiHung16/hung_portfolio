import React from 'react';
import './Profil.scss';
import { RiContactsBook3Fill } from "react-icons/ri";




export const Profil: React.FC = () => {

    return (
        <section className="profil d-flex flex-column align-center" id='profil'>
            <h2 className='text-softlinen h1 mt-4 text-center'>Bienvenue sur mon espace en ligne !</h2>
            <div>
                <p className='text-softlinen text-customs'>Je m'appelle FeiHung, j'ai 26 ans et je transforme ma passion 
                    pour le code en interface web tangibles et fonctionnelles.
                </p>
                <hr className='opacity-0' />
                <p className='text-softlinen text-customs'>Ma formation intensive chez OpenClassrooms m'a doté 
                    d'un socle solide en développement front-end. Aujourd'hui, je me spécialise dans 
                    l'intégration fidèle de maquettes, en veillant à ce que chaque site soit 
                    non seulement esthétique, mais aussi rapide, adaptable à tous les écrans et 
                    accessible au plus grand nombre.</p>
                <hr className='opacity-0' />
                <p className='text-softlinen text-customs'>Je suis ouvert à toute opportunité qui me permettrait 
                    d'apporter ma rigueur et mon enthousiasme à vos projets.
                </p>
                {/* Logo conatct */}
                <a href="#contact" aria-label='contactLink' className='d-flex justify-content-center profilContact'>
                    <i className=" h1 text-softlinen "><RiContactsBook3Fill/></i></a>
            </div>
        </section>
    )
};