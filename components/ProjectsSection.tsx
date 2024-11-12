import React from 'react';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="misproyectos" className="bg-background py-12">
            <h2 className="text-foreground dark:text-light-blue text-4xl text-center mb-12 animate-fade-in-down">
                Mis Proyectos
            </h2>

            <section className="grid grid-cols-1 gap-10 px-8">
                <article className="bg-primary-100 dark:bg-projects-fund p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 max-w-[900px] mx-auto animate-fade-in-up transition duration-500 ease-in-out hover:scale-105">
                    <figure className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="/images/proyecto1.png"
                            alt="Sistema de Gestión de Cursos Online"
                            className="w-[300px] h-[200px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                        />
                    </figure>
                    <main className="flex flex-col justify-center items-center w-full md:w-2/3">
                        <h3 className="text-foreground dark:text-light-blue text-2xl mb-4 text-center">
                            Sistema de Gestión de Cursos Online
                        </h3>
                        <p className="text-foreground dark:text-primary-100 mb-6 text-center">
                            Un sistema desarrollado en Spring Boot que permite gestionar cursos, estudiantes y tutores, 
                            con funcionalidades de CRUD. Utilicé patrones de diseño, también MongoDB como base de datos.
                        </p>
                        <a
                            href="..."
                            className="bg-blue-primary text-white py-3 px-6 rounded-lg text-lg hover:bg-primary-600 transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            Repositorio
                        </a>
                    </main>
                </article>

                <article className="bg-primary-100 dark:bg-projects-fund p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse gap-6 max-w-[900px] mx-auto animate-fade-in-up transition duration-500 ease-in-out hover:scale-105 delay-100">
                    <figure className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="/images/proyecto2.png"
                            alt="Aplicación de Seguimiento de Actividades Físicas"
                            className="w-[300px] h-[200px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                        />
                    </figure>
                    <main className="flex flex-col justify-center items-center w-full md:w-2/3">
                        <h3 className="text-foreground dark:text-light-blue text-2xl mb-4 text-center">
                            Aplicación de Seguimiento de Actividades Físicas
                        </h3>
                        <p className="text-foreground dark:text-primary-100 mb-6 text-center">
                            Esta aplicación permite a los usuarios registrar y monitorear sus actividades físicas diarias. 
                            Implementé el patrón Decorator para añadir funcionalidades dinámicamente a las actividades.
                        </p>
                        <a
                            href="https://github.com/Andresch2/Seguimiento-de-Actividades-F-sicas" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-primary text-white py-3 px-6 rounded-lg text-lg hover:bg-primary-600 transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            Repositorio
                        </a>
                    </main>
                </article>

                <article className="bg-primary-100 dark:bg-projects-fund p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 max-w-[900px] mx-auto animate-fade-in-up transition duration-500 ease-in-out hover:scale-105 delay-200">
                    <figure className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="/images/proyecto3.png"
                            alt="Reloj de Manecillas con Tkinter"
                            className="w-[300px] h-[200px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                        />
                    </figure>
                    <main className="flex flex-col justify-center items-center w-full md:w-2/3">
                        <h3 className="text-foreground dark:text-light-blue text-2xl mb-4 text-center">
                            Reloj de Manecillas con Tkinter
                        </h3>
                        <p className="text-foreground dark:text-primary-100 mb-6 text-center">
                            Reloj analógico hecho en Python usando Tkinter, con manecillas que se actualizan en tiempo
                            real utilizando listas circulares.
                        </p>
                        <a 
                            href="https://github.com/Andresch2/Reloj-de-Manecillas-con-Tkinter.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-primary text-white py-3 px-6 rounded-lg text-lg hover:bg-primary-600 transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            Repositorio
                        </a>
                    </main>
                </article>
            </section>
        </section>
    );
};