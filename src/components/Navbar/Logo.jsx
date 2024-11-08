import { Molle } from "next/font/google";
import Link from "next/link";

const molle = Molle({
  weight: "400",
  subsets: ["latin"],
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
