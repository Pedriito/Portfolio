import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

function ContactForm() {
    const [state, handleSubmit] = useForm("xqaelrar");
    
    // Composant de feedback pour le succès
    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-green-50 border border-green-200 rounded-2xl">
                <FaCheckCircle className="text-4xl text-green-500 mb-4 animate-pulse" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé avec succès !</h3>
                <p className="text-green-700 text-center">Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    // Composant de feedback pour les erreurs
    const hasErrors = state.errors && Object.keys(state.errors).length > 0;
    
    return (
        <div className="w-full max-w-md mx-auto">
            {/* Feedback d'erreur globale */}
            {hasErrors && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <FaExclamationTriangle className="text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="text-red-800 font-medium mb-1">Erreur lors de l'envoi</h4>
                        <p className="text-red-700 text-sm">Veuillez vérifier les champs et réessayer.</p>
                    </div>
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='Votre email'
                    className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm ml-4"
                />
                
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder='Dites moi ce que je peux faire pour vous et je me ferai un plaisir de vous aider'
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none transition-all resize-none"
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm ml-4"
                />
                
                <button 
                    type="submit" 
                    disabled={state.submitting} 
                    className="group flex items-center justify-center gap-2 h-[3.5rem] w-full bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {state.submitting ? (
                        <>
                            <FaSpinner className="animate-spin" />
                            Envoi en cours...
                        </>
                    ) : (
                        <>
                            Envoyer le message{' '}
                            <FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-focus:scale-110" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}

function App() {
    return (
        <ContactForm />
    );
}

export default App;