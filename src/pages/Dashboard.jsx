import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Droplets, Thermometer, AlertTriangle, Leaf, Calendar } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import MapView from "@/components/MapView";
import FarmGPT from "@/components/FarmGPT";
import farmsData from "@/data/farms.json";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("farmer");

  // District-wise yield data for policy maker
  const districtYieldData = [
    { district: "Pune", yield: 4500 },
    { district: "Nashik", yield: 5200 },
    { district: "Aurangabad", yield: 3800 },
    { district: "Solapur", yield: 3500 },
    { district: "Nagpur", yield: 4100 },
  ];

  // Yearly trend data
  const yearlyTrendData = [
    { year: "2020", yield: 3800 },
    { year: "2021", yield: 4200 },
    { year: "2022", yield: 4500 },
    { year: "2023", yield: 4800 },
    { year: "2024", yield: 5000 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Real-time farm monitoring and analytics</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl">
              <TabsTrigger value="farmer">Farmer View</TabsTrigger>
              <TabsTrigger value="officer">Officer View</TabsTrigger>
              <TabsTrigger value="policy">Policy Maker</TabsTrigger>
            </TabsList>

            {/* Farmer View */}
            <TabsContent value="farmer" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome, Rajesh Kumar 👋</CardTitle>
                  <CardDescription>Here's your farm status for today</CardDescription>
                </CardHeader>
              </Card>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Predicted Yield"
                  value="4,200 kg/ha"
                  subtitle="+12% from last season"
                  icon={TrendingUp}
                  trend="up"
                />
                <StatCard
                  title="Crop Health"
                  value="85%"
                  subtitle="Good condition"
                  icon={Leaf}
                  trend="up"
                />
                <StatCard
                  title="Soil Moisture"
                  value="68%"
                  subtitle="Optimal range"
                  icon={Droplets}
                  trend="neutral"
                />
                <StatCard
                  title="Next Irrigation"
                  value="2 Days"
                  subtitle="Based on forecast"
                  icon={Calendar}
                  trend="neutral"
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Farm Location</CardTitle>
                  <CardDescription>Your farm at Pune, Maharashtra</CardDescription>
                </CardHeader>
                <CardContent>
                  <MapView 
                    farms={farmsData.filter(f => f.id === "F001")} 
                    height="400px"
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Weather Forecast</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Thermometer className="h-5 w-5 text-warning" />
                          <span>Temperature</span>
                        </div>
                        <span className="font-medium">28°C - 35°C</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Droplets className="h-5 w-5 text-accent" />
                          <span>Rainfall</span>
                        </div>
                        <span className="font-medium">Light (5mm)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-5 w-5 text-warning" />
                          <span>Advisory</span>
                        </div>
                        <span className="font-medium text-warning">Heat wave alert</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <button className="w-full text-left px-4 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                        View Detailed Crop Health Report
                      </button>
                      <button className="w-full text-left px-4 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                        Download Yield Prediction Report
                      </button>
                      <button className="w-full text-left px-4 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                        File Insurance Claim
                      </button>
                      <button className="w-full text-left px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                        Ask FarmGPT
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Officer View */}
            <TabsContent value="officer" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>PMFBY Officer Dashboard</CardTitle>
                  <CardDescription>Monitor and verify farm claims across Maharashtra</CardDescription>
                </CardHeader>
              </Card>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Total Farms"
                  value={farmsData.length}
                  subtitle="Active monitoring"
                  icon={Leaf}
                />
                <StatCard
                  title="Pending Claims"
                  value="2"
                  subtitle="Requires verification"
                  icon={AlertTriangle}
                  trend="neutral"
                />
                <StatCard
                  title="Avg Yield"
                  value="4,312 kg/ha"
                  subtitle="Across district"
                  icon={TrendingUp}
                />
                <StatCard
                  title="Health Status"
                  value="76%"
                  subtitle="Overall crop health"
                  icon={Leaf}
                  trend="up"
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Farm Locations - Maharashtra</CardTitle>
                  <CardDescription>Real-time monitoring of all registered farms</CardDescription>
                </CardHeader>
                <CardContent>
                  <MapView farms={farmsData} height="500px" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Farm Summary Table</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Farm ID</th>
                          <th className="text-left p-2">Farmer</th>
                          <th className="text-left p-2">District</th>
                          <th className="text-left p-2">Crop</th>
                          <th className="text-left p-2">Health</th>
                          <th className="text-left p-2">Yield</th>
                          <th className="text-left p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {farmsData.map((farm) => (
                          <tr key={farm.id} className="border-b hover:bg-muted/50">
                            <td className="p-2 font-medium">{farm.id}</td>
                            <td className="p-2">{farm.farmerName}</td>
                            <td className="p-2">{farm.district}</td>
                            <td className="p-2">{farm.cropType}</td>
                            <td className="p-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  farm.healthScore > 80
                                    ? "bg-success/20 text-success"
                                    : farm.healthScore > 50
                                    ? "bg-warning/20 text-warning"
                                    : "bg-destructive/20 text-destructive"
                                }`}
                              >
                                {farm.healthScore}%
                              </span>
                            </td>
                            <td className="p-2">{farm.predictedYield} kg/ha</td>
                            <td className="p-2">{farm.claimStatus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Policy Maker View */}
            <TabsContent value="policy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Policy Maker Analytics</CardTitle>
                  <CardDescription>Strategic insights for agricultural policy decisions</CardDescription>
                </CardHeader>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>District-wise Average Yield</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={districtYieldData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="district" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="yield" fill="hsl(var(--primary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Yearly Yield Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={yearlyTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="yield" 
                          stroke="hsl(var(--success))" 
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Stress Hotspot Analysis</CardTitle>
                  <CardDescription>Farms experiencing crop stress</CardDescription>
                </CardHeader>
                <CardContent>
                  <MapView 
                    farms={farmsData.filter(f => f.healthScore < 60)} 
                    height="400px"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-success mt-2" />
                      <div>
                        <p className="font-medium">Overall crop health improved by 15% this season</p>
                        <p className="text-sm text-muted-foreground">Attributed to timely irrigation advisories</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-warning mt-2" />
                      <div>
                        <p className="font-medium">Aurangabad district showing signs of drought stress</p>
                        <p className="text-sm text-muted-foreground">Recommend immediate intervention</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <p className="font-medium">Average claim processing time reduced by 65%</p>
                        <p className="text-sm text-muted-foreground">Through blockchain verification</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <FarmGPT />
      <Footer />
    </div>
  );
};

export default Dashboard;
