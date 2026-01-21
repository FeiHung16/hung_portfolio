import React from 'react';
import './Skills.scss';
import { SkillBar } from '../../components/utils/skillbar/SkillBar';
import type { SkillBarProps } from '../../components/utils/skillbar/SkillBar';
import { SiTypescript, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';






export const Skills: React.FC = () => {

    const skills: SkillBarProps[] = [
        { skill: "HTML", progress: 90, icon: FaHtml5 },
        { skill: "CSS et SCSS", progress: 90, icon: FaCss3Alt },
        { skill: "Javascript", progress: 80, icon: IoLogoJavascript },
        { skill: "React", progress: 75, icon: FaReact },
        { skill: "Typescript", progress: 70, icon: SiTypescript },
        { skill: "Redux", progress: 70, icon: SiRedux }
    ]


    return (
        <>
            <section className='skills' id='skills'>
                <div className='d-flex-column margin-0'>
                    <div className='col-sm-12 w-50 m-auto'>
                        <div className='text-softlinen'>
                            <h2 className='h2 text-softlinen text-center'>Compétences</h2>
                            <p className='text-customs'>Pour moi, chaque projet est une opportunité d'apprendre.
                                Je cultive une curiosité active pour les nouvelles technologies
                                et les bonnes pratiques, afin que mes compétences évoluent
                                aussi vite que l'écosystème du web moderne.
                            </p>
                            <hr className='opacity-0' />
                            <p className='text-customs'>Je crois en un code qui a du sens,
                                pour les navigateurs comme pour les développeurs qui le liront ensuite.</p>
                        </div>
                    </div>
                    <div className='barContainer align-middle'>
                        {skills.map((item, index) => (
                            <SkillBar
                                key={index}
                                skill={item.skill}
                                progress={item.progress}
                                icon={item.icon} />
                        ))}
                    </div>
                    <div className='downloadContainer'>
                        <button type='button' className='btn btn-btnColor m-0-auto'
                            onClick={() => window.open('../../../public/document/CV Hung (P)v3.pdf')}>
                            Télécharger mon CV
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}