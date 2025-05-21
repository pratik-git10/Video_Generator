export function AdvancedFeatures() {
  const features = [
    {
      icon: "🎙️",
      title: "AI Voice Cloning",
      description:
        "Clone your voice or use our library of ultra-realistic AI voices to narrate your content.",
    },
    {
      icon: "🔄",
      title: "Scene Auto-Generation",
      description:
        "Paste a script — we’ll create the scenes, visuals, transitions, and timing automatically.",
    },
    {
      icon: "📏",
      title: "Platform Auto-Cropping",
      description:
        "One click to resize your video for YouTube, Shorts, TikTok, Instagram, and more.",
    },
    {
      icon: "🎯",
      title: "Engagement Score Predictor",
      description:
        "Our AI scores your video title, visuals, and structure for virality before you publish.",
    },
    {
      icon: "🗣️",
      title: "Multi-Language Voiceovers",
      description:
        "Generate content in 30+ languages and local accents to reach global audiences.",
    },
    {
      icon: "📂",
      title: "Version History & Drafts",
      description:
        "Restore, fork, or duplicate any previous version of your video project anytime.",
    },
  ];

  return (
    <section className="py-20 bg-white px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Advanced Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
