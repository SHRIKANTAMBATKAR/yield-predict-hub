import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">AgriSense 360</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-Powered Farm-Level Yield & Loss Estimation System for PMFBY
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/farm-visual" className="text-muted-foreground hover:text-primary transition-colors">
                  Farm Visualization
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-muted-foreground hover:text-primary transition-colors">
                  Reports & Claims
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@agrisense360.in</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* Government Partners */}
          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ministry of Agriculture & Farmers Welfare</p>
              <p>PMFBY</p>
              <p>YES-TECH</p>
              <p>CROPIC</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AgriSense 360. All rights reserved. | A Government of India Initiative</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
