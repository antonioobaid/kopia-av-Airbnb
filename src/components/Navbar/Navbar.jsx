import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-6 border border-green-600 shadow-md text-black">
      <Logo />

      <div>
        {/* När användaren är inloggad */}
        <SignedIn>
          <div className="flex items-center space-x-4">
            <UserButton />
          </div>
        </SignedIn>
        
        <SignedOut>
          <SignInButton>
            <span className="mx-4 text-xl text-green-600 cursor-pointer">
              Bli medlem
            </span>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
