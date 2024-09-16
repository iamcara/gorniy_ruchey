import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.className} text-slate-900`}>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}
