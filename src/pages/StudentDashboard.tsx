
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trophy, Clock, Target, Play, FileText, Gamepad2 } from 'lucide-react';

const StudentDashboard = () => {
  const stats = [
    { title: "Enrolled Courses", value: "8", icon: BookOpen, color: "text-blue-600" },
    { title: "Completed", value: "3", icon: Trophy, color: "text-green-600" },
    { title: "Study Hours", value: "47", icon: Clock, color: "text-purple-600" },
    { title: "Achievements", value: "12", icon: Target, color: "text-orange-600" }
  ];

  const enrolledCourses = [
    {
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      progress: 78,
      nextLesson: "Calculus Basics",
      type: "traditional"
    },
    {
      title: "CodeQuest Adventure",
      instructor: "Prof. Mike Chen",
      progress: 45,
      nextLesson: "Level 3: Functions",
      type: "game"
    },
    {
      title: "Physics Fundamentals",
      instructor: "Dr. Emily Davis",
      progress: 92,
      nextLesson: "Final Quiz",
      type: "traditional"
    }
  ];

  const achievements = [
    { title: "First Course Complete", icon: "🎓", earned: true },
    { title: "Quiz Master", icon: "📝", earned: true },
    { title: "Game Champion", icon: "🏆", earned: true },
    { title: "Speed Learner", icon: "⚡", earned: false },
    { title: "Perfect Score", icon: "💯", earned: false },
    { title: "Study Streak", icon: "🔥", earned: false }
  ];

  const recentActivities = [
    "Completed Quiz 3 in Advanced Mathematics - Score: 95%",
    "Unlocked new level in CodeQuest Adventure",
    "Submitted assignment for Physics Fundamentals", 
    "Started new course: Data Science Basics",
    "Earned 'Quiz Master' achievement"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground">Continue your learning journey and track your progress.</p>
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
            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledCourses.map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <Badge variant={course.type === 'game' ? 'secondary' : 'default'}>
                          {course.type === 'game' ? (
                            <><Gamepad2 className="h-3 w-3 mr-1" /> Game</>
                          ) : (
                            <><BookOpen className="h-3 w-3 mr-1" /> Traditional</>
                          )}
                        </Badge>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Next: {course.nextLesson}
                        </span>
                        <Button size="sm">
                          {course.type === 'game' ? (
                            <><Play className="h-4 w-4 mr-1" /> Play</>
                          ) : (
                            <><FileText className="h-4 w-4 mr-1" /> Continue</>
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border text-center ${
                        achievement.earned 
                          ? 'bg-yellow-50 border-yellow-200' 
                          : 'bg-gray-100 border-gray-200 opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <h3 className="font-medium text-sm">{achievement.title}</h3>
                      {achievement.earned && (
                        <Badge variant="secondary" className="mt-2">Earned</Badge>
                      )}
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
                    <div key={index} className="text-sm text-muted-foreground border-l-2 border-green-200 pl-3">
                      {activity}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Modes */}
            <Card>
              <CardHeader>
                <CardTitle>Explore Learning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Traditional Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  Play Learning Games
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="h-4 w-4 mr-2" />
                  View All Achievements
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
