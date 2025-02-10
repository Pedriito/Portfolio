// pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, message } = req.body;
  
      // Validez les données (optionnel)
      if (!email || !message) {
        return res.status(400).json({ error: 'Tous les champs sont requis.' });
      }
  
      // Envoyez un e-mail (exemple avec Nodemailer)
      try {
        const nodemailer = require('nodemailer');
  
        const transporter = nodemailer.createTransport({
          service: 'Gmail', // Remplacez par votre service e-mail
          auth: {
            user: process.env.EMAIL_USER, // Votre e-mail
            pass: process.env.EMAIL_PASSWORD, // Votre mot de passe
          },
        });
  
        await transporter.sendMail({
          from: email,
          to: 'pelie.romer@gmail.com', // Votre e-mail de réception
          subject: `Nouveau message de ${email}`,
          text: message,
        });
  
        return res.status(200).json({ message: 'Message envoyé avec succès.' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erreur lors de l\'envoi du message.' });
      }
    } else {
      res.status(405).json({ error: 'Méthode non autorisée.' });
    }
  }