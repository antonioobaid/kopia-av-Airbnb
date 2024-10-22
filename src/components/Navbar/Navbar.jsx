
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // För ikonen
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Hamburgerikon


export default function Navbar() {

  return (
    <div className="flex justify-between items-center p-6 border border-b-2 border-green-600  text-black">
      {/* Logo för desktop */}
      <div className="hidden sm:block">
        <Logo />
      </div>

      {/* Logo för mobil, centrerad */}
      <div className="sm:hidden w-full text-center">
        <Logo />
      </div>

      {/* Gradient bakgrund för mobil */}
      <div className="block sm:hidden w-full h-20 bg-gradient-to-r from-[#56953F] to-[#303030] absolute top-0 left-0 z-[-1]"></div>

      {/* Meny för inloggade användare */}
      <div className="hidden sm:flex space-x-4 ">
        <SignedIn>
          <div className="relative flex items-center space-x-4 border bg-green-600 border-black rounded-full px-4 py-1">
            <FontAwesomeIcon 
              icon={faBars} 
              className="w-6 h-6 cursor-pointer text-black" 
            />
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

        {/* "Bli medlem"-knapp för utloggade användare */}
        <SignedOut>
          <SignInButton>
            <span className="mx-4 text-xl text-green-600 cursor-pointer hidden sm:block">
              Bli medlem
            </span>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}

