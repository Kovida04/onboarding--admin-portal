"use client";

import { useRef, useState, useEffect } from "react";
import PortalLayout from "@/components/PortalLayout";
import StepProgress from "@/components/StepProgress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Car, FileText, CreditCard, Heart, Pen, Trash2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const steps = [
  { id: "1", label: "Customer Details", icon: <User className="h-5 w-5" /> },
  { id: "2", label: "Vehicle information", icon: <Car className="h-5 w-5" /> },
  { id: "3", label: "Upload Documents", icon: <FileText className="h-5 w-5" /> },
  { id: "4", label: "Payment Details", icon: <CreditCard className="h-5 w-5" /> },
  { id: "5", label: "Thank you", icon: <Heart className="h-5 w-5" /> },
];

export default function OfferSignaturePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [hasSignature, setHasSignature] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#1e40af";
    ctx.lineTo(x, y);
    ctx.stroke();

    setHasSignature(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handleSubmit = () => {
    if (fullName && hasSignature) {
      router.push("/offer/success");
    }
  };

  const canSubmit = fullName.trim() !== "" && hasSignature;

  return (
    <PortalLayout userName="Jenny" welcomeMessage="Sign your offer letter">
      <div className="max-w-4xl mx-auto">
        <StepProgress steps={steps} currentStep={2} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Pen className="h-6 w-6 text-blue-600" />
                Digital Signature
              </CardTitle>
              <CardDescription>
                Please sign below to accept your offer letter
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Full Name Input */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Legal Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full legal name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Signature Canvas */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Signature *</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSignature}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white overflow-hidden">
                  <canvas
                    ref={canvasRef}
                    width={700}
                    height={200}
                    className="w-full cursor-crosshair touch-none"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Draw your signature in the box above using your mouse or touchpad
                </p>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Agreement Summary */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Acceptance Agreement
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  By signing this document, I confirm that:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      I accept the position of Senior Software Developer at TechCorp Solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      I have read and agree to all terms and conditions outlined in the offer
                      letter
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      I understand this offer is contingent upon successful background verification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      I will start employment on January 15, 2024 as specified in the offer letter
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Link href="/offer/details" className="flex-1">
                  <Button variant="outline" className="w-full h-12">
                    Go Back
                  </Button>
                </Link>
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 h-12 text-lg"
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                >
                  Submit Signature
                  <CheckCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {!canSubmit && (
                <p className="text-center text-sm text-red-600">
                  Please enter your full name and provide a signature to continue
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PortalLayout>
  );
}
