
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Trophy, Target, Zap, Star, PlayCircle } from 'lucide-react';

const GameLearning = () => {
  const games = [
    {
      title: "CodeQuest Adventure",
      category: "Programming",
      difficulty: "Beginner",
      players: 2341,
      rating: 4.8,
      description: "Learn programming basics through an epic fantasy adventure"
    },
    {
      title: "Math Kingdom",
      category: "Mathematics",
      difficulty: "Intermediate",
      players: 1876,
      rating: 4.6,
      description: "Solve mathematical puzzles to save the kingdom"
    },
    {
      title: "Science Lab Simulator",
      category: "Science",
      difficulty: "Advanced",
      players: 943,
      rating: 4.9,
      description: "Conduct virtual experiments in a realistic lab environment"
    }
  ];

  const features = [
    {
      icon: Gamepad2,
      title: "Interactive Games",
      description: "Engaging Unity-based games that make learning fun and memorable"
    },
    {
      icon: Target,
      title: "Skill-Based Challenges",
      description: "Progressive challenges that adapt to your learning pace"
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Earn badges and unlock new levels as you progress"
    },
    {
      icon: Zap,
      title: "Real-time Feedback",
      description: "Instant feedback and hints to guide your learning journey"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Game-Based Learning</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Experience the future of education with immersive Unity games, interactive simulations, and visual programming challenges.
          </p>
          <Button size="lg" variant="secondary">
            Start Playing
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Game-Based Learning?</h2>
            <p className="text-xl text-muted-foreground">
              Discover the power of learning through play and interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Learning Games</h2>
            <p className="text-xl text-muted-foreground">
              Join the fun and start learning through gaming
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {game.category}
                  </Badge>
                  <Badge className="absolute top-4 right-4" variant="outline">
                    {game.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{game.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-muted-foreground">{game.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{game.players} players</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unity Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powered by Unity</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our learning games are built with Unity, providing high-quality 3D environments, 
              realistic simulations, and engaging interactive experiences that make complex concepts easy to understand.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-muted-foreground">Interactive Games</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">3D</div>
                <div className="text-muted-foreground">Immersive Environments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">Real-time</div>
                <div className="text-muted-foreground">Learning Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameLearning;
