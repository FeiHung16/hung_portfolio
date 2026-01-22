import React from 'react';
import './Contact.scss';
import { CopyMyMail } from '../../components/utils/copyMyMail/CopyMyMail';
import { useState } from 'react';




export const Contact: React.FC = () => {

    const [status, setStatus] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus('');
        setError('');
        setLoading(true);

        const form = e.currentTarget;
        const nameInput = form.elements.namedItem("name") as HTMLInputElement;
        const emailInput = form.elements.namedItem("email") as HTMLInputElement;
        const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;

        // Validation locale
        if (!nameInput.value.trim()) {
            setError("Veuillez entrer votre nom.");
            setLoading(false);
            return;
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            setError("Veuillez entrer un email valide.");
            setLoading(false);
            return;
        }

        if (!messageInput.value.trim() || messageInput.value.length < 10) {
            setError("Le message doit contenir au moins 10 caractères.");
            setLoading(false);
            return;
        }

        // const formData = {
        //     name: nameInput.value,
        //     email: emailInput.value,
        //     message: messageInput.value,
        // }

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Erreur lors de l'envoi.");
                return;
            };
            setStatus("Votre message a bien été envoyé.");
            form.reset(); // On vide le formulaire à la fin
        } catch (err) {
            console.error(err);
            setError("Impossible de contacter le serveur. Veuillez réessayer plus tard.");
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <div className='contact bg-primary text-softlinen py-3 text-light' id='contact'>
            <h2 className='text-softlinen'>Contactez-moi</h2>
            <CopyMyMail />

            <p>Ou vous pouvez m'envoyer ce formulaire</p>

            {/* Messages utilisateur */}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            {status && (
                <div className="alert alert-success" role="alert">
                    {status}
                </div>
            )}

            <form onSubmit={handleSubmit} className='row  g-5'>
                <div className='widthContactInfo'>
                    <label htmlFor="name" className='form-label'>Nom</label>
                    <input type="text" id='name' name='name' className='form-control' />
                </div>
                <div className='widthContactInfo'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" id='email' name='email' className='form-control' />
                </div>
                <div className='messageBox'>
                    <label htmlFor="message" className='form-label'>Message</label>
                    <textarea name='message' id='message' rows={6} cols={30} className='customMessageArea' />
                </div>
                <div className="col-md-12 justify-content-center d-flex">
                    <button className='btn btn-btnColor' type='submit' disabled={loading}>
                        {loading && (
                            <div
                                className="spinner-border spinner-border-sm"
                                role="status"
                            ></div>
                        )}
                        {loading ? "Envoi..." : "Envoyer"}
                    </button>
                </div>
            </form>
        </div>


    );
};