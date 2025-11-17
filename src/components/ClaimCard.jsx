import { ExternalLink, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ClaimCardProps {
  farmId: string;
  farmerName: string;
  claimId: string;
  claimStatus: "Pending" | "Approved" | "Rejected";
  blockchainHash: string;
  predictedYield: number;
  damagePercent: number;
}

const ClaimCard = ({
  farmId,
  farmerName,
  claimId,
  claimStatus,
  blockchainHash,
  predictedYield,
  damagePercent,
}: ClaimCardProps) => {
  const statusColors = {
    Pending: "bg-warning",
    Approved: "bg-success",
    Rejected: "bg-destructive",
  };

  const handleVerifyBlockchain = () => {
    window.open(`https://polygonscan.com/tx/${blockchainHash}`, "_blank");
  };

  return (
    <Card className="hover:shadow-elevated transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{farmerName}</CardTitle>
          <Badge className={statusColors[claimStatus]}>{claimStatus}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Farm ID</p>
            <p className="font-medium">{farmId}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Claim ID</p>
            <p className="font-medium">{claimId}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Predicted Yield</p>
            <p className="font-medium">{predictedYield} kg/ha</p>
          </div>
          <div>
            <p className="text-muted-foreground">Damage</p>
            <p className="font-medium text-destructive">{damagePercent}%</p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleVerifyBlockchain}
          >
            <Shield className="mr-2 h-4 w-4" />
            Verify on Blockchain
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground mt-2 font-mono truncate">
            {blockchainHash}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClaimCard;
