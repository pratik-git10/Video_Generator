import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Outfit } from "next/font/google";
import ClientWrapper from "./client-wrapper";

export const metadata = {
  title: "VidoAI",
  description:
    "A text to video generation platform - complete entertainment package",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ClientWrapper>
            <Provider>{children}</Provider>
          </ClientWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
