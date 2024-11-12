import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  handleScroll: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ handleScroll }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    handleScroll(id);
    setIsMenuOpen(false);
  };

  if (!mounted) return null;

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Acerca de mí', id: 'acercademi' },
    { label: 'Mis Proyectos', id: 'misproyectos' },
    { label: 'Experiencia', id: 'experiencia' },
    { label: 'Contactos', id: 'contactos' },
  ];

  return (
    <header className="dark:bg-white bg-[#0D1E32] p-4 shadow-md fixed w-full top-0 z-50" suppressHydrationWarning>
      <nav className="relative">
        <div className="flex justify-between items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <ul className={`
            md:flex md:space-x-6
            ${isMenuOpen ? 'flex' : 'hidden'}
            md:relative absolute top-full left-0 right-0
            dark:bg-white bg-[#0D1E32]
            md:flex-row flex-col
            md:space-y-0 space-y-2
            md:p-0 p-4
            md:shadow-none shadow-md
            md:mt-0 mt-4
            w-full
          `}>
            {navItems.map((item, index) => (
              <li key={index} className="md:w-auto w-full">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="px-4 py-2 rounded bg-primary-500 text-white hover:bg-primary-600 transition-colors w-full"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>
    </header>
  );
};