import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const Projects = () => {

    const projects = [
        {
        title: "Travel Marketplace (Travoo)",
        description: "Travoo is a modern travel marketplace platform that connects customers with trusted travel agents, making it easy to book travel packages quickly, securely, and transparently.",
        tech: ["Next.js", "TypeScript", "MongoDb"],
        gradient: "from-purple-600 via-pink-500 to-black",
        accent: "from-purple-400 to-pink-400",
        demo: "https://travo-lake.vercel.app/packages",
        github: "https://github.com/adekmo/travo"
        },
        {
        title: "KamuTube",
        description: "Kamutube is Youtube Clone where users can upload, watch, and engage with content seamlessly—just like YouTube, but built with our own unique touch",
        tech: ["React", "Material UI", "RapidAPI"],
        gradient: "from-blue-600 via-cyan-500 to-black",
        accent: "from-blue-400 to-cyan-400",
        demo: "https://kamutube.netlify.app/",
        github: "https://github.com/adekmo/KamuTube"
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
  return (
    <section id="projects" className="py-32 px-6 relative">
        {/* Professional Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/20 via-teal-600/12 to-cyan-600/20 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-emerald-500 via-teal-600 to-cyan-700 opacity-35" />
        <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-slate-600 via-gray-700 to-blue-800 opacity-35" />
        <div className="absolute top-1/3 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 opacity-30 blur-sm" />
        <div className="absolute bottom-1/3 right-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 opacity-30 blur-sm" />

        <div className="container mx-auto max-w-7xl relative z-10">
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
                      <Link href={project.demo}>
                          <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </Button>
                      </Link>
                      <Link href={project.github}>
                        <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30">
                          <Github className="w-4 h-4 text-white" />
                        </Button>
                      </Link>
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
  )
}

export default Projects