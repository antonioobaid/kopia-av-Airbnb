import Link from "next/link";
import Logo from "./Logo";



export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-6 border border-green-600 shadow-md text-black">   
        <Logo/>
      <div>
        <Link href="/login" className="mx-4 text-xl  text-green-600 ">Bli medlem</Link>
      </div>
    </div>
  );
}
