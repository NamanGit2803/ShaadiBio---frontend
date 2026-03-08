import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import WhyChooseUs from "@/components/home/whyChooseUs";
import TemplatesShow from "@/components/home/templatesShow";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-custom">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <Features/>

            {/* Why Choose Us */}
            <WhyChooseUs/>

            {/* Template Showcase */}
            <TemplatesShow/>

            {/* Testimonials */}
            <Testimonials/>

            {/* CTA Section */}
           <CTA/>

            {/* Footer */}
            <Footer/>
        </div>
    );
}