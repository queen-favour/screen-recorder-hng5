"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/chakra/themes";
import { Sora } from "next/font/google";

import "@fontsource-variable/sora";

const sora = Sora({ subsets: ["latin"] });
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        <style jsx global>
          {`
            :root {
              --font-sora: ${sora.style.fontFamily};
            }
          `}
        </style>

        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
