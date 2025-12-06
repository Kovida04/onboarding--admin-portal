"use client";

import PortalLayout from "@/components/PortalLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Building2, DollarSign, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OfferNotificationPage() {
  return (
    <PortalLayout userName="Jenny" welcomeMessage="You have a new offer waiting!">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg border-2 border-blue-200">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="flex justify-center">
                <div className="bg-blue-100 rounded-full p-4">
                  <Mail className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <div>
                <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  New Offer Received
                </Badge>
                <CardTitle className="text-3xl font-bold">
                  Congratulations Jenny!
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  You've received an offer letter from your dream company
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 rounded-full p-2">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Company</p>
                        <p className="font-semibold text-lg">TechCorp Solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-600 rounded-full p-2">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Position</p>
                        <p className="font-semibold text-lg">Senior Developer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-600 rounded-full p-2">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Start Date</p>
                        <p className="font-semibold text-lg">January 15, 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-600 rounded-full p-2">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Annual Salary</p>
                        <p className="font-semibold text-lg">$120,000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900">Action Required</p>
                    <p className="text-sm text-amber-700">
                      Please review and accept this offer by{" "}
                      <span className="font-semibold">December 31, 2023</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/offer/details" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg">
                    Review Offer Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <p className="text-center text-sm text-gray-500">
                Questions? Contact HR at{" "}
                <a href="mailto:hr@techcorp.com" className="text-blue-600 hover:underline">
                  hr@techcorp.com
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PortalLayout>
  );
}
