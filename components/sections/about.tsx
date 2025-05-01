"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import TiltedCard from "@/components/tilted-card";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleParagraphs, setVisibleParagraphs] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Stagger the paragraph animations
          visibleParagraphs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleParagraphs((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 300); // 300ms delay between each paragraph
          });

          // Once all paragraphs are visible, stop observing
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px 0px -100px 0px", // Adjust this to trigger earlier
      }
    );

    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [visibleParagraphs.length]);

  const paragraphClass = (index: number) =>
    cn(
      "transition-all duration-1000",
      visibleParagraphs[index] ? "opacity-100 blur-none" : "opacity-0 blur-md"
    );

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-">
        <SectionHeading title="About Me" subtitle="My background and journey" />

        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div className="order-2 md:order-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <div
                  ref={sectionRef}
                  className="space-y-4 text-muted-foreground"
                >
                  <p className={paragraphClass(0)}>
                    I recently graduated from Atlas School with a diploma in
                    Computer Science and Full Stack Web Development. I earned
                    Honor Roll recognition for academic excellence in both
                    Front-End and Back-End Development. Throughout the program,
                    I gained hands-on experience with a variety of technologies
                    and frameworks, and developed a strong passion for building
                    responsive, user-friendly interfaces as well as creating
                    scalable, efficient backend systems.
                  </p>
                  <p className={paragraphClass(1)}>
                    Before my studies at Atlas, I worked as a Trainer and
                    Installer at CaptionCall, where I merged my technical
                    knowledge with strong customer service. I excelled at
                    understanding customers' needs, simplifying complex
                    technical concepts, and adapting to new technologies.
                  </p>
                  <p className={paragraphClass(2)}>
                    Looking ahead, I'm excited to apply my growing web
                    development skills, 7 years of customer service and 4 years
                    of technical experience. My goal is to collaborate with
                    businesses to develop and improve websites that enhance
                    performance, user experience, and functionality, while
                    delivering tailored solutions to meet strategic objectives.
                    By applying my ability to understand user needs and business
                    goals, I aim to contribute to the overall success of
                    projects and drive measurable results for clients.
                  </p>
                  <p className={paragraphClass(3)}>
                    When I’m not coding, I enjoy crafting, reading about garden
                    design, exploring graphic design trends, visiting museums
                    and art exhibits, creating in Adobe Illustrator, spending
                    time outdoors, and discovering new restaurants with friends.
                    These experiences fuel my creativity and continuously
                    inspire the design-oriented mindset I bring to my
                    development work.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="flex space-x-2 flex-grow">
                    <Button asChild variant="outline" size="sm">
                      <Link href="tel:+19187285419">
                        <Phone className="mr-1 h-4 w-4" />
                        <span className="block md:hidden">Call Me</span>
                        <span className="hidden md:inline">918-728-5419</span>
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
                        <span className="block md:hidden">Email Me</span>
                        <span className="hidden md:inline truncate">
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
