"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase/config"; 
function SearchBoende() {
  const [filteredBoenden, setFilteredBoenden] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageUrls, setImageUrls] = useState([]); 
  const searchParams = useSearchParams(); // Hämta query params från URL
  const location = searchParams.get("location");
  const router = useRouter(); 

  useEffect(() => {
    const fetchBoenden = async () => {
      const boendeCollection = collection(db, "boende");
      const boendeSnapshot = await getDocs(boendeCollection);
      const boendeList = boendeSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      const filtered = boendeList.filter((boende) => boende.location === location);

      if (filtered.length === 0) {
        setErrorMessage("Inga boenden matchar platsen.");
      } else {
        setErrorMessage(""); 
        const imageRefs = filtered.map((boende) => ref(storage, boende.image)); 
        const urls = await Promise.all(imageRefs.map((imageRef) => getDownloadURL(imageRef)));
        setImageUrls(urls); 
        setFilteredBoenden(filtered); 
      }
    };
    fetchBoenden();
  }, [location]);

  const navigateToDetails = (boendeId) => {
    router.push(`/boendedetalj/${boendeId}`); 
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
            onClick={() => navigateToDetails(boende.id)} 
          >
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
