import { Circle, Heart, Sparkles, Square, Triangle, Zap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
        {/* Professional Section Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-teal-600/15 pointer-events-none" />
        <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-teal-500 opacity-40" />
        <div className="absolute bottom-20 right-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-500 opacity-40" />
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-indigo-500 via-blue-600 to-slate-700 opacity-25" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-600 to-cyan-700 opacity-25" />

        <div className="container mx-auto max-w-6xl relative z-10">
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
                  I'm a passionate web developer focused on creating <strong className="text-foreground">building sleek, scalable, and user-friendly</strong> digital experiences.
                </p>
                <p>
                  With expertise in modern frontend technologies and a passion for design, I strive to bridge functionality and aesthetics in every project. My goal is to deliver digital products that not only work flawlessly but also delight users.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Expertise</div>
                  <div className="text-lg font-medium">Fullstack Development</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Focus</div>
                  <div className="text-lg font-medium">Seamless User Experience</div>
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
  )
}

export default About