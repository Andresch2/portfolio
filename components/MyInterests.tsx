import React from 'react';

const MyInterests: React.FC = () => {
    return (
    <section id='misintereses' className="text-center text-foreground dark:text-primary-100 p-8">
        <h1 className="text-3xl font-semibold mb-6 animate-fade-in-down">Mis intereses</h1>
        <ul className="grid gap-8">
        <li className="relative grid grid-cols-[minmax(180px,_1fr)_2fr] gap-6 items-center border-4 border-primary-300 dark:border-primary-700 p-4 rounded-lg text-left max-w-[900px] mx-auto animate-fade-in-up transition-transform duration-500 hover:scale-105">
            <img src="images/correr.jpg" alt="Correr" className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
            <article className="flex flex-col justify-center p-4 text-foreground dark:text-primary-100">
            <strong className="text-md font-semibold">Correr:</strong>
            <p className="text-sm">Disfruto salir a correr, ya que me ayuda a despejar la mente y mantenerme en forma.</p>
            </article>
            <img src="images/manzana.png" alt="Manzana" className="absolute right-[-20px] top-[-20px] w-12 h-12 animate-bounce-slow" />
        </li>

        <li className="relative grid grid-cols-[minmax(180px,_1fr)_2fr] gap-6 items-center border-4 border-primary-300 dark:border-primary-700 p-4 rounded-lg text-left max-w-[900px] mx-auto animate-fade-in-up transition-transform duration-500 hover:scale-105 delay-100">
            <img src="images/myphoto.jpg" alt="Viajar" className="w-[65%] h-auto rounded-lg mx-auto transition-transform duration-300 ease-in-out hover:scale-110" />
            <article className="flex flex-col justify-center p-4 text-foreground dark:text-primary-100">
            <strong className="text-md font-semibold">Viajar:</strong>
            <p className="text-sm">Me encanta explorar nuevos lugares y conocer diferentes culturas. Cada viaje es una oportunidad para aprender algo nuevo.</p>
            </article>
            <img src="images/manzana.png" alt="Manzana" className="absolute right-[-20px] top-[-20px] w-12 h-12 animate-bounce-slow" />
        </li>

        <li className="relative grid grid-cols-[minmax(180px,_1fr)_2fr] gap-6 items-center border-4 border-primary-300 dark:border-primary-700 p-4 rounded-lg text-left max-w-[900px] mx-auto animate-fade-in-up transition-transform duration-500 hover:scale-105 delay-200">
            <img src="images/fotografia.jpg" alt="Fotografía" className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
            <article className="flex flex-col justify-center p-4 text-foreground dark:text-primary-100">
            <strong className="text-md font-semibold">Fotografía:</strong>
            <p className="text-sm">Me apasiona capturar momentos especiales y paisajes y todo aquello que encuentre llamativo.</p>
            </article>
            <img src="images/manzana.png" alt="Manzana" className="absolute right-[-20px] top-[-20px] w-12 h-12 animate-bounce-slow" />
        </li>
        </ul>
    </section>
    );
};

export default MyInterests;
