"use client";

import { useState } from "react";
import PortalLayout from "@/components/PortalLayout";
import StepProgress from "@/components/StepProgress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Eye,
  Download,
  User,
  Car,
  CreditCard,
  Heart
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: "1", label: "Customer Details", icon: <User className="h-5 w-5" /> },
  { id: "2", label: "Vehicle information", icon: <Car className="h-5 w-5" /> },
  { id: "3", label: "Upload Documents", icon: <FileText className="h-5 w-5" /> },
  { id: "4", label: "Payment Details", icon: <CreditCard className="h-5 w-5" /> },
  { id: "5", label: "Thank you", icon: <Heart className="h-5 w-5" /> },
];

interface DocumentFile {
  id: string;
  file: File;
  status: "uploading" | "success" | "error";
  progress: number;
  error?: string;
}

interface RequiredDocument {
  id: string;
  name: string;
  description: string;
  required: boolean;
  acceptedFormats: string[];
  maxSize: number;
  uploaded?: DocumentFile;
}

const requiredDocuments: RequiredDocument[] = [
  {
    id: "id-proof",
    name: "Government ID Proof",
    description: "Valid passport, driver's license, or national ID card",
    required: true,
    acceptedFormats: [".pdf", ".jpg", ".jpeg", ".png"],
    maxSize: 5,
  },
  {
    id: "education",
    name: "Education Certificates",
    description: "Highest degree certificate and transcripts",
    required: true,
    acceptedFormats: [".pdf"],
    maxSize: 10,
  },
  {
    id: "background",
    name: "Background Verification Form",
    description: "Completed and signed background check authorization",
    required: true,
    acceptedFormats: [".pdf"],
    maxSize: 5,
  },
  {
    id: "previous-employment",
    name: "Previous Employment Proof",
    description: "Offer letter or experience certificate from previous employer",
    required: false,
    acceptedFormats: [".pdf", ".jpg", ".jpeg", ".png"],
    maxSize: 5,
  },
  {
    id: "address-proof",
    name: "Address Proof",
    description: "Utility bill or bank statement (not older than 3 months)",
    required: true,
    acceptedFormats: [".pdf", ".jpg", ".jpeg", ".png"],
    maxSize: 5,
  },
];

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<RequiredDocument[]>(requiredDocuments);

  const handleFileSelect = (docId: string, file: File) => {
    const doc = documents.find((d) => d.id === docId);
    if (!doc) return;

    // Validate file type
    const fileExt = "." + file.name.split(".").pop()?.toLowerCase();
    if (!doc.acceptedFormats.includes(fileExt)) {
      alert(`Invalid file format. Accepted formats: ${doc.acceptedFormats.join(", ")}`);
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > doc.maxSize) {
      alert(`File size exceeds ${doc.maxSize}MB limit`);
      return;
    }

    // Simulate upload
    const documentFile: DocumentFile = {
      id: Math.random().toString(),
      file,
      status: "uploading",
      progress: 0,
    };

    setDocuments(
      documents.map((d) =>
        d.id === docId ? { ...d, uploaded: documentFile } : d
      )
    );

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
        setDocuments((prev) =>
          prev.map((d) =>
            d.id === docId && d.uploaded
              ? { ...d, uploaded: { ...d.uploaded, status: "success", progress: 100 } }
              : d
          )
        );
      } else {
        setDocuments((prev) =>
          prev.map((d) =>
            d.id === docId && d.uploaded
              ? { ...d, uploaded: { ...d.uploaded, progress } }
              : d
          )
        );
      }
    }, 200);
  };

  const handleRemove = (docId: string) => {
    setDocuments(
      documents.map((d) => (d.id === docId ? { ...d, uploaded: undefined } : d))
    );
  };

  const uploadedCount = documents.filter((d) => d.uploaded?.status === "success").length;
  const requiredCount = documents.filter((d) => d.required).length;
  const requiredUploaded = documents.filter(
    (d) => d.required && d.uploaded?.status === "success"
  ).length;
  const overallProgress = (uploadedCount / documents.length) * 100;
  const canProceed = requiredUploaded === requiredCount;

  return (
    <PortalLayout userName="Jenny" welcomeMessage="Upload your documents">
      <div className="max-w-5xl mx-auto">
        <StepProgress steps={steps} currentStep={2} />

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
                  <CardTitle className="text-2xl">Document Upload Progress</CardTitle>
                  <CardDescription>
                    {uploadedCount} of {documents.length} documents uploaded
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {Math.round(overallProgress)}%
                  </div>
                  <p className="text-sm text-gray-500">Complete</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={overallProgress} className="h-3" />
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm">
                    Required: {requiredUploaded}/{requiredCount}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-400" />
                  <span className="text-sm">
                    Optional: {uploadedCount - requiredUploaded}/
                    {documents.length - requiredCount}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Document Upload Cards */}
          <div className="space-y-4">
            {documents.map((doc) => (
              <Card
                key={doc.id}
                className={`shadow-md transition-all ${
                  doc.uploaded?.status === "success"
                    ? "border-2 border-green-300 bg-green-50/50"
                    : doc.required
                    ? "border-2 border-blue-200"
                    : "border-gray-200"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{doc.name}</CardTitle>
                        {doc.required ? (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="text-xs">
                            Optional
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{doc.description}</CardDescription>
                      <div className="flex gap-4 mt-2 text-xs text-gray-500">
                        <span>Formats: {doc.acceptedFormats.join(", ")}</span>
                        <span>Max size: {doc.maxSize}MB</span>
                      </div>
                    </div>
                    {doc.uploaded?.status === "success" && (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  {!doc.uploaded ? (
                    <label className="block">
                      <input
                        type="file"
                        className="hidden"
                        accept={doc.acceptedFormats.join(",")}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileSelect(doc.id, file);
                        }}
                      />
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50/50 cursor-pointer transition-all">
                        <Upload className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                        <p className="font-medium text-gray-700">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {doc.acceptedFormats.join(", ").toUpperCase()} up to {doc.maxSize}MB
                        </p>
                      </div>
                    </label>
                  ) : (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border rounded-lg p-4 bg-white"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3 flex-1">
                            <FileText className="h-8 w-8 text-blue-600" />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate">
                                {doc.uploaded.file.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {(doc.uploaded.file.size / 1024).toFixed(2)} KB
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {doc.uploaded.status === "success" && (
                              <>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => handleRemove(doc.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {doc.uploaded.status === "uploading" && (
                          <div className="space-y-2">
                            <Progress value={doc.uploaded.progress} className="h-2" />
                            <p className="text-sm text-gray-500">
                              Uploading... {doc.uploaded.progress}%
                            </p>
                          </div>
                        )}

                        {doc.uploaded.status === "success" && (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">Upload successful</span>
                          </div>
                        )}

                        {doc.uploaded.status === "error" && (
                          <div className="flex items-center gap-2 text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">
                              {doc.uploaded.error || "Upload failed"}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              {!canProceed && (
                <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-900">
                        Required Documents Missing
                      </p>
                      <p className="text-sm text-amber-700">
                        Please upload all required documents to continue with the onboarding
                        process.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Link href="/offer/success" className="flex-1">
                  <Button variant="outline" className="w-full h-12">
                    Go Back
                  </Button>
                </Link>
                <Link href="/welcome" className="flex-1">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
                    disabled={!canProceed}
                  >
                    Continue to Welcome
                    <CheckCircle className="ml-2 h-5 w-5" />
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
