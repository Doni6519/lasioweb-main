import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "Lasioweb | Website Design Company in Nigeria",
    template: "",
  },
  description: "Get visually apealling websites tailored to your business",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        /> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/assets/images/logo.png" />
      </head>
      <body className="font-sans" id="body">
        <ChakraProvider>
          <Nav />

          <main className="app">
            {children}
            <Footer />
          </main>
          <GoogleTagManager gtmId="G-C7V0KLX9FF" />
        </ChakraProvider>

        {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> */}
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
