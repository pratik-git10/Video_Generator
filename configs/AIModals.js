import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});
const config = {
  responseMimeType: "application/json",
};

const model = "gemini-2.0-flash";

export const chatSession = model.startChat({
  config,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "write a script to generate a 30  second video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `\`\`\`json
[
  {
    "imagePrompt": "Realistic portrait of Archimedes in his study, surrounded by scrolls and geometrical instruments. Light streaming through a window illuminates dust motes in the air.",
    "contentText": "(0-5 seconds)  Archimedes, a brilliant mind of ancient Greece, wasn't just a mathematician. He was also an inventor, engineer, and astronomer.  One day, King Hiero II tasked him with a seemingly impossible problem...",
    "duration": 5
  },
  {
    "imagePrompt": "Realistic depiction of King Hiero II's golden crown submerged in a full bathtub.  Water spills over the edge.",
    "contentText": "(5-10 seconds) The king suspected his new crown wasn't pure gold, but he didn't want to damage it to find out. He challenged Archimedes to determine its true composition.",
    "duration": 5
  },
  {
    "imagePrompt": "Realistic image of Archimedes stepping into a bathtub, noticing the water displacement.  He looks surprised and thoughtful.",
    "contentText": "(10-15 seconds)  While pondering the problem in his bath, Archimedes observed the water rising as he submerged himself.  A spark of insight ignited his mind...",
    "duration": 5
  },
  {
    "imagePrompt": "Realistic illustration of Archimedes running through the streets of Syracuse, naked and shouting 'Eureka!'  People look at him with a mixture of confusion and amusement.",
    "contentText": "(15-20 seconds)  He realized he could measure the crown's volume by displacement, just like his body in the bath!  Overjoyed with his discovery, he famously ran through the streets shouting 'Eureka!' – 'I have found it!'",
    "duration": 5

  },
  {
    "imagePrompt": "Realistic depiction of Archimedes demonstrating his principle to King Hiero II. Archimedes is using a balance scale with the crown on one side and an equivalent weight of gold on the other. Both are submerged in water.",
    "contentText": "(20-25 seconds) Archimedes carefully submerged the crown and an equal weight of pure gold in water. The crown displaced more water, proving it was less dense and therefore not pure gold. The king's suspicions were confirmed.",
    "duration": 5

  },
  {
    "imagePrompt": "Realistic image of an ancient Greek scroll displaying a diagram illustrating Archimedes' principle of buoyancy.",
    "contentText": "(25-30 seconds)  Archimedes' principle of buoyancy became a cornerstone of physics, demonstrating the power of observation and the thrill of scientific discovery.",
    "duration": 5

  }
]
\`\`\`

This JSON structure makes it straightforward to parse and use in a video creation tool.  Each scene object includes the text to be narrated, the duration it should appear on screen, and the AI image generation prompt for that scene.  The prompts are detailed enough to guide the AI towards creating realistic and historically-informed images.  You can adjust the duration and text to fine-tune your video.  Remember to cite your sources for historical information when creating your final video.
`,
        },
      ],
    },
  ],
});
