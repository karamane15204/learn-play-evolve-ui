
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, BookOpen, Gamepad2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-border mb-8">
            <span className="text-sm font-medium text-muted-foreground">🚀 Next Generation Learning Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Learn Smarter with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Dual Modes</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of traditional education and interactive gaming. 
            Choose your learning style and unlock your potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Button>
          </div>

          {/* Learning Mode Preview */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Traditional Learning</h3>
              <p className="text-muted-foreground">
                Access videos, documents, assignments, and quizzes in a structured learning environment.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Gamepad2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Game-Based Learning</h3>
              <p className="text-muted-foreground">
                Engage with interactive games, simulations, and visual programming challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
