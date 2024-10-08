import { Molle } from "next/font/google";
import Link from "next/link";

// Importera typsnittet från Google Fonts
const molle = Molle({
  weight: "400", // Molle finns i 400 vikt (regular)
  subsets: ["latin"], // Välj subset beroende på vilka tecken du behöver
});

export default function Logo() {
  return (
    <div>
      <Link href="/" className={`${molle.className} text-xl font-bold text-black bg-green-600 p-2 rounded-full`}>
        Coolbnb
      </Link>
    </div>
  );
}
