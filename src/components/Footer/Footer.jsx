import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t-2 border-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Vänster sida - text */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>

        {/* Höger sida - sociala media ikoner */}
        <div className="flex space-x-4">
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
    </footer>
  );
}
