import { Target, Eye, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "50+", label: "Expert Developers" },
    { number: "200+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission",
      description: "To bridge the gap between exceptional IT talent and ambitious projects, creating value for both our developers and clients through innovative solutions and meaningful partnerships."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Vision",
      description: "To be the leading global platform where IT talent thrives and businesses transform, setting new standards for technology excellence and collaborative success."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client relationships, ensuring every project exceeds expectations."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth",
      description: "We foster continuous learning and growth for our team members while helping our clients scale their businesses through technology innovation."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Raddip
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded with the vision to revolutionize how IT talent connects with opportunity, 
            Raddip is more than a company—we're a catalyst for innovation. We believe in the power 
            of exceptional developers to transform businesses and create lasting impact.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Raddip was born from a simple observation: the best technology projects happen when 
              talented developers work on problems they're passionate about. We created a platform 
              that doesn't just match skills to requirements, but connects purpose with opportunity. 
              Today, we're proud to be the bridge between innovation and execution, helping startups 
              scale and enterprises transform through the power of exceptional talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;