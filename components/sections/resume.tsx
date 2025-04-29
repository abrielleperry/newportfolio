import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Resume"
          subtitle="My education and experience"
        />

        <div className="mt-12 flex justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" /> Download Full Resume
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">
                        Computer Science and Full Stack Web Development
                      </h4>
                      <p className="text-muted-foreground">Atlas School</p>
                    </div>
                    <span className="text-sm bg-muted px-2 py-1 rounded">
                      2023 - 2025
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>GPA: 3.8/4.0</li>
                    <li>
                      Gained comprehensive knowledge in computer science, data
                      structures, algorithms, and software design.
                    </li>
                    <li>
                      Recognized on the Honor Roll for academic excellence in
                      Front-End Development and Back-End Development.
                    </li>
                    <li>
                      Completed hands-on projects that involved building
                      responsive, scalable web applications and deploying them.
                    </li>
                    <li>
                      Collaborated in team settings to design and implement
                      software solutions, problem-solving and debugging skills.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">Installer Trainer II</h4>
                      <p className="text-muted-foreground">CaptionCall</p>
                    </div>
                    <span className="text-sm bg-muted px-2 py-1 rounded">
                      2019 - 2023
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>
                      Installed and configured over 5,000 captioning phones for
                      clients, ensuring seamless setup and operation
                    </li>
                    <li>
                      Access and troubleshoot landlines, modem-router
                      connections, voice-over IP telephones, mobile
                      applications, hotspots, and Bluetooth connectivity to
                      successfully install equipment at residential and business
                      locations
                    </li>
                    <li>
                      Communicate with and train hard-of-hearing clientele of a
                      broad demographic
                    </li>
                    <li>
                      Participated in code reviews and implemented feedback from
                      senior developers
                    </li>
                    <li>
                      Accountable to FCC Compliance Regulations in verifying
                      eligibility, accurately maintaining customer PII records,
                      and submitting required invoices and reports via Excel,
                      Onyx, Outlook, and Dynamics
                    </li>
                    <li>
                      Able to adapt to daily changes, manage and maintain
                      flexible availability calendar, inventory of equipment and
                      marketing materials, and return of defective devices
                    </li>
                    <li>
                      Proactively access appointments and availability to
                      communicate outreach to customers and leads via phone,
                      email, and cold calls for scheduling or rescheduling
                      appointments for the most efficient time management in a
                      territory that averages 250 miles per day
                    </li>
                    <li>
                      Utilizing my organizational skill sets and ability to
                      translate technology to clients, was able to be very
                      successful in the field and promoted to Trainer II
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
