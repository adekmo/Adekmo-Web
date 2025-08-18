import React from 'react'
import { Card, CardContent } from './ui/card'

const Testimonials = () => {
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
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-tr from-indigo-600/20 via-blue-600/12 to-slate-600/20 relative">
        {/* Professional Background Elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-blue-600 to-slate-600 opacity-40" />
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-gray-600 opacity-35" />
        <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-slate-600 via-gray-700 to-blue-800 opacity-30" />

        <div className="container mx-auto max-w-6xl relative z-10">
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
  )
}

export default Testimonials