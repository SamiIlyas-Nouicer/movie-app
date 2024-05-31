import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { UserProvider } from "../context/UserContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      {" "}
      <Component {...pageProps} />
    </UserProvider>
  );
}
