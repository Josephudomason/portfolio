"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const services = [
  "Marketing sites",
  "Dashboards",
  "Financial apps",
  "E-commerce",
  "SaaS products",
  "Social networks",
  "Marketplaces",
  "Streaming platforms",
  "Real-time apps",
  "Enterprise tools",
  "Landing pages",
  "Product interfaces",
];


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const successMessageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const [sending, setSending] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (successMessageTimeoutRef.current) {
        clearTimeout(successMessageTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResultMessage(null);
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setResultMessage(
        "Email service not configured. Check your EmailJS environment variables."
      );
      return;
    }

    if (!formRef.current) {
      setResultMessage("Form not available.");
      return;
    }

    const form = formRef.current;

    try {
      setSending(true);
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });

      setResultMessage("Message sent successfully!");
      form.reset();

      if (successMessageTimeoutRef.current) {
        clearTimeout(successMessageTimeoutRef.current);
      }

      successMessageTimeoutRef.current = setTimeout(() => {
        setResultMessage(null);
        successMessageTimeoutRef.current = null;
      }, 5000);

    } catch (err) {
      console.error("EmailJS error:", err);
      setResultMessage("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="content-section" id="contact">
      <div className="container contact-banner">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="contact-banner__copy"
        >
          <span className="section-eyebrow">What I Build</span>
          <h2>Web &amp; mobile experiences with a point of view.</h2>
          <p className="contact-banner__lead">
            From the first screen to the last interaction, I build products that
            feel clear, capable, and considered.
          </p>

          <div className="service-list" aria-label="Types of products I build">
            {services.map((service) => (
              <span key={service} className="service-tag">
                {service}
              </span>
            ))}
          </div>

          <div className="contact-availability">
            <span className="contact-availability__icon" aria-hidden="true">
              <Check size={15} strokeWidth={2.5} />
            </span>
            <p>
              Need a frontend or React Native developer who cares about
              responsiveness, accessibility, and presentation quality?
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="glass-panel contact-panel"
        >
          <div className="contact-panel__header">
            <div>
              <span className="contact-panel__label">Start a conversation</span>
              <h3>Tell me about your next build.</h3>
            </div>
            <ArrowUpRight aria-hidden="true" size={22} strokeWidth={1.8} />
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="contact-field">
              <Label htmlFor="name">
                Full Name
              </Label>
              <Input id="name" name="name"
                type="text" placeholder="John Doe" required
              />
            </div>
            <div className="contact-field">
              <Label htmlFor="email">
                Email Address
              </Label>
              <Input id="email" name="email"
                type="email" placeholder="john@example.com" required
              />
            </div>
            <div className="contact-field">
              <Label htmlFor="message">
                Message
              </Label>
              <Textarea id="message" name="message"
                placeholder="How can we help?" rows={4} required
              />
            </div>

            <div>
              <Button
                type="submit"
                disabled={sending}
                variant="outline"
                className="contact-submit w-full gap-2"
              >
                {sending ? (
                  <>
                    <RotatingLines
                      visible
                      height="18"
                      width="18"
                      strokeWidth="5"
                      strokeColor="currentColor"
                      ariaLabel="Sending message"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} aria-hidden="true" />
                  </>
                )}
              </Button>
              {resultMessage && (
                <p className="mt-3 text-sm text-foreground">
                  {resultMessage}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
