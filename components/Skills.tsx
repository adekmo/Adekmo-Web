import { Circle, Code2, Database, Figma, GitBranch, Hexagon, Sparkles, Square, Triangle, Type, Zap } from "lucide-react";

const Skills = () => {

    const skills = [
        { name: "HTML", level: 95, color: "from-orange-500 via-red-500 to-black", icon: <Code2 className="w-6 h-6" /> },
        { name: "CSS", level: 90, color: "from-blue-500 via-purple-500 to-black", icon: <Circle className="w-6 h-6" /> },
        { name: "JavaScript", level: 88, color: "from-yellow-400 via-orange-500 to-black", icon: <Zap className="w-6 h-6" /> },
        { name: "React", level: 85, color: "from-cyan-400 via-blue-500 to-black", icon: <Triangle className="w-6 h-6" /> },
        { name: "Next.js", level: 80, color: "from-white via-gray-400 to-black", icon: <Square className="w-6 h-6" /> },
        { name: "Tailwind", level: 92, color: "from-teal-400 via-cyan-500 to-black", icon: <Sparkles className="w-6 h-6" /> },
        { name: "MongoDB", level: 75, color: "from-green-400 via-emerald-500 to-black", icon: <Database className="w-6 h-6" /> },
        { name: "NodeJS", level: 70, color: "from-red-500 via-pink-500 to-black", icon: <Hexagon className="w-6 h-6" /> },
        { name: "Typescript", level: 75, color: "from-purple-500 via-pink-500 to-black", icon: <Type className="w-6 h-6" /> },
    ];
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-br from-slate-700/20 via-blue-600/12 to-teal-600/20 relative">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.6'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='53' cy='53' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-600 to-teal-500 opacity-30 blur-sm" />
        <div className="absolute top-0 left-1/3 w-2 h-full bg-gradient-to-b from-slate-600 via-blue-700 to-indigo-800 opacity-25" />
        <div className="absolute top-0 right-1/3 w-2 h-full bg-gradient-to-b from-teal-600 via-cyan-700 to-blue-800 opacity-25" />

        <div className="container mx-auto max-w-6xl relative z-10">
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
  )
}

export default Skills