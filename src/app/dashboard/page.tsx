"use client";

import PortalLayout from "@/components/PortalLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Info } from "lucide-react";

const claimsData = [
  { month: "Jan", claims: 85000, expenses: 45000 },
  { month: "Feb", claims: 92000, expenses: 48000 },
  { month: "Mar", claims: 88000, expenses: 46000 },
  { month: "Apr", claims: 95000, expenses: 50000 },
  { month: "May", claims: 98000, expenses: 47000 },
  { month: "Jun", claims: 90000, expenses: 52000 },
];

const underwriterData = [
  { name: "Claims", value: 35, color: "#6B94E8" },
  { name: "Policies", value: 25, color: "#E0A0FF" },
  { name: "Risks", value: 20, color: "#A8D5FF" },
  { name: "Submissions", value: 20, color: "#D0A8FF" },
];

const claimsBreakdown = [
  { label: "Web", percentage: 50, color: "#A8D5FF" },
  { label: "Branding", percentage: 50, color: "#6B94E8" },
];

const policiesBreakdown = [
  { label: "Web", percentage: 70, color: "#A8D5FF" },
  { label: "Branding", percentage: 30, color: "#6B94E8" },
];

export default function DashboardPage() {
  return (
    <PortalLayout userName="Jenny" welcomeMessage="Welcome back to Insurance Portal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Claims and Expenses Chart */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Claims and expenses</CardTitle>
                    <Select defaultValue="2022-2023">
                      <SelectTrigger className="w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2022-2023">2022-2023</SelectItem>
                        <SelectItem value="2021-2022">2021-2022</SelectItem>
                        <SelectItem value="2020-2021">2020-2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={claimsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                      <YAxis stroke="#6B7280" fontSize={12} />
                      <Bar dataKey="claims" fill="#6B94E8" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="expenses" fill="#A8D5FF" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Bottom Row - Underwriter and Claims/Policies */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Underwriter Summary */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Underwriter Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-48 h-48">
                        <svg viewBox="0 0 200 200" className="transform -rotate-90">
                          {underwriterData.map((item, index) => {
                            const total = underwriterData.reduce((sum, d) => sum + d.value, 0);
                            const startAngle = underwriterData
                              .slice(0, index)
                              .reduce((sum, d) => sum + (d.value / total) * 360, 0);
                            const angle = (item.value / total) * 360;
                            const largeArc = angle > 180 ? 1 : 0;
                            const endAngle = startAngle + angle;

                            const startX = 100 + 70 * Math.cos((startAngle * Math.PI) / 180);
                            const startY = 100 + 70 * Math.sin((startAngle * Math.PI) / 180);
                            const endX = 100 + 70 * Math.cos((endAngle * Math.PI) / 180);
                            const endY = 100 + 70 * Math.sin((endAngle * Math.PI) / 180);

                            return (
                              <path
                                key={item.name}
                                d={`M 100 100 L ${startX} ${startY} A 70 70 0 ${largeArc} 1 ${endX} ${endY} Z`}
                                fill={item.color}
                                className="transition-all hover:opacity-80"
                              />
                            );
                          })}
                          <circle cx="100" cy="100" r="45" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {underwriterData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm text-gray-700">{item.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Claims and Policies */}
                <div className="space-y-6">
                  {/* Claims */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Claims</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 mb-4">
                        {claimsBreakdown.map((item) => (
                          <div
                            key={item.label}
                            className="h-3 rounded-full"
                            style={{
                              backgroundColor: item.color,
                              width: `${item.percentage}%`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {claimsBreakdown.map((item) => (
                          <div key={item.label}>
                            <div className="flex items-center gap-2 mb-1">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-xs text-gray-600">{item.label}</span>
                            </div>
                            <p className="text-2xl font-bold">{item.percentage}%</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Policies */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Policies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 mb-4">
                        <div
                          className="h-3 rounded-full"
                          style={{
                            backgroundColor: policiesBreakdown[0].color,
                            width: `${policiesBreakdown[0].percentage}%`,
                          }}
                        />
                        <div
                          className="h-3 rounded-full"
                          style={{
                            backgroundColor: policiesBreakdown[1].color,
                            width: `${policiesBreakdown[1].percentage}%`,
                          }}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {policiesBreakdown.map((item) => (
                          <div key={item.label}>
                            <div className="flex items-center gap-2 mb-1">
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-xs text-gray-600">{item.label}</span>
                            </div>
                            <p className="text-2xl font-bold">{item.percentage}%</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Right Column - Statistics */}
            <div className="space-y-6">
              {/* Active Policies */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Active Policies
                    </CardTitle>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">75</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>4-wheeler</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">102</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>2-wheeler</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Collected */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Premium Collected
                    </CardTitle>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <p className="text-2xl font-bold">23%</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>4-wheeler</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4 text-red-600" />
                        <p className="text-2xl font-bold">17%</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>2-wheeler</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pending Submissions */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Pending Submissions
                    </CardTitle>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">75</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>4-wheeler</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">102</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>2-wheeler</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Risks */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Risks</CardTitle>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">75</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>4-wheeler</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">102</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>2-wheeler</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* High Risk Policies */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      High Risk Policies
                    </CardTitle>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">75</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>4-wheeler</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">102</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>2-wheeler</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Avg. Claim Settlement Time */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Avg. Claim Settlement Time
                    </CardTitle>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">75</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>4-wheeler</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">102</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>2-wheeler</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </PortalLayout>
  );
}
