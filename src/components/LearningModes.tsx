
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Video, 
  ClipboardCheck, 
  Trophy, 
  Zap, 
  Target,
  BookOpen,
  Gamepad2
} from 'lucide-react';

const LearningModes = () => {
  const traditionalFeatures = [
    { icon: Video, label: "Video Lectures", desc: "High-quality educational videos" },
    { icon: FileText, label: "Documents", desc: "PDF, PPT, and study materials" },
    { icon: ClipboardCheck, label: "Assignments", desc: "Practice exercises and homework" },
    { icon: Target, label: "Quizzes", desc: "Test your knowledge" }
  ];

  const gameFeatures = [
    { icon: Trophy, label: "Educational Games", desc: "Learn through interactive gameplay" },
    { icon: Zap, label: "Simulations", desc: "Real-world scenario practice" },
    { icon: Target, label: "Programming Challenges", desc: "Visual coding exercises" },
    { icon: BookOpen, label: "Progress Tracking", desc: "Achievement-based learning" }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Learning Style
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform adapts to how you learn best. Switch between modes anytime to find your perfect learning experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Learning Mode */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center pb-8">
              <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">Traditional Learning</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Structured, comprehensive education with proven methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {traditionalFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-border">
                    <feature.icon className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">{feature.label}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                Explore Traditional Courses
              </Button>
            </CardContent>
          </Card>

          {/* Game-Based Learning Mode */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="text-center pb-8">
              <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Gamepad2 className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">Game-Based Learning</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Interactive, engaging education through gamification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {gameFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-border">
                    <feature.icon className="h-8 w-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">{feature.label}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                Start Gaming & Learning
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LearningModes;
