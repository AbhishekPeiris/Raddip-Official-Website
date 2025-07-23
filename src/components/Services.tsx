import { 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: ["React & Next.js", "Node.js Backend", "Performance Optimized", "SEO Ready"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Ready"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies for modern applications.",
      features: ["AWS & Azure", "DevOps", "Microservices", "Auto-scaling"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Big Data", "Machine Learning", "Data Visualization", "Real-time Analytics"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Digital Innovation",
      description: "Emerging technology consulting including AI, IoT, and blockchain solutions.",
      features: ["AI Integration", "IoT Systems", "Blockchain", "Innovation Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive IT solutions that drive your business forward. 
            Our expert teams specialize in the technologies that matter most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;