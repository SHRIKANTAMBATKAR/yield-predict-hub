import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sprout,
  Brain,
  Shield,
  Satellite,
  BarChart3,
  Users,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-agriculture.jpg";

const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: "Hybrid AI Model",
      description: "Deep learning + traditional ML for 95% accuracy in yield prediction",
    },
    {
      icon: Satellite,
      title: "Multi-Source Data",
      description: "Satellite, drone imagery, IoT sensors, and weather data integration",
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring",
      description: "Live farm health tracking with NDVI and moisture analysis",
    },
    {
      icon: Shield,
      title: "Blockchain Verified",
      description: "Transparent claim verification on Polygon network",
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Dashboards for farmers, officers, and policy makers",
    },
    {
      icon: Sprout,
      title: "FarmGPT Assistant",
      description: "AI chatbot for instant farming advice in local languages",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Hero Image Background */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">AI-Powered Farm-Level</span>
              <br />
              Yield Estimation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Revolutionizing crop insurance with precision agriculture technology.
              Real-time monitoring, accurate predictions, and transparent claims for PMFBY.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" variant="hero" className="group">
                  Try Demo
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/assistant">
                <Button size="lg" variant="outline">
                  Meet FarmGPT
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-300" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground mb-4">
              India's Pradhan Mantri Fasal Bima Yojana (PMFBY) faces critical challenges:
            </p>
            <ul className="text-left space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start space-x-2">
                <span className="text-destructive mt-1">•</span>
                <span>Manual Crop Cutting Experiments (CCE) are time-consuming and costly</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-destructive mt-1">•</span>
                <span>Delayed claim settlements affecting farmer welfare</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-destructive mt-1">•</span>
                <span>Lack of farm-level granular data for accurate assessment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-destructive mt-1">•</span>
                <span>Limited transparency in damage verification process</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AgriSense 360 leverages cutting-edge technology to provide accurate, 
              real-time yield estimation and loss detection at the farm level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-elevated transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impact & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-primary-foreground/80">Prediction Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70%</div>
              <p className="text-primary-foreground/80">Faster Claim Processing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-primary-foreground/80">Transparent Verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Agriculture?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the power of AI-driven precision agriculture. 
              Get started with our interactive demo today.
            </p>
            <Link to="/dashboard">
              <Button size="lg" variant="hero">
                Launch Dashboard
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
