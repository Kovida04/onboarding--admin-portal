"use client";

import { useState } from "react";
import PortalLayout from "@/components/PortalLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  FileText, 
  Users, 
  Laptop,
  BookOpen,
  Shield,
  CreditCard,
  Video,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  estimatedTime: string;
  required: boolean;
  completed: boolean;
  dueDate?: string;
}

const initialTasks: OnboardingTask[] = [
  {
    id: "1",
    title: "Complete Employee Information Form",
    description: "Fill out your personal details, emergency contacts, and tax information",
    icon: <FileText className="h-5 w-5" />,
    category: "Documentation",
    estimatedTime: "15 mins",
    required: true,
    completed: false,
    dueDate: "Jan 10, 2024",
  },
  {
    id: "2",
    title: "Set Up Direct Deposit",
    description: "Provide your bank account details for salary payments",
    icon: <CreditCard className="h-5 w-5" />,
    category: "Payroll",
    estimatedTime: "10 mins",
    required: true,
    completed: false,
    dueDate: "Jan 10, 2024",
  },
  {
    id: "3",
    title: "Review Company Policies",
    description: "Read and acknowledge company handbook, code of conduct, and policies",
    icon: <BookOpen className="h-5 w-5" />,
    category: "Compliance",
    estimatedTime: "30 mins",
    required: true,
    completed: false,
    dueDate: "Jan 12, 2024",
  },
  {
    id: "4",
    title: "Complete Security Training",
    description: "Learn about data security, privacy policies, and best practices",
    icon: <Shield className="h-5 w-5" />,
    category: "Security",
    estimatedTime: "45 mins",
    required: true,
    completed: false,
    dueDate: "Jan 15, 2024",
  },
  {
    id: "5",
    title: "IT Equipment Setup",
    description: "Collect your laptop, phone, and other equipment from IT department",
    icon: <Laptop className="h-5 w-5" />,
    category: "IT",
    estimatedTime: "20 mins",
    required: true,
    completed: false,
    dueDate: "Jan 15, 2024",
  },
  {
    id: "6",
    title: "Meet Your Team",
    description: "Schedule 1-on-1 meetings with your team members and manager",
    icon: <Users className="h-5 w-5" />,
    category: "Networking",
    estimatedTime: "2 hours",
    required: true,
    completed: false,
    dueDate: "Jan 17, 2024",
  },
  {
    id: "7",
    title: "Enroll in Benefits Program",
    description: "Choose your health insurance, 401(k), and other benefit options",
    icon: <Shield className="h-5 w-5" />,
    category: "Benefits",
    estimatedTime: "30 mins",
    required: true,
    completed: false,
    dueDate: "Jan 20, 2024",
  },
  {
    id: "8",
    title: "Complete Compliance Training",
    description: "Mandatory training on workplace safety, harassment prevention, etc.",
    icon: <Video className="h-5 w-5" />,
    category: "Compliance",
    estimatedTime: "1 hour",
    required: true,
    completed: false,
    dueDate: "Jan 22, 2024",
  },
  {
    id: "9",
    title: "Join Company Slack Channels",
    description: "Get connected with team channels and company announcements",
    icon: <Users className="h-5 w-5" />,
    category: "Communication",
    estimatedTime: "10 mins",
    required: false,
    completed: false,
  },
  {
    id: "10",
    title: "Schedule Coffee Chats",
    description: "Meet colleagues from other departments to expand your network",
    icon: <Users className="h-5 w-5" />,
    category: "Networking",
    estimatedTime: "1 hour",
    required: false,
    completed: false,
  },
];

export default function OnboardingPage() {
  const [tasks, setTasks] = useState<OnboardingTask[]>(initialTasks);

  const toggleTask = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const requiredTasks = tasks.filter((t) => t.required).length;
  const completedRequired = tasks.filter((t) => t.required && t.completed).length;
  const progress = (completedTasks / totalTasks) * 100;

  const categories = Array.from(new Set(tasks.map((t) => t.category)));

  return (
    <PortalLayout userName="Jenny" welcomeMessage="Your onboarding checklist">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Progress Overview */}
          <Card className="shadow-lg border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Onboarding Progress</CardTitle>
                  <CardDescription>
                    Complete these tasks to ensure a smooth onboarding experience
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {completedTasks}/{totalTasks}
                  </div>
                  <p className="text-sm text-gray-500">Tasks Complete</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900">Required Tasks</span>
                  </div>
                  <p className="text-2xl font-bold text-green-700">
                    {completedRequired}/{requiredTasks}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-900">Estimated Time</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-700">~5 hours</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-2 border-purple-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold text-purple-900">Target Date</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-700">Jan 22</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tasks by Category */}
          {categories.map((category) => {
            const categoryTasks = tasks.filter((t) => t.category === category);
            const categoryCompleted = categoryTasks.filter((t) => t.completed).length;

            return (
              <Card key={category} className="shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{category}</CardTitle>
                    <Badge variant="secondary">
                      {categoryCompleted}/{categoryTasks.length} Complete
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categoryTasks.map((task) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`border rounded-lg p-4 transition-all ${
                        task.completed
                          ? "bg-green-50 border-green-200"
                          : "bg-white border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox
                          id={task.id}
                          checked={task.completed}
                          onCheckedChange={() => toggleTask(task.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <label
                                htmlFor={task.id}
                                className={`font-semibold cursor-pointer ${
                                  task.completed
                                    ? "line-through text-gray-500"
                                    : "text-gray-900"
                                }`}
                              >
                                {task.title}
                              </label>
                              <p className="text-sm text-gray-600 mt-1">
                                {task.description}
                              </p>
                              <div className="flex gap-3 mt-2">
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {task.estimatedTime}
                                </span>
                                {task.dueDate && (
                                  <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    Due: {task.dueDate}
                                  </span>
                                )}
                                {task.required && (
                                  <Badge variant="destructive" className="text-xs">
                                    Required
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="bg-blue-100 rounded-full p-2">
                              {task.icon}
                            </div>
                          </div>
                          {!task.completed && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-3"
                              onClick={() => toggleTask(task.id)}
                            >
                              Start Task
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            );
          })}

          {/* Support Card */}
          <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Need Help?</h3>
                  <p className="text-sm text-gray-600">
                    Our HR team is here to support you throughout your onboarding journey
                  </p>
                </div>
                <Button variant="outline" className="bg-white">
                  Contact HR
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <Link href="/welcome" className="flex-1">
                  <Button variant="outline" className="w-full h-12">
                    Back to Welcome
                  </Button>
                </Link>
                <Link href="/dashboard" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PortalLayout>
  );
}
