"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // För att hämta query params och navigera
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase/config"; // Importera både Firestore och Storage

function SearchBoende() {
  const [filteredBoenden, setFilteredBoenden] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageUrls, setImageUrls] = useState([]); // För att lagra URL:er för bilder

  const searchParams = useSearchParams(); // Hämta query params från URL
  const location = searchParams.get("location");
  const router = useRouter(); // Lägg till useRouter för navigation

  useEffect(() => {
    const fetchBoenden = async () => {
      const boendeCollection = collection(db, "boende");
      const boendeSnapshot = await getDocs(boendeCollection);

      const boendeList = boendeSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filtrera boenden baserat på location
      const filtered = boendeList.filter((boende) => boende.location === location);

      if (filtered.length === 0) {
        setErrorMessage("Inga boenden matchar platsen.");
      } else {
        setErrorMessage(""); // Nollställ felmeddelande om boenden hittas

        // Hämta bild-URL:erna från Firebase Storage för varje boende
        const imageRefs = filtered.map((boende) => ref(storage, boende.image)); // Skapa referenser för bilder
        const urls = await Promise.all(imageRefs.map((imageRef) => getDownloadURL(imageRef))); // Hämta URL:erna

        setImageUrls(urls); // Spara URL:erna för att visa bilderna
        setFilteredBoenden(filtered); // Spara filtrerade boenden
      }
    };

    fetchBoenden();
  }, [location]);

  // Funktion för att navigera till boendets detaljsida
  const navigateToDetails = (boendeId) => {
    router.push(`/boendedetalj/${boendeId}`); // Navigera till boende detaljsida med ID
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Sökresultat för {location}</h1>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBoenden.map((boende, index) => (
          <div 
            key={boende.id} 
            className="text-center cursor-pointer" 
            onClick={() => navigateToDetails(boende.id)} // Lägg till onClick som navigerar med boende ID
          >
            {/* Visa bild från Firebase Storage */}
            <img 
              src={imageUrls[index]} 
              alt={boende.title} 
              className="w-full h-64 object-cover rounded-lg" 
            />
            <p className="mt-2 text-lg font-semibold">{boende.title}</p>
            <p>{boende.location}</p>
            <p className="underline">{boende.price} SEK per natt</p>
            <p className="underline"> {boende.månadshyra} SEK per månad</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBoende;
