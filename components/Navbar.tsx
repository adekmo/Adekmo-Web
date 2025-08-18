import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
    const {theme, setTheme} = useTheme();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold tracking-tight">
              MB
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors relative group">
                ABOUT
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors relative group">
                SKILLS
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors relative group">
                WORK
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-green-500 to-teal-500 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors relative group">
                CONTACT
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              // onClick={toggleDarkMode}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-full"
            >
              {/* {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} */}
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}

            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar