import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Cpu, 
  Heart, 
  Lightbulb, 
  Clock, 
  MapPin, 
  Phone, 
  Users, 
  Globe 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      
      {/* --- NAVBAR --- */}
      <nav className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-32 md:w-40">
              {/* Ensure your file is named 'logo.png' and is in the 'public' folder */}
              <Image 
                src="/logo.png" 
                alt="Qabas Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Links (Hidden on mobile) */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link href="#about" className="hover:text-sky-700 transition">About Us</Link>
            <Link href="#programs" className="hover:text-sky-700 transition">Programs</Link>
            <Link href="#life" className="hover:text-sky-700 transition">Student Life</Link>
            <Link href="#contact" className="hover:text-sky-700 transition">Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link href="#"> {/* /login */}
              <Button variant="ghost" className="text-slate-600">Login</Button>
            </Link>
            <Link href="#"> {/* /register */}
              <Button className="bg-sky-700 hover:bg-sky-800 text-white shadow-md">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-sky-50 to-blue-100/50 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-sm font-semibold tracking-wide mb-2">
            Admissions Open for 2026-27
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
            Nurturing Light for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">
              Modern World
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            QABAS Islamic Life School blends <strong>moral excellence</strong> with 
            <strong> strong academics</strong> and <strong>modern technologies</strong>. We nurture professionals equipped with 
            knowledge, character, and a deep sense of purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="#">
              <Button size="lg" className="w-full sm:w-auto bg-sky-700 hover:bg-sky-800 h-12 px-8 text-lg">
                Start Admission
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-lg bg-white">
              Explore Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* --- ABOUT & VISION --- */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              The Meaning of <span className="text-sky-700">QABAS</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Derived from the concept of "Light, Guidance, and Inspiration," Qabas is more than a school. 
              It is a sanctuary where Islamic values meet modern intellectual strength.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-sky-100 rounded-lg text-sky-700 mt-1">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Vision</h3>
                  <p className="text-slate-600 text-sm">To nurture morally strong, knowledgeable, and responsible individuals.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-sky-100 rounded-lg text-sky-700 mt-1">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Mission</h3>
                  <p className="text-slate-600 text-sm">Combining Islamic teachings with modern life skills to create balanced personalities.</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Placeholder for an image of the campus or students */}
          <div className="aspect-video bg-slate-100 rounded-2xl border flex items-center justify-center relative overflow-hidden shadow-lg">
            <span className="text-slate-400 font-medium flex flex-col items-center gap-2">
              <Users className="w-10 h-10" />
              Campus Image Placeholder
            </span>
          </div>
        </div>
      </section>

      {/* --- ACADEMIC & ISLAMIC PROGRAMS --- */}
      <section id="programs" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">A Balanced Education (Deen & Dunya)</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our curriculum integrates regular high school studies (CBSE/Kerala) with a complete Islamic system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="border-t-4 border-t-sky-600 shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <Cpu className="w-12 h-12 text-sky-600 mb-4" />
                <CardTitle className="text-xl">Science & Tech</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2">
                <p>Specialized coaching in AI, Robotics, and Science.</p>
                <p>Preparation for competitive exams (PSC, UPSC, SSC).</p>
                <p>Skill-oriented programming vocational training.</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-t-4 border-t-emerald-600 shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-emerald-600 mb-4" />
                <CardTitle className="text-xl">Islamic Studies</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2">
                <p><strong>Quran Theatre:</strong> Tajweed & Memorization.</p>
                <p><strong>Kitaboth:</strong> Hadith, Fiqh, Aqeedah, Nahw.</p>
                <p><strong>Ahlus-Sunnah:</strong> Strong ideological foundation.</p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-t-4 border-t-orange-500 shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <Heart className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-xl">Life & Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2">
                <p><strong>Language Villa:</strong> Arabic, English, Urdu.</p>
                <p><strong>Martial Arts</strong> & Fitness Club.</p>
                <p><strong>Rihla:</strong> Educational & Recreational trips.</p>
              </CardContent>
            </Card>
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
                <p>Poonthottam, Thiruvali (PO)<br/>676123, Kerala</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-500" />
                <p>+91 98765 43210</p>
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