import { Roboto } from "next/font/google";
import "./globals.css";
import AOSInit from "./utils/aos";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Ayomide Iyela - UI/UX designer | front-end developer",
  description: "A portfolio where Ayo's pixels, meet perfection!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${roboto.className} bg-white text-black`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
