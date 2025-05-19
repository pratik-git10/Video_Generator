import Header from "@/components/dashboard/header";
import { TestimonialsCarousel } from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="py-24 px-6 mt-6 text-center bg-gradient-to-br from-indigo-500 to-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Create Stunning Videos in Seconds with AI
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          No script? No voice? No problem. Turn your ideas into captivating
          videos using the power of AI.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="text-lg px-6 py-4">Try It Free</Button>
          <Button
            variant="outline"
            className="text-lg px-6 py-4 text-black border-white">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
          {[
            { step: "Describe Your Idea", icon: "💡" },
            { step: "Choose a Style", icon: "🎨" },
            { step: "Generate & Edit", icon: "⚙️" },
            { step: "Download or Publish", icon: "⬇️" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "AI Voiceover Generator",
            "Script-Writing Assistant",
            "Multiple Animation Styles",
            "Auto Subtitles & Captions",
            "Trained for Engagement",
            "Editable Scenes & Music",
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <p className="font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <TestimonialsCarousel />
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Create Your First AI Video?
        </h2>
        <Button size="lg" className="text-lg px-6 py-4">
          Get Started Free <ArrowRight className="ml-2" />
        </Button>
      </section>
    </main>
  );
}
