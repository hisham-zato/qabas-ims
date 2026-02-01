"use client";

import { useState, useEffect } from "react"; // Added hooks
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Cpu, Heart, Lightbulb, Users, ArrowRight, Palette, Clock, MapPin, Phone, } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  // --- STATE FOR SCROLL DETECTION ---
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 50px, toggle state
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">

      {/* --- NAVBAR (UPDATED) --- */}
      {/* Changed to 'fixed' so it sits ON TOP of the hero image */}
      <nav 
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border-b py-2 shadow-sm" // Scrolled State (White)
            : "bg-transparent border-transparent py-4" // Top State (Transparent)
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Wrapper */}
            <div className={`relative h-12 w-32 md:w-40 transition-all duration-300 ${
              isScrolled ? "" : "brightness-0 invert" // Turns logo white on dark background
            }`}>
              <Image src="/logo.png" alt="Qabas Logo" fill className="object-contain object-left" priority />
            </div>
          </div>

          {/* Navigation Links - Text color changes based on scroll */}
          <div className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-300 ${
            isScrolled ? "text-slate-600" : "text-white/90"
          }`}>
            <Link href="#about" className={`transition hover:text-sky-500 ${isScrolled ? "hover:text-sky-700" : "hover:text-white"}`}>About</Link>
            <Link href="#programs" className={`transition hover:text-sky-500 ${isScrolled ? "hover:text-sky-700" : "hover:text-white"}`}>Programs</Link>
            <Link href="#life" className={`transition hover:text-sky-500 ${isScrolled ? "hover:text-sky-700" : "hover:text-white"}`}>Student Life</Link>
            <Link href="/gallery" className={`transition hover:text-sky-500 ${isScrolled ? "hover:text-sky-700" : "hover:text-white"}`}>Gallery</Link>
            <Link href="#contact" className={`transition hover:text-sky-500 ${isScrolled ? "hover:text-sky-700" : "hover:text-white"}`}>Contact</Link>
          </div>

          <div className="flex gap-4">
            <Link href="/gallery">
              <Button 
                variant="ghost" 
                className={`hidden sm:inline-flex transition-colors ${
                  isScrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/20"
                }`}
              >
                Gallery
              </Button>
            </Link>
            <Button className="bg-sky-700 hover:bg-sky-800 text-white shadow-md border-none">Apply Now</Button>
          </div>
        </div>
      </nav>

      {/* --- IMMERSIVE HERO SECTION --- */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Campus Life"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay - Slightly stronger at the top for navbar readability */}
          <div className="absolute inset-0 bg-slate-900/40 bg-gradient-to-b from-black/60 via-transparent to-slate-900/80" />
        </div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6 pt-20" // Added pt-20 to account for fixed nav
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide mb-2">
            Admissions Open for 2026-27
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
            Nurturing Light for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              Modern World
            </span>
          </h1>
          <p className="text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            QABAS Islamic Life School blends <strong>moral excellence</strong> with
            <strong> strong academics</strong> and <strong>modern technologies</strong>. We nurture professionals equipped with
            knowledge, character, and a deep sense of purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white border-none h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-sky-500/25 transition-all">
              Start Admission
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md transition-all">
              Explore Campus
            </Button>
          </div>
        </motion.div>
      </section>

      {/* --- FEATURE: ZALVION TEASER --- */}
      <section className="bg-slate-900 py-12 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-bold tracking-widest text-sm">
              <Palette className="w-4 h-4" /> ZALVION ART FEST
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Unleashing Creativity at Qabas</h3>
            <p className="text-slate-400 max-w-lg">Discover the artistic talents of our students in our annual art festival.</p>
          </div>
          <Link href="/gallery">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
              View Art Gallery <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-5xl mx-auto text-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              The Meaning of <span className="text-sky-700">QABAS</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Derived from the concept of "Light, Guidance, and Inspiration," Qabas is a sanctuary
              where Islamic values meet modern intellectual strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-sky-50 rounded-2xl text-left border border-sky-100 hover:border-sky-300 transition duration-300">
              <Lightbulb className="w-8 h-8 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-600">To nurture morally strong, knowledgeable, and responsible individuals who lead with character.</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-2xl text-left border border-emerald-100 hover:border-emerald-300 transition duration-300">
              <Users className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-600">Combining Islamic teachings with modern life skills to create balanced personalities suited for the future.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- ACADEMIC PILLARS --- */}
      <section id="programs" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">A Balanced Education</h2>
            <p className="text-slate-500">Deen & Dunya integrated perfectly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Science & Tech", icon: <Cpu className="w-10 h-10 text-sky-600" />, desc: "AI, Robotics, and Competitive Exam Coaching (UPSC/PSC).", color: "border-t-sky-600" },
              { title: "Islamic Studies", icon: <BookOpen className="w-10 h-10 text-emerald-600" />, desc: "Quran Theatre, Tajweed, Fiqh, and Ahlus-Sunnah ideology.", color: "border-t-emerald-600" },
              { title: "Life Skills", icon: <Heart className="w-10 h-10 text-orange-500" />, desc: "Martial Arts, Swimming, Language Villa, and Leadership camps.", color: "border-t-orange-500" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className={`h-full border-t-4 ${item.color} shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group cursor-default`}>
                  <CardHeader>
                    <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <CardTitle className="text-2xl mt-4">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600">
                    {item.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STUDENT LIFE & DAILY ROUTINE --- */}
      <section id="life" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-slate-900">Student Life at QABAS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-sky-800 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Daily Routine
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Spiritual start with Fajr & Quran recitation.</li>
                <li>• Academic sessions focused on Science & Arts.</li>
                <li>• Sports, Martial Arts, and Fitness breaks.</li>
                <li>• Evening mentorship & Islamic reflection.</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-sky-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" /> Mentorship
              </h3>
              <p className="text-slate-600 mb-4">
                Students are supervised by an excellent academic team. We focus on personal centering,
                career mapping, and exploring individual aptitudes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">QABAS</h3>
            <p className="text-sm text-slate-400">Islamic Life School</p>
            <p className="leading-relaxed">
              Nurturing value-driven and professionally competent individuals
              rooted in the essence of Islamic culture.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-500 mt-1" />
                <p>Poonthottam, Thiruvali (PO)<br />676123, Kerala</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-500" />
                <p>+91 99461 70576</p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Admin Login</Link></li>
              <li><Link href="#" className="hover:text-white">Student Application</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
            <p className="text-xs text-slate-500 mt-8">
              © 2026 QABAS Institute. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </main>
  );
}