import React from 'react';

export const ExperienceSection: React.FC = () => {
    return (
    <section id="experiencia" className="relative text-foreground dark:text-primary-100 p-10 w-11/12 lg:w-8/12 mx-auto">

      <img
        src="/images/esfera.png"
        alt="Fondo de esfera"
        className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20 z-0"
      />

      <header className="text-center mb-8 relative z-10">
        <h1 className="text-4xl text-foreground dark:text-primary-200 font-bold">Experiencia</h1>
        <p className="text-foreground dark:text-primary-100">Mi experiencia se divide en dos áreas principales...</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 items-start relative z-10">
        <article className="text-center">
          <h2 className="text-foreground dark:text-primary-200 text-2xl font-semibold mb-4">Educación</h2>
          <ul className="space-y-4">
            <li>Actualmente estoy cursando el quinto semestre de Ingeniería de Software, donde he adquirido una sólida formación en programación orientada a objetos, estructuras de datos y metodologías de desarrollo ágil.</li>
            <li>He estudiado e implementado varios patrones de diseño, incluyendo Singleton, Factory Method, y Decorator, lo que me ha permitido desarrollar un enfoque más estructurado y eficiente en mis proyectos de software.</li>
            <li>Durante mi formación, he trabajado con herramientas y tecnologías como Java, Spring Boot, MongoDB y HTML/CSS, lo que me ha proporcionado una base sólida para el desarrollo de aplicaciones web y APIs.</li>
          </ul>
        </article>

        <span className="h-full w-1 bg-primary-300 dark:bg-primary-700 mx-auto hidden lg:inline-block"></span>

        <article className="text-center">
          <h2 className="text-foreground dark:text-primary-200 text-2xl font-semibold mb-4">Mi trabajo</h2>
          <ul className="space-y-4">
            <li>Participé en el desarrollo de una API para una plataforma de venta de cursos en línea, implementando funcionalidades CRUD y control de acceso mediante JWT, utilizando Spring Boot para crear servicios RESTful.</li>
            <li>Trabajé en un proyecto que gestiona información de usuarios, contactos de emergencia y más, donde diseñé una solución efectiva que mejora la organización y gestión de datos.</li>
            <li>He colaborado con compañeros, lo que me ha permitido aplicar mis conocimientos en un entorno práctico y aprender a trabajar en equipo.</li>
          </ul>
        </article>
      </section>
    </section>
  );
};
