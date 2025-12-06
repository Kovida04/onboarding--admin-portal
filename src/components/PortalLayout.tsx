"use client";

import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface PortalLayoutProps {
  children: React.ReactNode;
  userName?: string;
  welcomeMessage?: string;
}

export default function PortalLayout({
  children,
  userName = "Jenny",
  welcomeMessage = "Welcome back to Insurance Portal",
}: PortalLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Sidebar />
      
      <div className="ml-32 min-h-screen">
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-40">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hello {userName} !</h1>
            <p className="text-sm text-gray-500">{welcomeMessage}</p>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <LogOut className="h-5 w-5" />
          </Button>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
