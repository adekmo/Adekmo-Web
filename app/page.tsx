'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronUp, 
  Moon, 
  Sun,
  Code2,
  Database,
  Globe,
  Figma,
  GitBranch,
  Sparkles,
  Zap,
  Heart,
  Star,
  ArrowRight,
  Circle,
  Triangle,
  Square
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Index() {
  // const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.documentElement.classList.toggle('dark');
  // };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: "HTML", level: 95, color: "from-orange-500 via-red-500 to-black", icon: <Code2 className="w-6 h-6" /> },
    { name: "CSS", level: 90, color: "from-blue-500 via-purple-500 to-black", icon: <Circle className="w-6 h-6" /> },
    { name: "JavaScript", level: 88, color: "from-yellow-400 via-orange-500 to-black", icon: <Zap className="w-6 h-6" /> },
    { name: "React", level: 85, color: "from-cyan-400 via-blue-500 to-black", icon: <Triangle className="w-6 h-6" /> },
    { name: "Next.js", level: 80, color: "from-white via-gray-400 to-black", icon: <Square className="w-6 h-6" /> },
    { name: "Tailwind", level: 92, color: "from-teal-400 via-cyan-500 to-black", icon: <Sparkles className="w-6 h-6" /> },
    { name: "MongoDB", level: 75, color: "from-green-400 via-emerald-500 to-black", icon: <Database className="w-6 h-6" /> },
    { name: "Git", level: 85, color: "from-red-500 via-pink-500 to-black", icon: <GitBranch className="w-6 h-6" /> },
    { name: "Figma", level: 70, color: "from-purple-500 via-pink-500 to-black", icon: <Figma className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Minimalist shopping experience dengan micro-interactions dan performansi optimal.",
      tech: ["Next.js", "TypeScript", "Stripe"],
      gradient: "from-purple-600 via-pink-500 to-black",
      accent: "from-purple-400 to-pink-400",
      demo: "#",
      github: "#"
    },
    {
      title: "Hotel Booking App",
      description: "Interface yang clean dengan search yang powerful dan booking yang seamless.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-blue-600 via-cyan-500 to-black",
      accent: "from-blue-400 to-cyan-400",
      demo: "#",
      github: "#"
    },
    {
      title: "Travel Stories",
      description: "Platform storytelling dengan design yang immersive dan community yang aktif.",
      tech: ["Next.js", "Prisma", "Tailwind"],
      gradient: "from-green-600 via-teal-500 to-black",
      accent: "from-green-400 to-teal-400",
      demo: "#",
      github: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization yang elegant dengan real-time updates dan insights.",
      tech: ["React", "D3.js", "WebSocket"],
      gradient: "from-orange-600 via-red-500 to-black",
      accent: "from-orange-400 to-red-400",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Manager Pro",
      description: "Productivity tool dengan AI integration dan smart scheduling.",
      tech: ["Next.js", "OpenAI", "PostgreSQL"],
      gradient: "from-indigo-600 via-purple-500 to-black",
      accent: "from-indigo-400 to-purple-400",
      demo: "#",
      github: "#"
    },
    {
      title: "Weather Intelligence",
      description: "Weather app dengan predictive analytics dan beautiful visualizations.",
      tech: ["React", "Python", "TensorFlow"],
      gradient: "from-cyan-600 via-blue-500 to-black",
      accent: "from-cyan-400 to-blue-400",
      demo: "#",
      github: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "Monang delivers pixel-perfect implementations with exceptional attention to detail.",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      name: "Ahmad Rizki",
      role: "Tech Lead",
      content: "Clean code, modern practices, and excellent communication throughout the project.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Lisa Chen",
      role: "Design Director",
      content: "Perfect translation from design to code with beautiful micro-interactions.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Cursor Follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Geometric Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-gradient-to-r from-green-400 to-teal-500 rotate-45 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-20 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute bottom-1/3 left-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30" />
      </div>

      {/* Minimal Navbar */}
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

      {/* Hero Section */}
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
              Crafting digital experiences with minimal aesthetics and maximum impact
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

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm tracking-widest text-muted-foreground uppercase">
                  About Me
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                  Creating Digital
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate web developer focused on creating <strong className="text-foreground">minimal, functional, and beautiful</strong> digital experiences.
                </p>
                <p>
                  Specialized in modern frontend technologies with a keen eye for design and user experience. Every project is an opportunity to push boundaries and create something extraordinary.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Expertise</div>
                  <div className="text-lg font-medium">Frontend Development</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Focus</div>
                  <div className="text-lg font-medium">User Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main Creative Workspace */}
              <div className="aspect-square bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-lg relative overflow-hidden p-1">
                <div className="h-full bg-background rounded-lg p-6 relative overflow-hidden">
                  {/* Desktop/Workspace Scene */}
                  <div className="h-full flex flex-col justify-between">
                    {/* Monitor */}
                    <div className="bg-black rounded-lg p-2 flex-1 mb-4 relative">
                      <div className="bg-green-400 rounded-sm h-full p-2 relative overflow-hidden">
                        {/* Code Lines */}
                        <div className="space-y-1">
                          <div className="h-1 bg-black/20 rounded w-3/4"></div>
                          <div className="h-1 bg-black/20 rounded w-1/2"></div>
                          <div className="h-1 bg-black/20 rounded w-5/6"></div>
                          <div className="h-1 bg-black/20 rounded w-2/3"></div>
                        </div>
                        {/* Cursor */}
                        <div className="absolute top-2 right-2 w-1 h-3 bg-black animate-pulse"></div>
                      </div>
                      {/* Monitor Stand */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-muted-foreground rounded"></div>
                    </div>

                    {/* Desk Items */}
                    <div className="flex justify-between items-end h-8">
                      {/* Coffee Cup */}
                      <div className="w-6 h-6 bg-gradient-to-t from-amber-600 to-amber-400 rounded-full relative">
                        <div className="absolute top-1 right-0 w-2 h-3 border border-amber-600 rounded-r-lg"></div>
                        {/* Steam */}
                        <div className="absolute -top-2 left-2 space-y-1">
                          <div className="w-px h-1 bg-muted-foreground/50 animate-pulse"></div>
                          <div className="w-px h-1 bg-muted-foreground/30 animate-pulse delay-300"></div>
                        </div>
                      </div>

                      {/* Plant */}
                      <div className="w-4 h-6 relative">
                        <div className="absolute bottom-0 w-4 h-2 bg-orange-600 rounded-b"></div>
                        <div className="absolute bottom-1 left-1 w-2 h-4 bg-green-500 rounded-t-full"></div>
                        <div className="absolute bottom-2 right-0 w-1 h-3 bg-green-400 rounded-t-full"></div>
                      </div>

                      {/* Books Stack */}
                      <div className="space-y-px">
                        <div className="w-6 h-1 bg-blue-500 rounded-sm"></div>
                        <div className="w-5 h-1 bg-red-500 rounded-sm"></div>
                        <div className="w-6 h-1 bg-purple-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute top-2 right-2 space-y-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded rotate-45 animate-pulse"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-pulse delay-500"></div>
                  </div>

                  {/* Creative Elements */}
                  <div className="absolute bottom-2 left-2 flex space-x-1">
                    <Triangle className="w-3 h-3 text-purple-500 animate-pulse" />
                    <Circle className="w-3 h-3 text-pink-500 animate-pulse delay-300" />
                    <Square className="w-3 h-3 text-orange-500 animate-pulse delay-700" />
                  </div>
                </div>
              </div>

              {/* Floating Meaningful Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rotate-45 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white rotate-45" />
              </div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white animate-pulse" />
              </div>

              {/* Connecting Lines */}
              <div className="absolute top-1/4 right-0 w-20 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
              <div className="absolute bottom-1/3 left-0 w-16 h-px bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              Technical Skills
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-green-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${skill.color.replace('to-black', 'to-gray-800')} flex items-center justify-center text-white`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-lg">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              Selected Work
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group border-0 bg-card/50 backdrop-blur-sm overflow-hidden hover:scale-105 transition-all duration-500">
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${project.accent} text-black border-0 font-medium`}>
                      #{String(index + 1).padStart(2, '0')}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex gap-2">
                      <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30">
                        <Github className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-muted-foreground/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              Client Feedback
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-teal-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm p-8 text-center">
                <CardContent className="p-0 space-y-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <blockquote className="text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="space-y-1">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <div className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Let's Create Something
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life with clean, modern design and flawless execution.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 bg-card/50 backdrop-blur-sm p-8">
              <CardContent className="p-0 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                      Name
                    </label>
                    <Input placeholder="Your name" className="border-0 bg-muted/50 rounded-none px-0 py-4 border-b border-border focus-visible:ring-0 focus-visible:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" className="border-0 bg-muted/50 rounded-none px-0 py-4 border-b border-border focus-visible:ring-0 focus-visible:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project, timeline, and requirements..." 
                    className="border-0 bg-muted/50 rounded-none px-0 py-4 border-b border-border focus-visible:ring-0 focus-visible:border-primary min-h-32 resize-none" 
                  />
                </div>
                
                <Button className="w-full bg-black text-white hover:bg-black/90 py-6 rounded-none border-0 text-lg font-medium">
                  SEND MESSAGE
                </Button>
                
                <div className="flex justify-center space-x-6 pt-8">
                  <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-muted">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-muted">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-muted">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-16 px-6 border-t border-border/30">
        <div className="container mx-auto text-center">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">MB</div>
            <p className="text-sm text-muted-foreground">
              © 2024 Monang Bahana. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-black text-white hover:bg-black/90 shadow-2xl z-40"
          size="icon"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
