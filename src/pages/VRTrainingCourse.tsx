import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  ArrowLeft, 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock, 
  Users, 
  Award, 
  ExternalLink,
  QrCode,
  Star,
  Rocket,
  Target,
  Zap,
  ChevronRight,
  Download,
  Share2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
  type: 'video' | 'interactive' | 'quiz' | 'hands-on';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const courseModules: CourseModule[] = [
  {
    id: 'intro-vr',
    title: 'Introduction to Virtual Reality',
    description: 'Learn the fundamentals of VR technology and its applications in education and training.',
    duration: '45 min',
    type: 'video',
    difficulty: 'beginner',
    completed: true
  },
  {
    id: 'vr-hardware',
    title: 'VR Hardware & Setup',
    description: 'Understanding VR headsets, controllers, and setting up your VR environment.',
    duration: '30 min',
    type: 'interactive',
    difficulty: 'beginner',
    completed: true
  },
  {
    id: 'spatial-design',
    title: 'Spatial Design Principles',
    description: 'Master the art of designing immersive 3D environments and user interfaces.',
    duration: '60 min',
    type: 'hands-on',
    difficulty: 'intermediate',
    completed: false
  },
  {
    id: 'interaction-design',
    title: 'VR Interaction Design',
    description: 'Create intuitive and engaging user interactions in virtual environments.',
    duration: '75 min',
    type: 'hands-on',
    difficulty: 'intermediate',
    completed: false
  },
  {
    id: 'content-creation',
    title: 'VR Content Creation',
    description: 'Build your own VR experiences using industry-standard tools and platforms.',
    duration: '90 min',
    type: 'hands-on',
    difficulty: 'advanced',
    completed: false
  },
  {
    id: 'assessment',
    title: 'Final Assessment',
    description: 'Test your knowledge and earn your VR Training certification.',
    duration: '30 min',
    type: 'quiz',
    difficulty: 'intermediate',
    completed: false
  }
];

const stats = {
  totalStudents: 45,
  completionRate: 78,
  averageRating: 4.8,
  totalDuration: '5.5 hours'
};

const VRTrainingCourse: React.FC = () => {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);
  const courseUrl = 'https://ycccvrlab.github.io/vr-training-course';

  const completedModules = courseModules.filter(m => m.completed).length;
  const progressPercentage = (completedModules / courseModules.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'interactive': return Target;
      case 'quiz': return CheckCircle;
      case 'hands-on': return Rocket;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-600/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-32 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-24 bg-purple-500/5 rounded-full blur-2xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="container mx-auto max-w-7xl">
          <button
            onClick={() => navigate('/projects')}
            className="glass-card px-4 py-2 rounded-lg font-semibold text-foreground hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>VR Training Course</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              The <span className="gradient-primary bg-clip-text text-transparent">Hawk</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Master the art of Virtual Reality with our comprehensive training course. 
              From fundamentals to advanced techniques, become a VR expert through hands-on learning.
            </p>

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="glass-card rounded-2xl p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.totalStudents}</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.totalDuration}</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center">
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.averageRating}</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.completionRate}%</div>
                <div className="text-sm text-muted-foreground">Completion</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition-transform flex items-center gap-3 shadow-lg button-glow"
              >
                <Rocket className="w-6 h-6" />
                <span>Launch Course</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => setShowQR(true)}
                className="glass-card px-6 py-4 rounded-xl font-semibold text-foreground hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <QrCode className="w-5 h-5" />
                QR Code
              </button>

              <button
                onClick={() => navigator.share?.({ 
                  title: 'The Hawk - VR Training Course', 
                  text: 'Master Virtual Reality with this comprehensive training course', 
                  url: courseUrl 
                }) || navigator.clipboard.writeText(courseUrl)}
                className="glass-card px-6 py-4 rounded-xl font-semibold text-foreground hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>

          {/* Progress Section */}
          <div className="mb-16">
            <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Your Progress</h2>
                <div className="text-primary font-semibold">
                  {completedModules}/{courseModules.length} modules completed
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-3 mb-4">
                <div 
                  className="gradient-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              <div className="text-center text-muted-foreground">
                {progressPercentage.toFixed(0)}% Complete
              </div>
            </div>
          </div>

          {/* Course Modules */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Course Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow our structured learning path to master VR technology step by step.
              </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {courseModules.map((module, index) => {
                const Icon = getTypeIcon(module.type);
                return (
                  <div
                    key={module.id}
                    className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                      module.completed ? 'border-green-500/30 bg-green-500/5' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${
                        module.completed ? 'gradient-ar' : 'glass-card'
                      } flex items-center justify-center`}>
                        {module.completed ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          <Icon className="w-6 h-6 text-primary" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {module.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                              {module.difficulty}
                            </span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{module.duration}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {module.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground capitalize">
                              {module.type.replace('-', ' ')}
                            </span>
                          </div>

                          <button
                            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                              module.completed
                                ? 'bg-green-500/20 text-green-400 cursor-default'
                                : 'gradient-primary text-white hover:scale-105 transition-transform'
                            }`}
                            disabled={module.completed}
                          >
                            {module.completed ? 'Completed' : 'Start Module'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Course Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to become a VR expert, all in one comprehensive course.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Play,
                  title: 'Video Tutorials',
                  description: 'High-quality video content covering all aspects of VR development and design.'
                },
                {
                  icon: Target,
                  title: 'Interactive Lessons',
                  description: 'Hands-on exercises and simulations to reinforce your learning.'
                },
                {
                  icon: CheckCircle,
                  title: 'Quizzes & Assessments',
                  description: 'Test your knowledge with comprehensive quizzes and practical assessments.'
                },
                {
                  icon: Award,
                  title: 'Certification',
                  description: 'Earn a recognized certificate upon successful completion of the course.'
                },
                {
                  icon: Users,
                  title: 'Community Support',
                  description: 'Join our community of learners and get help from instructors and peers.'
                },
                {
                  icon: Download,
                  title: 'Resources',
                  description: 'Access downloadable resources, templates, and project files.'
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Start Your VR Journey?
              </h3>
              
              <p className="text-muted-foreground mb-6 text-lg">
                Join hundreds of students who have already transformed their careers with our VR training program.
              </p>
              
              <a
                href={courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-primary px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-lg button-glow"
              >
                <Rocket className="w-6 h-6" />
                Get Started Now
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* QR Modal */}
      {showQR && (
        <div className="fixed inset-0 qr-modal-backdrop z-50 flex items-center justify-center p-4">
          <div className="qr-modal-content rounded-2xl p-8 max-w-md w-full animate-fade-in border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Scan to Access Course
              </h3>
              <p className="text-muted-foreground mb-6">
                The Hawk - VR Training Course
              </p>
              
              <div className="bg-white p-6 rounded-2xl mb-6 inline-block shadow-lg">
                <QRCodeSVG 
                  value={courseUrl} 
                  size={200}
                  level="M"
                  includeMargin={true}
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Scan with your phone or tablet to access the course
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => navigator.clipboard.writeText(courseUrl)}
                    className="flex-1 glass-card px-4 py-3 rounded-xl font-semibold text-foreground hover:bg-white/10 transition-colors"
                  >
                    Copy Link
                  </button>
                  <button
                    onClick={() => setShowQR(false)}
                    className="flex-1 gradient-primary px-4 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VRTrainingCourse;