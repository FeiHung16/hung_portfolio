import React from 'react';
import './SkillBar.scss'
import type { IconType } from 'react-icons';



export type SkillBarProps = {
    skill: string;
    progress: number;  // 0 à 100
    icon: IconType;
};

export const SkillBar: React.FC<SkillBarProps> = ({ skill, progress, icon: Icon }) => {

    const radius = 48;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="skill">
            <div className="circle-wrapper">
                <svg width="120" height="120">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>

                    <circle
                        className="circle-bg"
                        cx="60"
                        cy="60"
                        r={radius}
                    />

                    <circle
                        className="circle-progress"
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                </svg>

                <div className="circle-center">
                    <Icon className="skill-icon" />
                    <span className="skill-percent text-softlinen">{progress}%</span>
                </div>
            </div>

            <p className="skill-label text-softlinen">{skill}</p>
        </div>
    );
};