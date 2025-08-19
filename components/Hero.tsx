import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"


const Hero = () => {

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="space-y-4">
            <div className="text-sm tracking-widest text-muted-foreground uppercase">
              Web Developer
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              <span className="block">MONANG</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                BAHANA
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into meaningful interfaces that inspire and engage.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('projects')} 
              className="group bg-black text-white hover:bg-black/90 px-8 py-6 text-lg rounded-none border-0"
            >
              VIEW WORK
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline"
              className="px-8 py-6 text-lg rounded-none border-black hover:bg-black hover:text-white transition-colors"
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Minimal Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto">
            <div className="text-center border-r border-border/30 pr-8">
              <div className="text-2xl font-bold">2+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Years</div>
            </div>
            <div className="text-center border-r border-border/30 pr-8">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Ideas</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50" />
        <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />
      </section>
  )
}

export default Hero