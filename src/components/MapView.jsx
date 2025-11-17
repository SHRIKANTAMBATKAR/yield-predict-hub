import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface Farm {
  id: string;
  farmerName: string;
  location: string;
  latitude: number;
  longitude: number;
  cropType: string;
  healthScore: number;
  predictedYield: number;
  ndvi: number;
}

interface MapViewProps {
  farms: Farm[];
  height?: string;
}

const MapView = ({ farms, height = "500px" }: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || map.current) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: [75.7139, 19.7515], // Maharashtra center
        zoom: 6,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Add markers for each farm
      farms.forEach((farm) => {
        const color = farm.healthScore > 80 ? "#10b981" : farm.healthScore > 50 ? "#f59e0b" : "#ef4444";
        
        const marker = new mapboxgl.Marker({ color })
          .setLngLat([farm.longitude, farm.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div class="p-2">
                <h3 class="font-bold">${farm.farmerName}</h3>
                <p class="text-sm">${farm.location}</p>
                <p class="text-sm">Crop: ${farm.cropType}</p>
                <p class="text-sm">Health: ${farm.healthScore}%</p>
                <p class="text-sm">Yield: ${farm.predictedYield} kg/ha</p>
                <p class="text-sm">NDVI: ${farm.ndvi.toFixed(2)}</p>
              </div>`
            )
          )
          .addTo(map.current!);
      });

      setShowTokenInput(false);
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [mapboxToken, farms]);

  if (showTokenInput) {
    return (
      <div className="space-y-4 p-6 border rounded-lg bg-card">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            To view the interactive farm map, please enter your Mapbox public token. 
            Get one free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
          </AlertDescription>
        </Alert>
        <div className="space-y-2">
          <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
          <Input
            id="mapbox-token"
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainer} 
      style={{ height }} 
      className="rounded-lg overflow-hidden border shadow-elevated"
    />
  );
};

export default MapView;
