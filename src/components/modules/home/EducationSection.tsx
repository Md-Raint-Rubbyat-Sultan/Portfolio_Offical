import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto py-16"
    >
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent rounded-3xl blur-3xl opacity-50"></div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold underline underline-offset-8 decoration-primary mb-16 text-center tracking-tight">
        Education
      </h1>

      {/* Education Card Grid */}
      <div className="grid grid-cols-1 gap-8">
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-card/70 backdrop-blur-xl border border-border rounded-2xl shadow-xl group relative overflow-hidden"
        >
          {/* Accent bar */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>

          <Card className="h-full flex flex-col p-6">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <GraduationCap size={28} />
              </div>
              <div>
                <CardTitle className="text-foreground text-xl font-bold">
                  Under Graduation
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  B.Sc (2021 – Present)
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <article className="space-y-3">
                <h3 className="text-lg">
                  <span className="font-semibold text-primary">Subject:</span>{" "}
                  Statistics
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focused on probability theory, statistical modeling, data
                  analysis, and research methods.
                </p>
              </article>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="mt-16 w-40 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
    </motion.section>
  );
};

export default EducationSection;
