import React from 'react';

interface HomeSectionProps {
  handleScroll: (id: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ handleScroll }) => {
  return (
    <section
      id="inicio"
      className="bg-primary-100 dark:bg-primary-950 text-foreground dark:text-white flex-grow flex flex-col pt-16 md:pt-20 relative"
    >
      <article
        className="absolute inset-0 w-full h-full opacity-100 dark:opacity-100"
        style={{
          backgroundImage: "url('/images/estrellas.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      <main className="flex-grow flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-8 pt-12 md:pt-24 mt-4 md:mt-12 relative z-10">
        <header className="w-full md:w-1/2 text-foreground dark:text-primary-200 text-4xl md:text-5xl font-bold text-center md:text-left mb-6 md:mb-0 md:mt-8">
          ¡Hola, soy<br />Nelson Andres<br />Chaves!
        </header>

        <section className="w-full md:w-1/3">
          <p className="text-foreground dark:text-primary-200 text-lg md:text-xl mb-6 text-center md:text-left">
            Bienvenidos a mi portafolio personal. Soy Nelson Chaves. Me apasiona
            desarrollar soluciones tecnológicas que hacen la vida más fácil y eficiente.
            Aquí podrás conocer más sobre mí y mis proyectos. ¡Explora y no dudes en
            contactarme!
          </p>

          <address className="flex justify-center md:justify-start items-center mb-6">
            <a 
              href="mailto:andresch311@gmail.com" 
              className="flex items-center text-primary-600 dark:text-primary-200 hover:text-primary-800 dark:hover:text-primary-100 transition-colors mr-4 text-sm md:text-base"
            >
              <img 
                src="/images/email.png" 
                alt="Email" 
                className="w-5 md:w-6 h-5 md:h-6 mr-2 invert dark:invert-0" 
              />
              andresch311@gmail.com
            </a>
            <a 
              href="https://github.com/Andresch2?tab=overview&from=2024-10-01&to=2024-10-31" 
              target="_blank" 
              className="flex items-center text-primary-200 hover:text-primary-100 transition-colors mr-4"
            >
              <img 
                src="/images/github.png" 
                alt="GitHub" 
                className="w-5 md:w-6 h-5 md:h-6" 
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/andr%C3%A9s-chaves-968213325/" 
              target="_blank" 
              className="flex items-center text-primary-200 hover:text-primary-100 transition-colors"
            >
              <img 
                src="/images/linkedin.png" 
                alt="LinkedIn" 
                className="w-5 md:w-6 h-5 md:h-6 " 
              />
            </a>
          </address>

          <footer className="flex justify-center md:justify-start">
            <button
              onClick={() => handleScroll('misintereses')}
              className="px-6 py-3 rounded bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              Mis intereses
            </button>
          </footer>
        </section>
      </main>

      <figure className="flex justify-center mb-4 md:mb-8 relative z-10 mt-8 md:mt-0">
        <img
          src="/images/eclispe.png"
          alt="Eclipse Background"
          className="absolute w-[300px] md:w-[800px] h-[280px] md:h-[490px]"
        />
        <img
          src="/images/avatar.png"
          alt="Avatar"
          className="relative z-10 w-[200px] md:w-[350px] h-[250px] md:h-[400px]"
        />
      </figure>
    </section>
  );
};
