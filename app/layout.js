import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Ayomide Iyela - UI/UX designer and front-end developer",
  description: "A portfolio where Ayo's pixels, meet perfection!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-black`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
