import "@/styles/globals.scss";
import Layouts from "@/layouts";
import 'swiper/css';

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
