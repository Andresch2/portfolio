import React from 'react';

export const SkillsSection: React.FC = () => {
    const skills = [
        { src: "/images/html5.png", alt: "HTML5", delay: "0" },
        { src: "/images/github.png", alt: "GitHub", delay: "100" },
        { src: "/images/nextjs.png", alt: "Next.js", delay: "200" },
        { src: "/images/azure.png", alt: "Azure", delay: "300" },
        { src: "/images/mysql.png", alt: "MySQL", delay: "400" },
        { src: "/images/python.png", alt: "Python", delay: "500" },
        { src: "/images/java.png", alt: "Java", delay: "600" },
        { src: "/images/typescript.png", alt: "TypeScript", delay: "700" },
        { src: "/images/taiwild.png", alt: "Tailwindcss", delay: "800" },
        { src: "/images/django.png", alt: "Django", delay: "900" },
        { src: "/images/mongodb.png", alt: "MongoDB", delay: "1000" },
        { src: "/images/spring.png", alt: "Spring", delay: "1100" }
    ];

    return (
        <section className="flex flex-col items-center mb-0 pt-16 pb-16 bg-background">
            <h2 className="text-foreground dark:text-light-blue text-4xl mb-12">My Skills</h2>
            <section className="grid grid-cols-4 gap-8 pb-8">
                {skills.map((skill, index) => (
                    <figure 
                        key={skill.alt}
                        className="transform transition-all hover:scale-110"
                        style={{
                            animation: `float 3s ease-in-out infinite`,
                            animationDelay: `${skill.delay}ms`,
                        }}
                    >
                        <img
                            src={skill.src}
                            alt={skill.alt}
                            className="h-12 transition-transform duration-300 hover:rotate-12" 
                        />
                    </figure>
                ))}
            </section>
        </section>
    );
};