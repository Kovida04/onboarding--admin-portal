"use client";

import PortalLayout from "@/components/PortalLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, FileText, Users, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OfferSuccessPage() {
  return (
    <PortalLayout userName="Jenny" welcomeMessage="Offer accepted successfully!">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-xl border-2 border-green-200">
            <CardHeader className="text-center space-y-4 pb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="bg-green-100 rounded-full p-6">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </motion.div>
              <div>
                <CardTitle className="text-3xl font-bold text-green-700">
                  Congratulations!
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  You have successfully accepted your offer letter
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Offer Confirmation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Position</p>
                    <p className="font-semibold">Senior Software Developer</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Company</p>
                    <p className="font-semibold">TechCorp Solutions</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Start Date</p>
                    <p className="font-semibold">January 15, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Annual Salary</p>
                    <p className="font-semibold">$120,000</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Next Steps</h3>
                <div className="space-y-3">
                  <Card className="border-l-4 border-l-blue-600">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="bg-blue-100 rounded-full p-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">1. Complete Document Submission</h4>
                        <p className="text-sm text-gray-600">
                          Upload required documents including ID proof, education certificates, and
                          background verification forms
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-600">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="bg-purple-100 rounded-full p-2">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">2. HR Onboarding Session</h4>
                        <p className="text-sm text-gray-600">
                          Attend the virtual onboarding session scheduled for January 10, 2024 at
                          10:00 AM PST
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-600">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="bg-orange-100 rounded-full p-2">
                        <Calendar className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">3. First Day Preparation</h4>
                        <p className="text-sm text-gray-600">
                          Review the welcome packet and prepare for your first day. You'll receive
                          more details via email
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Download className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-900">Download Your Offer Letter</p>
                    <p className="text-sm text-blue-700 mb-3">
                      A copy of your signed offer letter has been sent to your email. You can also
                      download it here.
                    </p>
                    <Button variant="outline" size="sm" className="bg-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/documents" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                    Continue to Document Upload
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Questions about the onboarding process?
                </p>
                <a
                  href="mailto:hr@techcorp.com"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Contact HR Support
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PortalLayout>
  );
}
