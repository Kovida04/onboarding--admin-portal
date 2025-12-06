"use client";

import { FileText, LayoutDashboard, Package, Search, TrendingUp, MapPin, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Package, label: "Offers", href: "/offer/notification" },
  { icon: TrendingUp, label: "Analytics", href: "/analytics" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: MapPin, label: "Location", href: "/location" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-screen w-32 bg-gradient-to-b from-blue-100 to-blue-200 shadow-lg flex flex-col items-center py-6 z-50">
      <div className="mb-8 flex flex-col items-center gap-3">
        <Avatar className="h-12 w-12 border-2 border-white shadow-md">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" />
          <AvatarFallback>JN</AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="icon" className="rounded-full bg-white/50 hover:bg-white/80">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>

      <div className="text-xs font-semibold text-gray-800 mb-4 px-2 text-center">
        INSURANCE PORTAL
      </div>

      <nav className="flex-1 flex flex-col gap-2 w-full px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-all ${
                isActive
                  ? "bg-white shadow-md text-blue-600"
                  : "text-gray-700 hover:bg-white/50"
              }`}
            >
              <Icon className="h-6 w-6" />
            </Link>
          );
        })}
      </nav>

      <div className="flex gap-2 mt-auto">
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/50">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
