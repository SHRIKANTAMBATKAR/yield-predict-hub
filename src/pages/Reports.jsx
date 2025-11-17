import { useState } from "react";
import { FileDown, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClaimCard from "@/components/ClaimCard";
import farmsData from "@/data/farms.json";
import { useToast } from "@/hooks/use-toast";

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCrop, setFilterCrop] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const { toast } = useToast();

  const handleDownloadReport = (farmId: string, farmerName: string) => {
    toast({
      title: "Report Generated",
      description: `Downloading claim report for ${farmerName} (${farmId})`,
    });
  };

  const filteredFarms = farmsData.filter((farm) => {
    const matchesSearch = 
      farm.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farm.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCrop = filterCrop === "all" || farm.cropType === filterCrop;
    const matchesStatus = filterStatus === "all" || farm.claimStatus === filterStatus;
    return matchesSearch && matchesCrop && matchesStatus;
  });

  const claimFarms = farmsData.filter((f) => f.claimStatus !== "None");
  const uniqueCrops = Array.from(new Set(farmsData.map((f) => f.cropType)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Reports & Claims</h1>
            <p className="text-muted-foreground">Manage and verify farm claims with blockchain transparency</p>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Search and filter farms by various criteria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by farmer name or farm ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterCrop} onValueChange={setFilterCrop}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Crops</SelectItem>
                    {uniqueCrops.map((crop) => (
                      <SelectItem key={crop} value={crop}>
                        {crop}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="None">No Claims</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Active Claims */}
          {claimFarms.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Active Claims</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {claimFarms.map((farm) => {
                  const damagePercent = Math.round((1 - (farm.actualYield || farm.predictedYield) / farm.predictedYield) * 100);
                  return (
                    <ClaimCard
                      key={farm.id}
                      farmId={farm.id}
                      farmerName={farm.farmerName}
                      claimId={farm.claimId!}
                      claimStatus={farm.claimStatus as "Pending" | "Approved" | "Rejected"}
                      blockchainHash={farm.blockchainHash!}
                      predictedYield={farm.predictedYield}
                      damagePercent={damagePercent}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* All Farms Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Farms</CardTitle>
                  <CardDescription>
                    Showing {filteredFarms.length} of {farmsData.length} farms
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <FileDown className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Farm ID</th>
                      <th className="text-left p-3">Farmer Name</th>
                      <th className="text-left p-3">Location</th>
                      <th className="text-left p-3">Crop</th>
                      <th className="text-left p-3">Health Score</th>
                      <th className="text-left p-3">Predicted Yield</th>
                      <th className="text-left p-3">Damage %</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFarms.map((farm) => {
                      const damagePercent = farm.actualYield
                        ? Math.round((1 - farm.actualYield / farm.predictedYield) * 100)
                        : 0;
                      return (
                        <tr key={farm.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="p-3 font-medium">{farm.id}</td>
                          <td className="p-3">{farm.farmerName}</td>
                          <td className="p-3 text-muted-foreground">{farm.district}</td>
                          <td className="p-3">{farm.cropType}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
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
                          <td className="p-3">{farm.predictedYield.toLocaleString()} kg/ha</td>
                          <td className="p-3">
                            {damagePercent > 0 ? (
                              <span className="text-destructive font-medium">{damagePercent}%</span>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                farm.claimStatus === "Approved"
                                  ? "bg-success/20 text-success"
                                  : farm.claimStatus === "Pending"
                                  ? "bg-warning/20 text-warning"
                                  : farm.claimStatus === "Rejected"
                                  ? "bg-destructive/20 text-destructive"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {farm.claimStatus}
                            </span>
                          </td>
                          <td className="p-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDownloadReport(farm.id, farm.farmerName)}
                            >
                              <FileDown className="mr-1 h-4 w-4" />
                              Report
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
