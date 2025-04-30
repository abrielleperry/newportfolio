import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import TiltedCard from "@/components/tilted-card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-">
        <SectionHeading title="About Me" subtitle="My background and journey" />

        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div className="order-2 md:order-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I recently graduated from Atlas School with a diploma in
                    Computer Science and Full Stack Web Development. I earned
                    Honor Roll recognition for academic excellence in both
                    Front-End and Back-End Development. Throughout the program,
                    I gained hands-on experience with a variety of technologies
                    and frameworks, and developed a strong passion for building
                    responsive, user-friendly interfaces as well as creating
                    scalable, efficient backend systems.
                  </p>
                  <p>
                    Before my studies at Atlas, I worked as a Trainer and
                    Installer at CaptionCall, where I merged my technical
                    knowledge with strong customer service. I excelled at
                    understanding customers' needs, simplifying complex
                    technical concepts, and adapting to new technologies.
                  </p>
                  <p>
                    Looking ahead, I’m excited to apply my growing web
                    development skills, 7 years of customer service and 4 years
                    of technical experience. My goal is to collaborate with
                    businesses to develop and improve websites that enhance
                    performance, user experience, and functionality, while
                    delivering tailored solutions to meet strategic objectives.
                    By applying my ability to understand user needs and business
                    goals, I aim to contribute to the overall success of
                    projects and drive measurable results for clients.
                  </p>
                  <p>
                    When I'm not coding, you can find me crafting, reading books
                    on garden design, exploring graphic design trends, visiting
                    art exhibits, creating in Adobe Illustrator, and dining at
                    new places with friends. I believe these activities help me
                    maintain a creative mindset that I bring to my development
                    work.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="flex space-x-2 flex-grow">
                    <Button asChild variant="outline" size="sm">
                      <Link href="tel:+19187285419">
                        <Phone className="mr-1 h-4 w-4" /> 918-728-5419
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="truncate max-w-[180px] md:max-w-none"
                    >
                      <Link
                        href="mailto:abrielleperry22@icloud.com"
                        className="truncate"
                      >
                        <Mail className="mr-1 h-4 w-4 flex-shrink-0" />
                        <span className="truncate">
                          abrielleperry22@icloud.com
                        </span>
                      </Link>
                    </Button>
                  </div>
                  <Button asChild>
                    <Link
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-96 sm:w-80 sm:h-[450px]">
              <TiltedCard
                imageSrc="/about-headshot.png"
                altText="Your Name - Professional Headshot"
                captionText="Abrielle Perry"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <div className="bg-primary/80 text-primary-foreground backdrop-blur-sm px-4 py-2 rounded-lg mx-4">
                      <p className="font-medium">Abrielle Perry</p>
                      <p className="text-sm">Fullstack Developer</p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
