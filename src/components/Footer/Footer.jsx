
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Korrekt brand icons
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from 'next/link'; // Importera Next.js Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t-2 border-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <p className="hidden sm:block text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        <div className="hidden sm:flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="lg:hidden flex justify-between items-center w-full">
       
        <div className=" sm:hidden flex flex-col justify-center items-center gap-1">
          <Link href="/" className="text-white" >
              <FontAwesomeIcon icon={faSearch} className="w-6 h-6" />
          </Link>
          <h1>Explore</h1>
        </div>

      
        <div className="flex items-center ">  
          <SignedIn>
            <div className="sm:hidden flex flex-col justify-center items-center  gap-1 ">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonTrigger: "bg-transparent",
                  },
                }}
                afterSignOutUrl="/"
              />
            <h1>Inloggat</h1>
            </div>
            
          </SignedIn>

          
          <SignedOut>
            <SignInButton>
              <span className="mx-4 cursor-pointer sm:hidden flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
                <span className="text-xs">Logga in</span>
              </span>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </footer>
  );
}

