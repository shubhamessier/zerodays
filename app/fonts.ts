import {
  Playfair_Display as PlayfairDisplay,
  EB_Garamond as EBGaramond,
  Libre_Baskerville as LibreBaskerville,
} from "next/font/google";

export const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const ebGaramond = EBGaramond({
  subsets: ["latin"],
  variable: "--font-ebgaramond",
  display: "swap",
});

export const libreBaskerville = LibreBaskerville({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-libre-baskerville",
  display: "swap",
});
