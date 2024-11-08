"use client";
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton, useClerk, useUser } from "@clerk/nextjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/config";

export default function Navbar() {
  const { openSignIn } = useClerk(); 
  const { user } = useUser(); 

  if (user) {
    const updateUserInFirestore = async () => {
      try {
        await setDoc(doc(db, "user", user.id), {
          email: user.primaryEmailAddress?.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          lastLogin: serverTimestamp(),
        }, { merge: true });
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };
    updateUserInFirestore();
  }

  const handleSignInClick = () => {
    openSignIn();
  };

  return (
    <div className="flex justify-between items-center p-6 border border-b-2 border-green-600 text-black">
      <div className="hidden sm:block">
        <Logo />
      </div>
      <div className="sm:hidden w-full text-center">
        <Logo />
      </div>
      <div className="block sm:hidden w-full h-20 bg-gradient-to-r from-[#56953F] to-[#303030] absolute top-0 left-0 z-[-1]"></div>
      <div className="hidden sm:flex space-x-4">
        <SignedIn>
          <div className="relative flex items-center space-x-4 border bg-green-600 border-black rounded-full px-4 py-1">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 cursor-pointer text-black" />
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12", 
                  userButtonTrigger: "bg-transparent",
                },
              }}
              afterSignOutUrl="/" 
            />
          </div>
        </SignedIn>
        
        <SignedOut>
          <button onClick={handleSignInClick} className="mx-4 text-xl text-green-600 cursor-pointer hidden sm:block bg-green-100 hover:bg-green-200 rounded-lg px-2 py-1 transition duration-300">
            Bli medlem
          </button>
        </SignedOut> 
      </div>
    </div>
  );
}




