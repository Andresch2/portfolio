import emailjs from 'emailjs-com';
import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_g7i3e7u',
        'template_bkcyq4c',
        {
          name,
          email,
          subject,
          message,
        },
        '67nI5ZJx1Ht-sV1TF'
      );
      
      console.log('Correo enviado:', response.status, response.text);
      setIsSent(true);
    } catch (err) {
      console.error('Error al enviar el correo:', err);
    }

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contactos" className="text-center text-light-blue py-12">
      <h1 className="text-3xl font-semibold mb-6 text-foreground dark:text-primary-100">Contactos</h1>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-dark-blue p-10 rounded-lg max-w-4xl mx-auto">
        <section className="flex flex-col justify-center text-left">
          <h2 className="text-lg font-semibold mb-4">Ponte en contacto</h2>
          <p className="text-sm mb-4 leading-6">
            Si deseas ponerte en contacto conmigo, puedes llenar el siguiente formulario o enviarme un correo
            electrónico directamente. ¡Estaré encantado de responderte!
          </p>
          <p className="text-sm mb-4 leading-6">También puedes seguirme en mis redes sociales:</p>
          <p className="flex items-center mb-4">
            <img
              src="/images/email.png"
              alt="Correo"
              className="w-5 h-5 mr-2 "
            />
            andresch311@gmail.com
          </p>
          <aside className="flex space-x-4">
            <a href="https://github.com/Andresch2" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/github.png"
                alt="GitHub"
                className="w-6 h-6  hover:opacity-80 transition-opacity" 
              />
            </a>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-chaves-968213325/" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80 transition-opacity" 
              />
            </a>
          </aside>
        </section>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 text-left">
          <label>
            <span className="sr-only">Nombre</span>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full bg-medium-blue text-light-blue p-2 rounded-md text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            <span className="sr-only">Correo electrónico</span>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full bg-medium-blue text-light-blue p-2 rounded-md text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <span className="sr-only">Asunto</span>
            <input
              type="text"
              placeholder="Asunto"
              className="w-full bg-medium-blue text-light-blue p-2 rounded-md text-sm"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </label>
          <label>
            <span className="sr-only">Mensaje</span>
            <textarea
              placeholder="Mensaje"
              className="w-full bg-medium-blue text-light-blue p-2 rounded-md text-sm h-40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit" className="w-full bg-blue-primary text-light-blue p-2 rounded-md text-sm mt-4">
            Enviar mensaje
          </button>
          {isSent && <p className="text-green-500 mt-4">¡Mensaje enviado con éxito!</p>}
        </form>
      </article>
    </section>
  );
};
