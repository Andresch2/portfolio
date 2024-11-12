import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="acercademi"
      className="flex flex-col md:flex-row justify-center items-center px-4 md:px-12 pt-24 animate-fade-in-up"
    >
      <section className="w-full md:w-[50%] max-w-[600px] mb-8 md:mb-0 md:mr-8 order-1 md:order-2 md:ml-16">
        <h2 className="text-foreground dark:text-primary-100 text-4xl mb-8 text-center animate-slide-in-left">
          Acerca De Mi
        </h2>
        <article className="text-foreground dark:text-primary-50 animate-slide-in-left delay-100">
          <p className="mb-4">
            Hola, soy Nelson, un estudiante de Ingeniería de Software con interés en el desarrollo
            de aplicaciones y tecnología. Me gusta resolver problemas con soluciones creativas y
            eficientes. A lo largo de mi formación, he trabajado en varios proyectos, desde APIs
            hasta interfaces visuales, utilizando lenguajes como Java, Python y TypeScript, entre
            otros.
          </p>
          <p>
            Disfruto aprender nuevas tecnologías, colaborar en equipo y enfrentar desafíos que me
            permitan crecer tanto personal como profesionalmente. Estoy enfocado en mejorar mis
            habilidades de diseño de software y crear productos que generen un impacto positivo.
          </p>
        </article>
      </section>

      <figure className="order-2 md:order-1 animate-slide-in-right delay-200">
        <img
          src="/images/myphoto.jpg"
          alt="Foto Personal"
          className="w-[280px] md:w-[340px] h-[340px] md:h-[400px] rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        />
      </figure>
    </section>
  );
};