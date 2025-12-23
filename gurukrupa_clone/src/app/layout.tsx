import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./providers";
import ChatBot from "./components/ChatBox";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans overflow-x-hidden">
        <Providers>
          <Navbar />
          {children}
          <ChatBot />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
