import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss how we can help accelerate your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input placeholder="your.email@example.com" className="bg-background/50" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input placeholder="Your company" className="bg-background/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project, timeline, and requirements..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-gradient-primary border-0 text-primary-foreground hover:opacity-90">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We're here to help you succeed. Whether you need a full development team 
                or specialized talent for your project, we'll find the perfect match.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">hello@raddip.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-hero rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h4 className="font-semibold mb-3">Quick Response Promise</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 2 hours during business hours. 
                For urgent projects, call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;