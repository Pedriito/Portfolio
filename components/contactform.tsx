import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from 'react-icons/fa';

function ContactForm() {
    const [state, handleSubmit] = useForm("xqaelrar");
    if (state.succeeded) {
        return <p>Merci de m'avoir contacté</p>;
    }
    return (
        <form onSubmit={handleSubmit}
        action={process.env.NEXT_PUBLIC_FORMSPREE_URL}
        method='POST'
        >
            <input
                id="email"
                type="email"
                name="email"
                placeholder='Votre email'
                className="w-full p-2 border border-gray-300 rounded-full"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                rows={6}
                placeholder='Dites moi ce que je peux faire pour vous et je me ferai un plaisir de vous aider'
                className="w-full p-2 border border-gray-300 rounded-xl mb-2 mt-2"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all">
                Envoyer{' '}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:transition-all group-hover:translate-x-1 group-hover:-translate-y-1 focus:scale-[1.15] hover:scale-[1.15] active:scale-105" />{' '}
            </button>
        </form>
    );
}

function App() {
    return (
        <ContactForm />
    );
}

export default App;