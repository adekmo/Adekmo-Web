import React from 'react'
import { Card, CardContent } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
        {/* Professional Contact Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-teal-600/12 to-emerald-600/20 pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-teal-600 to-emerald-500 opacity-35 blur-sm" />
        <div className="absolute bottom-1/4 right-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-cyan-600 to-blue-500 opacity-35 blur-sm" />
        <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-indigo-500 via-blue-600 to-teal-700 opacity-30" />
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-slate-600 via-gray-700 to-blue-800 opacity-25" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-emerald-600 via-teal-700 to-cyan-800 opacity-25" />

        <div className="container mx-auto max-w-4xl relative z-10">
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
  )
}

export default Contact