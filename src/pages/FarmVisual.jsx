import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapView from "@/components/MapView";
import farmsData from "@/data/farms.json";

const FarmVisual = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">3D Farm Visualization</h1>
            <p className="text-muted-foreground">Interactive farm monitoring with satellite and drone imagery</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle>Maharashtra Farm Network</CardTitle>
                  <CardDescription>Real-time NDVI and crop health monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <MapView farms={farmsData} height="600px" />
                  
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-success" />
                      <span className="text-sm">Healthy (80%+)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-warning" />
                      <span className="text-sm">Moderate (50-80%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-destructive" />
                      <span className="text-sm">Stressed (&lt;50%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Layers</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="ndvi" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="ndvi">NDVI</TabsTrigger>
                      <TabsTrigger value="moisture">Moisture</TabsTrigger>
                      <TabsTrigger value="yield">Yield</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ndvi" className="space-y-4 mt-4">
                      <div>
                        <h4 className="font-medium mb-2">Vegetation Health Index</h4>
                        <p className="text-sm text-muted-foreground">
                          NDVI (Normalized Difference Vegetation Index) measures crop health
                          using satellite data. Higher values indicate healthier crops.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Average NDVI</span>
                          <Badge variant="outline">0.71</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Healthy Farms</span>
                          <Badge className="bg-success">5</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">At Risk</span>
                          <Badge className="bg-destructive">2</Badge>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="moisture" className="space-y-4 mt-4">
                      <div>
                        <h4 className="font-medium mb-2">Soil Moisture Content</h4>
                        <p className="text-sm text-muted-foreground">
                          Real-time soil moisture levels from IoT sensors and satellite data
                          help optimize irrigation schedules.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Average Moisture</span>
                          <Badge variant="outline">63%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Optimal Range</span>
                          <Badge className="bg-success">6</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Low Moisture</span>
                          <Badge className="bg-warning">2</Badge>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="yield" className="space-y-4 mt-4">
                      <div>
                        <h4 className="font-medium mb-2">Yield Prediction Zones</h4>
                        <p className="text-sm text-muted-foreground">
                          AI-powered yield predictions for each farm based on historical
                          data, current conditions, and crop models.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Average Predicted</span>
                          <Badge variant="outline">4,312 kg/ha</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Above Expected</span>
                          <Badge className="bg-success">4</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Below Expected</span>
                          <Badge className="bg-destructive">2</Badge>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Sources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Satellite Imagery</span>
                    <Badge className="bg-success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Drone Data</span>
                    <Badge className="bg-success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">IoT Sensors</span>
                    <Badge className="bg-success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Weather API</span>
                    <Badge className="bg-success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Last Updated</span>
                    <span className="text-sm text-muted-foreground">2 mins ago</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                    <p className="text-sm font-medium text-success">Excellent Growth Detected</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Nashik farms showing 15% above-average growth
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                    <p className="text-sm font-medium text-warning">Water Stress Alert</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      2 farms in Aurangabad need irrigation within 24 hours
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <p className="text-sm font-medium text-accent">Optimal Conditions</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Weather favorable for next 5 days across region
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FarmVisual;
