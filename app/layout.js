import { Montserrat, } from "next/font/google";
import localFont from 'next/font/local';
import "../styles/globals.css";

import ClientLayout from "@/components/ClientLayout";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/components/ui/announcement";
import ThemeProvider from "@/context/ThemeProvider";
const monts = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-montserrat" });

const proto = localFont(
  {
    src: [
      {
        path: '../assets/font/ProtestRiot-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
    ],
    variable: "--font-proto",
  }
)

export const metadata = {
  title: "Rijvi Portfolio",
  description: "Rijvi Portfolio",
}
export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <body className={`${monts.className} `}>
        <>
          <ThemeProvider>
            <ClientLayout>
              <Announcement/>
              <Navbar/>
              {children}
              <Footer/>
              <FooterNav/>
            </ClientLayout>
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
