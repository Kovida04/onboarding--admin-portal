"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Users, 
  CheckCircle, 
  LayoutDashboard,
  Mail,
  ArrowRight,
  Briefcase,
  Calendar,
  Upload
} from "lucide-react";
import { motion } from "framer-motion";

const portalSections = [
  {
    title: "Offer Management",
    description: "Review and accept your job offer",
    icon: <Mail className="h-6 w-6" />,
    href: "/offer/notification",
    color: "from-blue-500 to-blue-600",
    features: ["View offer details", "Digital signature", "Salary breakdown"],
  },
  {
    title: "Document Upload",
    description: "Submit required documents",
    icon: <Upload className="h-6 w-6" />,
    href: "/documents",
    color: "from-purple-500 to-purple-600",
    features: ["Multi-file upload", "Validation", "Progress tracking"],
  },
  {
    title: "Welcome Center",
    description: "Get started with onboarding",
    icon: <Briefcase className="h-6 w-6" />,
    href: "/welcome",
    color: "from-green-500 to-green-600",
    features: ["Joining details", "Document status", "First day info"],
  },
  {
    title: "Onboarding Tasks",
    description: "Complete your onboarding checklist",
    icon: <CheckCircle className="h-6 w-6" />,
    href: "/onboarding",
    color: "from-orange-500 to-orange-600",
    features: ["Task list", "Progress tracking", "Deadlines"],
  },
  {
    title: "Dashboard",
    description: "View analytics and insights",
    icon: <LayoutDashboard className="h-6 w-6" />,
    href: "/dashboard",
    color: "from-indigo-500 to-indigo-600",
    features: ["Analytics charts", "Statistics", "Reports"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Employee Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to your comprehensive onboarding and management portal. 
            Navigate through your journey from offer acceptance to first day.
          </p>
        </motion.div>

        {/* Portal Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portalSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={section.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription className="text-base">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group-hover:bg-blue-600" variant="outline">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Access Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Quick Access</CardTitle>
              <CardDescription className="text-blue-100">
                Jump directly to your most important tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <Link href="/offer/notification">
                  <Button variant="secondary" className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform">
                    <Mail className="h-6 w-6" />
                    <span>View Offer</span>
                  </Button>
                </Link>
                <Link href="/documents">
                  <Button variant="secondary" className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform">
                    <Upload className="h-6 w-6" />
                    <span>Upload Docs</span>
                  </Button>
                </Link>
                <Link href="/onboarding">
                  <Button variant="secondary" className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform">
                    <CheckCircle className="h-6 w-6" />
                    <span>Tasks</span>
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="secondary" className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform">
                    <LayoutDashboard className="h-6 w-6" />
                    <span>Dashboard</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Complete Portal Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Digital Signature</h3>
              <p className="text-gray-600 text-sm">
                Sign your offer letter digitally with our secure e-signature canvas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Multi-Step Forms</h3>
              <p className="text-gray-600 text-sm">
                Navigate through comprehensive forms with progress tracking
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Task Management</h3>
              <p className="text-gray-600 text-sm">
                Track your onboarding progress with deadline reminders
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}