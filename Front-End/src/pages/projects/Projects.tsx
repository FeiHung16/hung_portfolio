import React from 'react';
import { Carroussel } from '../../components/carroussel/Carroussel';




export const mainProjects: React.FC = () => {

    return (
        <>

            <section>
                <h1 className='text-softlinen text-center' id='project'> Mes travaux</h1>
                <Carroussel />
            </section>

        </>
    );

};

