import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export const metadata = {
  title: "CosmoSpeak",
  openGraph: {
    title: "CosmoSpeak",
    description: "Explore Space Engineering witH AI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>CosmoSpeak</title>
        <link
          rel="icon"
          href="https://i.postimg.cc/50j3h5w5/Group-383.png"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
