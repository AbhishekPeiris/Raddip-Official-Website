import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Development",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform with patient management and telemedicine features",
      image: "/api/placeholder/500/300",
      technologies: ["Next.js", "MongoDB", "Socket.io", "AWS"],
      category: "Healthcare Tech",
      featured: true,
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "AI/ML",
      featured: false,
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with social features",
      image: "/api/placeholder/400/500",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
      featured: false,
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using blockchain technology",
      image: "/api/placeholder/500/400",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      category: "Blockchain",
      featured: false,
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Property management and listing platform with virtual tours",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Laravel", "MySQL", "Three.js"],
      category: "Real Estate Tech",
      featured: false,
      githubUrl: "#",
      liveUrl: "#",
      status: "In Progress"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of successful projects that showcase our expertise 
            in delivering innovative solutions across various industries.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px] animate-fade-in">
          {/* Featured Project 1 - Large */}
          <Card className="md:col-span-2 lg:col-span-3 md:row-span-2 bg-card/30 backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-glow overflow-hidden">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-6 h-full flex flex-col justify-end relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary-glow transition-colors">
                    {projects[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {projects[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[0].technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Featured Project 2 - Medium */}
          <Card className="md:col-span-2 lg:col-span-2 md:row-span-2 bg-card/30 backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-glow overflow-hidden">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-secondary opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-6 h-full flex flex-col justify-end relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary-glow transition-colors">
                    {projects[1].title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {projects[1].description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {projects[1].technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="text-xs p-2">
                    <Github className="h-3 w-3" />
                  </Button>
                  <Button size="sm" className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground text-xs px-3">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Remaining Projects - Smaller Cards */}
          {projects.slice(2).map((project, index) => (
            <Card 
              key={project.id} 
              className={`bg-card/30 backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-glow overflow-hidden ${
                index === 1 ? 'md:col-span-2 lg:col-span-1' : 'md:col-span-1'
              }`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-hero opacity-5 group-hover:opacity-15 transition-opacity" />
                <CardContent className="p-4 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs border-primary/30">
                        {project.category}
                      </Badge>
                      {project.status === "In Progress" && (
                        <Star className="h-3 w-3 text-primary animate-pulse" />
                      )}
                    </div>
                    <h3 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary-glow transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="text-xs p-1 h-6 w-6">
                        <Github className="h-3 w-3" />
                      </Button>
                      <Button size="sm" className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground text-xs px-2 h-6">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-gradient-primary border-0 text-primary-foreground hover:opacity-90 animate-glow-pulse"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;