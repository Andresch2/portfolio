import React from 'react';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="misproyectos" className="bg-background py-12">
            <h2 className="text-foreground dark:text-light-blue text-4xl text-center mb-12 animate-fade-in-down">
                Mis Proyectos
            </h2>

            <section className="grid grid-cols-1 gap-10 px-8">
                <article className="group bg-primary-100 dark:bg-projects-fund p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 max-w-[900px] mx-auto animate-fade-in-up transition-all duration-500 ease-in-out hover:scale-105 relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-blue-400/0 before:transition-all hover:before:border-blue-400/100 hover:before:shadow-[0_0_15px_rgba(96,165,250,0.5)] before:duration-500">
                    <figure className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="/images/proyecto1.png"
                            alt="Sistema de Gestión de Cursos Online"
                            className="w-[300px] h-[200px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
                        />
                    </figure>
                    <main className="flex flex-col justify-center items-center w-full md:w-2/3">
                        <h3 className="text-foreground dark:text-light-blue text-2xl mb-4 text-center transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-blue-400">
                            Sistema de Gestión de Cursos Online
                        </h3>
                        <p className="text-foreground dark:text-primary-100 mb-6 text-center transition-colors duration-300 group-hover:text-primary-800 dark:group-hover:text-blue-200">
                            Un sistema desarrollado en Spring Boot que permite gestionar cursos, estudiantes y tutores, 
                            con funcionalidades de CRUD. Utilicé patrones de diseño, también MongoDB como base de datos.
                        </p>
                        <a
                            href="https://github.com/Andresch2/Sistema-de-Gesti-n-de-Cursos-Online.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-primary text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:animate-pulse"
                        >
                            Repositorio
                        </a>
                    </main>
                </article>

                <article className="group bg-primary-100 dark:bg-projects-fund p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse gap-6 max-w-[900px] mx-auto animate-fade-in-up transition-all duration-500 ease-in-out hover:scale-105 relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-blue-400/0 before:transition-all hover:before:border-blue-400/100 hover:before:shadow-[0_0_15px_rgba(96,165,250,0.5)] before:duration-500 delay-100">
                    <figure className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="/images/proyecto2.png"
                            alt="Aplicación de Seguimiento de Actividades Físicas"
                            className="w-[300px] h-[200px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
                        />
                    </figure>
                    <main className="flex flex-col justify-center items-center w-full md:w-2/3">
                        <h3 className="text-foreground dark:text-light-blue text-2xl mb-4 text-center transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-blue-400">
                            Aplicación de Seguimiento de Actividades Físicas
                        </h3>
                        <p className="text-foreground dark:text-primary-100 mb-6 text-center transition-colors duration-300 group-hover:text-primary-800 dark:group-hover:text-blue-200">
                            Esta aplicación permite a los usuarios registrar y monitorear sus actividades físicas diarias. 
                            Implementé el patrón Decorator para añadir funcionalidades dinámicamente a las actividades.
                        </p>
                        <a
                            href="https://github.com/Andresch2/Seguimiento-de-Actividades-F-sicas" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-primary text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:animate-pulse"
                        >
                            Repositorio
                        </a>
                    </main>
                </article>

                <article className="group bg-primary-100 dark:bg-projects-fund p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 max-w-[900px] mx-auto animate-fade-in-up transition-all duration-500 ease-in-out hover:scale-105 relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-blue-400/0 before:transition-all hover:before:border-blue-400/100 hover:before:shadow-[0_0_15px_rgba(96,165,250,0.5)] before:duration-500 delay-200">
                    <figure className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="/images/proyecto3.png"
                            alt="Reloj de Manecillas con Tkinter"
                            className="w-[300px] h-[200px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
                        />
                    </figure>
                    <main className="flex flex-col justify-center items-center w-full md:w-2/3">
                        <h3 className="text-foreground dark:text-light-blue text-2xl mb-4 text-center transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-blue-400">
                            Reloj de Manecillas con Tkinter
                        </h3>
                        <p className="text-foreground dark:text-primary-100 mb-6 text-center transition-colors duration-300 group-hover:text-primary-800 dark:group-hover:text-blue-200">
                            Reloj analógico hecho en Python usando Tkinter, con manecillas que se actualizan en tiempo
                            real utilizando listas circulares.
                        </p>
                        <a 
                            href="https://github.com/Andresch2/Reloj-de-Manecillas-con-Tkinter.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-primary text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:animate-pulse"
                        >
                            Repositorio
                        </a>
                    </main>
                </article>
            </section>
        </section>
    );
};