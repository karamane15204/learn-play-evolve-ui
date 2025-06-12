
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Video, PenTool, Clock, Users, ArrowLeft } from 'lucide-react';

const TraditionalLearning = () => {
  const courses = [
    {
      title: "Mathematics Fundamentals",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      students: 1234,
      level: "Beginner",
      materials: ["Videos", "PDFs", "Assignments"]
    },
    {
      title: "Computer Science Basics",
      instructor: "Prof. Mike Chen",
      duration: "12 weeks",
      students: 890,
      level: "Intermediate",
      materials: ["Videos", "Documents", "Quizzes"]
    },
    {
      title: "Business Management",
      instructor: "Dr. Emily Davis",
      duration: "10 weeks",
      students: 567,
      level: "Advanced",
      materials: ["Videos", "Case Studies", "Presentations"]
    }
  ];

  const features = [
    {
      icon: Video,
      title: "Video Lectures",
      description: "High-quality video content from expert instructors"
    },
    {
      icon: FileText,
      title: "Study Materials",
      description: "PDFs, presentations, and comprehensive documents"
    },
    {
      icon: PenTool,
      title: "Assignments & Quizzes",
      description: "Practice exercises and assessments to test your knowledge"
    },
    {
      icon: BookOpen,
      title: "Course Library",
      description: "Extensive collection of courses across various subjects"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link to="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Traditional Learning</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Master new skills with our comprehensive traditional learning approach featuring videos, documents, and structured assignments.
          </p>
          <Button size="lg" variant="secondary">
            Browse Courses
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for effective traditional learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students in our most popular courses
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <p className="text-muted-foreground">by {course.instructor}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Course Materials:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline">{material}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TraditionalLearning;
