
import type { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionSection from "@/components/SolutionSection";
import ProjectSection from "@/components/ProjectSection";
import TestimonialSection from "@/components/TestimonalSection";
import ServiceSection from "@/components/ServiceSection";
import QueriesSection from "@/components/QueriesSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import PartnersSection from '@/components/PartnersSection';

export const metadata: Metadata = {
  title: "Nuvaro Home | Engineering Precision, Framing Tomorrow",
  description: "Precision-engineered aluminum solutions for modern architecture. Explore our premium range of windows, doors, and facades.",
  keywords: "aluminum windows, doors, facades, nuvaro, architecture, home improvement",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <ProjectSection />
      <PartnersSection />
      <TestimonialSection />
      <ServiceSection />
      <QueriesSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
