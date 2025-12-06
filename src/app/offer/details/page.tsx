"use client";

import { useState } from "react";
import PortalLayout from "@/components/PortalLayout";
import StepProgress from "@/components/StepProgress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Car, FileText, CreditCard, Heart, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  { id: "1", label: "Customer Details", icon: <User className="h-5 w-5" /> },
  { id: "2", label: "Vehicle information", icon: <Car className="h-5 w-5" /> },
  { id: "3", label: "Upload Documents", icon: <FileText className="h-5 w-5" /> },
  { id: "4", label: "Payment Details", icon: <CreditCard className="h-5 w-5" /> },
  { id: "5", label: "Thank you", icon: <Heart className="h-5 w-5" /> },
];

export default function OfferDetailsPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [salaryExpanded, setSalaryExpanded] = useState(false);

  const salaryBreakdown = [
    { label: "Base Salary", amount: 90000 },
    { label: "Performance Bonus", amount: 15000 },
    { label: "Stock Options", amount: 10000 },
    { label: "Health Insurance", amount: 5000 },
  ];

  return (
    <PortalLayout userName="Jenny" welcomeMessage="Review your offer details">
      <div className="max-w-6xl mx-auto">
        <StepProgress steps={steps} currentStep={0} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Offer Letter Details</CardTitle>
                  <CardDescription>
                    Review all details carefully before accepting
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  Valid until Dec 31, 2023
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Position Details */}
              <div className="border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <h3 className="text-xl font-semibold mb-4">Position Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Job Title</p>
                    <p className="font-semibold text-lg">Senior Software Developer</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Department</p>
                    <p className="font-semibold text-lg">Engineering</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-lg">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Employment Type</p>
                    <p className="font-semibold text-lg">Full-time</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Start Date</p>
                    <p className="font-semibold text-lg">January 15, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Reporting To</p>
                    <p className="font-semibold text-lg">John Smith, VP Engineering</p>
                  </div>
                </div>
              </div>

              {/* Compensation */}
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Compensation Package</span>
                    <span className="text-2xl font-bold text-blue-600">$120,000/year</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="w-full flex justify-between items-center"
                    onClick={() => setSalaryExpanded(!salaryExpanded)}
                  >
                    <span className="font-semibold">View Detailed Breakdown</span>
                    {salaryExpanded ? <ChevronUp /> : <ChevronDown />}
                  </Button>

                  {salaryExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-4 space-y-3"
                    >
                      {salaryBreakdown.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-gray-700">{item.label}</span>
                          <span className="font-semibold">
                            ${item.amount.toLocaleString()}
                          </span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg border-2 border-blue-300">
                        <span className="font-semibold text-blue-900">Total Annual</span>
                        <span className="font-bold text-xl text-blue-900">
                          ${salaryBreakdown.reduce((a, b) => a + b.amount, 0).toLocaleString()}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              {/* Benefits */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Benefits & Perks</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Health, Dental & Vision Insurance",
                    "401(k) with 4% Company Match",
                    "20 Days PTO + 10 Holidays",
                    "Remote Work Flexibility",
                    "Professional Development Budget",
                    "Gym Membership Reimbursement",
                    "Commuter Benefits",
                    "Employee Stock Purchase Plan",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms & Conditions */}
              <Accordion type="single" collapsible className="border rounded-lg">
                <AccordionItem value="terms">
                  <AccordionTrigger className="px-6 text-lg font-semibold">
                    Terms & Conditions
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <h4 className="font-semibold mb-2">1. Employment At-Will</h4>
                        <p className="text-sm">
                          This offer is for at-will employment, meaning either party may terminate
                          employment at any time, with or without cause or notice.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">2. Confidentiality</h4>
                        <p className="text-sm">
                          You agree to maintain confidentiality of all proprietary company
                          information and sign a separate confidentiality agreement.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">3. Background Check</h4>
                        <p className="text-sm">
                          This offer is contingent upon successful completion of a background check
                          and verification of your right to work in the United States.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">4. Non-Compete</h4>
                        <p className="text-sm">
                          You agree not to work for direct competitors for 12 months following
                          termination of employment.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Acceptance */}
              <div className="bg-gray-50 border-2 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-6">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm cursor-pointer">
                    I have read and agree to the terms and conditions outlined in this offer
                    letter. I understand that this offer is contingent upon successful completion
                    of background checks and verification of employment eligibility.
                  </label>
                </div>

                <div className="flex gap-3">
                  <Link href="/offer/notification" className="flex-1">
                    <Button variant="outline" className="w-full h-12">
                      Go Back
                    </Button>
                  </Link>
                  <Link href="/offer/signature" className="flex-1">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 h-12"
                      disabled={!termsAccepted}
                    >
                      Proceed to Sign
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PortalLayout>
  );
}
