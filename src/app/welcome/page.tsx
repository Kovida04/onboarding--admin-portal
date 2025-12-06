"use client";

import PortalLayout from "@/components/PortalLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Users, 
  FileText, 
  CheckCircle2,
  Clock,
  ArrowRight,
  Briefcase,
  Mail,
  Phone
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const documentChecklist = [
  { name: "Government ID Proof", status: "completed" },
  { name: "Education Certificates", status: "completed" },
  { name: "Background Verification Form", status: "completed" },
  { name: "Address Proof", status: "completed" },
  { name: "Previous Employment Proof", status: "pending" },
];

export default function WelcomePage() {
  return (
    <PortalLayout userName="Jenny" welcomeMessage="Welcome to TechCorp Solutions!">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Welcome Banner */}
          <Card className="shadow-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="text-center pb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex justify-center mb-4"
              >
                <div className="bg-blue-600 rounded-full p-6">
                  <Briefcase className="h-12 w-12 text-white" />
                </div>
              </motion.div>
              <CardTitle className="text-3xl font-bold">
                Welcome to Your New Journey!
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                We're excited to have you join our team as a Senior Software Developer
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Joining Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Your Joining Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Start Date</p>
                    <p className="font-semibold text-lg">Monday, January 15, 2024</p>
                    <p className="text-sm text-gray-500 mt-1">9:00 AM - Report to Reception</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Office Location</p>
                    <p className="font-semibold">TechCorp Solutions HQ</p>
                    <p className="text-sm text-gray-700">123 Innovation Drive</p>
                    <p className="text-sm text-gray-700">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                  <Users className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Your Manager</p>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-gray-700">VP of Engineering</p>
                    <div className="flex gap-3 mt-2">
                      <a href="mailto:john.smith@techcorp.com" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        Email
                      </a>
                      <a href="tel:+1234567890" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        Call
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Working Hours</p>
                    <p className="font-semibold">9:00 AM - 6:00 PM (PST)</p>
                    <p className="text-sm text-gray-700">Flexible hours policy available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Document Checklist */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Document Submission Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {documentChecklist.map((doc, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        doc.status === "completed"
                          ? "bg-green-50 border border-green-200"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {doc.status === "completed" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                        )}
                        <span
                          className={
                            doc.status === "completed"
                              ? "font-medium text-gray-900"
                              : "text-gray-600"
                          }
                        >
                          {doc.name}
                        </span>
                      </div>
                      {doc.status === "completed" ? (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          Submitted
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Pending</Badge>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900 font-medium">
                    ✓ All required documents submitted successfully
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    Our HR team will review your documents within 2-3 business days
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>What to Expect on Your First Day</CardTitle>
              <CardDescription>
                Here's what we have planned for your onboarding experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="bg-blue-600 rounded-full p-2 w-fit mb-3">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">9:00 AM - Welcome Session</h4>
                  <p className="text-sm text-gray-700">
                    Meet your team and get a tour of the office facilities
                  </p>
                </div>

                <div className="border rounded-lg p-4 bg-gradient-to-br from-purple-50 to-purple-100">
                  <div className="bg-purple-600 rounded-full p-2 w-fit mb-3">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">11:00 AM - IT Setup</h4>
                  <p className="text-sm text-gray-700">
                    Receive your laptop, credentials, and access cards
                  </p>
                </div>

                <div className="border rounded-lg p-4 bg-gradient-to-br from-green-50 to-green-100">
                  <div className="bg-green-600 rounded-full p-2 w-fit mb-3">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">2:00 PM - HR Orientation</h4>
                  <p className="text-sm text-gray-700">
                    Complete paperwork and learn about benefits and policies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/documents" className="flex-1">
                  <Button variant="outline" className="w-full h-12">
                    View Documents
                  </Button>
                </Link>
                <Link href="/onboarding" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                    Start Onboarding Tasks
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/dashboard" className="flex-1">
                  <Button variant="outline" className="w-full h-12">
                    Go to Dashboard
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
