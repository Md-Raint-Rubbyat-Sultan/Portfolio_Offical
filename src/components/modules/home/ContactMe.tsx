import { config } from "@/config/config";
import React, { useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";

type Props = {};

const ContactMe: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);

  const handelContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Sending email to author");

    try {
      setLoading(true);

      const result = await emailjs.sendForm(
        config.EMAIL_SERVIVE_ID,
        config.EMAIL_TAMPLATE_ID,
        e.currentTarget,
        config.EMAIL_PUBLIC_ID
      );

      if (result.status === 200) {
        toast.success("Thanks for reaching out! I’ll get back to you soon.", {
          id: toastId,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Faild to contact. Please manually send an email", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto px-6 py-12 rounded-xl bg-card/50 backdrop-blur-lg shadow-lg border border-border">
      {/* Gradient blobs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Heading */}
      <h1 className="text-foreground text-4xl md:text-5xl font-bold underline underline-offset-8 decoration-primary mb-6 relative">
        Contact Information
      </h1>

      {/* Contact details */}
      <div className="space-y-3 mb-8 text-lg text-muted-foreground">
        <p>
          📞 <span className="font-medium text-foreground">Phone:</span>{" "}
          <a
            href="tel:+880 1603-266-478"
            className="text-primary hover:underline"
          >
            +880 1603-266-478
          </a>
        </p>
        <p>
          📧 <span className="font-medium text-foreground">Email:</span>{" "}
          <a
            href="mailto:mdranitrubbyatsultan@gmail.com"
            className="text-primary hover:underline"
          >
            mdranitrubbyatsultan@gmail.com
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handelContact} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            required
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant={"default"} type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {/* Accent line */}
      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
    </div>
  );
};

export default ContactMe;
