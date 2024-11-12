import React from 'react';

export const SkillsSection: React.FC = () => {
    return (
    <section className="flex flex-col items-center mb-0 pt-16 pb-16 bg-background">
        <h2 className="text-foreground dark:text-light-blue text-4xl mb-12">My Skills</h2>
        <section className="grid grid-cols-4 gap-8 pb-8">
            <figure><img src="/images/html5.png" alt="HTML5" className="h-12" /></figure>
            <figure><img src="/images/github.png" alt="GitHub" className="h-12" /></figure>
            <figure><img src="/images/nextjs.png" alt="Next.js" className="h-12" /></figure>
            <figure><img src="/images/azure.png" alt="Azure" className="h-12" /></figure>
            <figure><img src="/images/mysql.png" alt="MySQL" className="h-12" /></figure>
            <figure><img src="/images/python.png" alt="Python" className="h-12" /></figure>
            <figure><img src="/images/java.png" alt="Java" className="h-12" /></figure>
            <figure><img src="/images/typescript.png" alt="TypeScript" className="h-12" /></figure>
            <figure><img src="/images/taiwild.png" alt="Tailwindcss" className="h-12" /></figure>
            <figure><img src="/images/django.png" alt="Django" className="h-12" /></figure>
            <figure><img src="/images/mongodb.png" alt="MongoDB" className="h-12" /></figure>
            <figure><img src="/images/spring.png" alt="Spring" className="h-12" /></figure>
        </section>
    </section>
    );
};
