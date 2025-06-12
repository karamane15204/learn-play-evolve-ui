
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, Users, BookOpen, BarChart3, FileText, Video, Plus, Eye } from 'lucide-react';

const TeacherDashboard = () => {
  const stats = [
    { title: "Active Courses", value: "12", icon: BookOpen, color: "text-blue-600" },
    { title: "Total Students", value: "348", icon: Users, color: "text-green-600" },
    { title: "Materials Uploaded", value: "87", icon: Upload, color: "text-purple-600" },
    { title: "Average Grade", value: "85%", icon: BarChart3, color: "text-orange-600" }
  ];

  const courses = [
    {
      title: "Advanced Mathematics",
      students: 45,
      progress: 78,
      lastUpdated: "2 days ago",
      status: "Active"
    },
    {
      title: "Computer Science Basics",
      students: 67,
      progress: 92,
      lastUpdated: "1 week ago",
      status: "Active"
    },
    {
      title: "Physics Fundamentals",
      students: 23,
      progress: 45,
      lastUpdated: "3 days ago",
      status: "Draft"
    }
  ];

  const recentActivities = [
    "Sarah completed Quiz 3 in Advanced Mathematics",
    "New student enrolled in Computer Science Basics",
    "Assignment submission from John in Physics",
    "Quiz results available for review",
    "New discussion post in course forum"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your courses.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button className="h-20 flex flex-col">
                    <Plus className="h-6 w-6 mb-2" />
                    Create Course
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Upload className="h-6 w-6 mb-2" />
                    Upload Material
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <FileText className="h-6 w-6 mb-2" />
                    Create Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* My Courses */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>My Courses</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Course
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{course.title}</h3>
                        <Badge variant={course.status === 'Active' ? 'default' : 'secondary'}>
                          {course.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{course.students} students</span>
                        <span>Updated {course.lastUpdated}</span>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex-1 mr-4">
                          <div className="bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">{course.progress}% complete</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="text-sm text-muted-foreground border-l-2 border-blue-200 pl-3">
                      {activity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upload Center */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Center</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Video className="h-4 w-4 mr-2" />
                  Upload Video
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Bulk Upload
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
