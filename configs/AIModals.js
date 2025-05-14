// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});
const config = {
  responseMimeType: "application/json",
};
const model = "gemini-1.5-pro";
export const contents = [
  {
    role: "user",
    parts: [
      {
        text: ``,
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: `\`\`\`json
[
  
]
\`\`\`


This JSON structure makes it straightforward to parse and use in a video creation tool.  Each scene object includes the text to be narrated, the duration it should appear on screen, and the AI image generation prompt for that scene.  The prompts are detailed enough to guide the AI towards creating realistic and historically-informed images.  You can adjust the duration and text to fine-tune your video.  Remember to cite your sources for historical information when creating your final video.
`,
      },
    ],
  },
  {
    role: "user",
    parts: [
      {
        text: `INSERT_INPUT_HERE`,
      },
    ],
  },
];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();
