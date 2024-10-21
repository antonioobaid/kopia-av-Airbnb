import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-6 border border-green-600 shadow-md text-black">
    
      <div className="hidden sm:block">
        <Logo />
      </div>

      
      <div className="sm:hidden w-full text-center">
        <Logo />
      </div>

      <div className="hidden sm:flex  space-x-4">
      
        <SignedIn>
          <div className="hidden sm:flex items-center  space-x-4 border border-green-600 rounded-full">
            
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10", 
                  userButtonTrigger: "bg-transparent", 
                },
              }}
              afterSignOutUrl="/" 
            />
          </div>
        </SignedIn>

       
        <SignedOut>
          <SignInButton>
            <span className=" mx-4 text-xl text-green-600 cursor-pointer hidden sm:block">
              Bli medlem
            </span>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
