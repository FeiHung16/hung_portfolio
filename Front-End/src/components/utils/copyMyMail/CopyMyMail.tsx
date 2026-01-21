import React, { useState } from 'react';
import { FaClipboard } from "react-icons/fa";
import './CopyMyMail.scss';




export const CopyMyMail: React.FC = () => {

    const [copied, setCopied] = useState(false);
    const myEmail = 'mayerfeihung@gmail.com';



    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(myEmail);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);

        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };

    return (
        <div className='d-flex flex-row g-5 align-items-baseline'>
            <p className='me-2'>{myEmail}</p>
            <button className='btn' aria-label='copyMail' onClick={handleCopy}>
                <i className="text-btnColor"> <FaClipboard /> </i>
            </button>
            {/* Popup visible uniquement après copie */}
            {copied && (
                <div className="popUp">
                    Copié !
                </div>
            )}
        </div>
    )
}