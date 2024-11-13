
const Footer = () => {
    return (
      <footer className="fixed bottom-4 right-4 z-50">
        <div className="flex gap-3 items-center bg-primary-100 dark:bg-primary-950 p-3 rounded-lg shadow-lg">
          <a 
            href="mailto:andresch311@gmail.com"
            className="transition-transform hover:scale-110 invert dark:invert-0"
            title="Email"
          >
            <img src="/images/email.png" alt="Email" className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Andresch2?tab=overview&from=2024-10-01&to=2024-10-31"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            title="GitHub"
          >
            <img src="/images/github.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/andr%C3%A9s-chaves-968213325/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            title="LinkedIn"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;