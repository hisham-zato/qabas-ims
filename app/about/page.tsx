"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* --- SIMPLE NAVBAR --- */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-sky-700 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="font-serif font-bold text-xl text-slate-900">About QABAS</span>
        </div>
      </nav>

      {/* --- HEADER --- */}
      <section className="bg-sky-900 text-white py-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Our Visionaries</h1>
          <p className="text-sky-200 text-lg">
            The minds and hearts behind Qabas Islamic Life School.
          </p>
        </motion.div>
      </section>

      {/* --- FOUNDER 2 --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Image */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full md:w-1/3"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50">
              <Image 
                src="/founder2.jpg" 
                alt="Founder 2" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 space-y-6 text-left md:text-right"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Muhyissunna Ponmala Abdul Qadir Musliyar </h2>
              <p className="text-emerald-700 font-medium">(Chief patron,Qabas Life School)</p>
            </div>
            
            <div className="relative p-6 bg-slate-50 rounded-xl shadow-sm border border-slate-100">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-100 -z-0" />
              <p className="relative z-10 text-slate-600 leading-relaxed">
                Usthad, who serves as the Central Mushavara Secretary of Samastha Kerala Jam'iyyathul Ulama and the General Secretary of the Jamiah Hikamiyya institutions, is today one of the most widely recognized scholars of Islamic jurisprudence (Fiqh) in Kerala. 
                He is a distinguished personality who possesses both the authority and recognition to issue authentic fatwas on all matters related to the sacred Deen.
                Having shone brilliantly in the Dars tradition for many years, Usthad is also the revered teacher of numerous eminent scholars who are today known across the world. 
                In addition to Jamiah Hikamiyya, he regularly conducts classes at leading institutions such as Madin Kulliyya, Markaz Knowledge City (VIRAS), and several other prominent centers of learning.
              </p>
            </div>
            
          </motion.div>
        </div>
      </section>


      {/* --- DIVIDER --- */}
      <div className="max-w-4xl mx-auto h-px bg-slate-200" />

      {/* --- FOUNDER 1 --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image 
                src="/founder1.jpg" 
                alt="Founder 1" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Ibrahim Saqafi Puzhakkattiri</h2>
              <p className="text-sky-700 font-medium">(Director, Qabas Life School)</p>
            </div>
            
            <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-sky-100 -z-0" />
              <p className="relative z-10 text-slate-600 leading-relaxed">
                Ibrahim Saqafi Puzhakkattiri is a distinguished scholar, renowned speaker, thinker, and writer who actively engages in teaching at several prominent educational institutions. He serves as the Director of Qabas Islamic Life School.
                At present, Ustadh Ibrahim Saqafi delivers classes to students at leading institutions across Kerala, including Jamia Markazu Saqafathi Sunnia, Jamia Hikamiyya, Kolathur Irshadiya, Valiyava Darul Ma'arif, and many others.
                Alongside his role as the editor of Sunni Voice, the authoritative biweekly publication representing the Sunni community, he is also a powerful and influential orator in the intellectual and ideological landscape of Kerala. 
                His interventions and responses—marked by clarity, simplicity, and depth—have gained wide attention, especially for the way he effectively addresses and refutes ideological challenges against Islam with ease and wisdom.
              </p>
            </div>
            
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 text-center bg-slate-50">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Want to learn more about our methodology?</h3>
        <Link href="/">
          <Button size="lg" variant="outline" className="border-sky-700 text-sky-700 hover:bg-sky-50">
             Explore Programs
          </Button>
        </Link>
      </section>

    </main>
  );
}