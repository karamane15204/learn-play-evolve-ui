
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  Shield,
  BarChart3,
  Upload,
  Download,
  Calendar
} from 'lucide-react';

const Features = () => {
  const roles = [
    {
      icon: Shield,
      title: "Admin Dashboard",
      description: "Complete platform management with user oversight and content control",
      badge: "Full Control",
      features: ["User Management", "System Analytics", "Content Oversight", "Platform Settings"],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600"
    },
    {
      icon: UserCheck,
      title: "Teacher Portal",
      description: "Create, upload, and manage educational content with student progress tracking",
      badge: "Content Creator",
      features: ["Upload Materials", "Create Quizzes", "Track Progress", "Grading Tools"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: GraduationCap,
      title: "Student Experience",
      description: "Access courses, track learning progress, and engage with interactive content",
      badge: "Learner",
      features: ["Course Access", "Progress Tracking", "Interactive Learning", "Achievement System"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    }
  ];

  const platformFeatures = [
    { icon: BarChart3, title: "Analytics Dashboard", desc: "Real-time learning analytics" },
    { icon: Upload, title: "Easy Content Upload", desc: "Drag & drop course materials" },
    { icon: Download, title: "Offline Learning", desc: "Download content for offline study" },
    { icon: Calendar, title: "Schedule Management", desc: "Organize classes and deadlines" }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* User Roles Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Built for Every User
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform provides specialized experiences for administrators, teachers, and students.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {roles.map((role, index) => (
            <Card key={index} className={`${role.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto shadow-md">
                  <role.icon className={`h-8 w-8 ${role.iconColor}`} />
                </div>
                <div className="mb-2">
                  <Badge variant="secondary" className="mb-3">{role.badge}</Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">{role.description}</p>
                <div className="space-y-3">
                  {role.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <div className={`w-2 h-2 rounded-full ${role.iconColor.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Features */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Powerful Platform Features
          </h3>
          <p className="text-lg text-muted-foreground">
            Everything you need for a complete e-learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
