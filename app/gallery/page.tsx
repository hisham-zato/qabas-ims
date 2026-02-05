"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// --- DUMMY DATA (Replace paths with your actual files) ---
const campusPhotos = [
  "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", 
  "/gallery/4.jpg", 
];

const studentlifePhotos = [
  "/gallery/5.jpg", "/gallery/6.jpg", 
  "/gallery/7.jpg", "/gallery/8.jpg", "/gallery/9.jpg", 
  "/gallery/10.jpg", "/gallery/11.jpg"
];


const zalvionPhotos = [
  "/gallery/zalvion/1.jpg", "/gallery/zalvion/2.jpg", 
  "/gallery/zalvion/3.jpg", "/gallery/zalvion/4.jpg",
  "/gallery/zalvion/5.jpg", "/gallery/zalvion/6.jpg"
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-sky-700 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="font-serif font-bold text-xl text-slate-900">QABAS Gallery</span>
        </div>
      </header>

      {/* --- ZALVION SECTION (Featured Dark Mode) --- */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              ZALVION
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Qabas Life Festival. A celebration of creativity, color, and student talent.
            </p>
          </div>

          {/* Masonry Grid for Zalvion */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {zalvionPhotos.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-white/10"
              >
                {/* Image Placeholder if file missing, otherwise shows image */}
                <div className="bg-slate-800 w-full relative">
                  <Image 
                    src={src} 
                    alt={`Zalvion ${i}`} 
                    width={500} 
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAMPUS LIFE SECTION (Light Mode) --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Campus</h2>
          
          <div className="columns-1 md:columns-3 gap-4 space-y-4">
            {campusPhotos.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-md"
              >
                <Image 
                  src={src} 
                  alt={`Campus ${i}`} 
                  width={500} 
                  height={500}
                  className="w-full h-auto object-cover hover:opacity-90 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Student Life</h2>
          
          <div className="columns-1 md:columns-3 gap-4 space-y-4">
            {studentlifePhotos.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-md"
              >
                <Image 
                  src={src} 
                  alt={`Campus ${i}`} 
                  width={500} 
                  height={500}
                  className="w-full h-auto object-cover hover:opacity-90 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to join us?</h3>
        <Link href="#">
          <Button size="lg" className="bg-sky-700 hover:bg-sky-800 text-white rounded-full px-12">
            Apply Now
          </Button>
        </Link>
      </section>

    </main>
  );
}