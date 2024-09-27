import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
// In your component file or _app.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dwidaya Worldwide",
  description: "Berpengalaman lebih dari 55 tahun, Liburan hemat terjamin akan selalu nyaman dengan berbagai promo tiket pesawat, paket tour hemat, dan hotel ke seluruh dunia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
