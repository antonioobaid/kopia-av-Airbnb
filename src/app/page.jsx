"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { db, storage } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

function Home() {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [boende, setBoende] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const router = useRouter();

  useEffect(() => {
    const fetchBoende = async () => {
      const boendeCollection = collection(db, "boende");
      const boendeSnapshot = await getDocs(boendeCollection);

      const boendeList = boendeSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const imageRefs = boendeList.map((boende) => ref(storage, boende.image));
      const imageUrls = await Promise.all(imageRefs.map((imageRef) => getDownloadURL(imageRef)));

      setBoende(boendeList);
      setImageUrls(imageUrls);
    };

    const fetchMainImage = async () => {
      // Hämta huvudbildens URL från Firebase Storage
      const mainImageRef = ref(storage, "images/lägenhet1.webp"); // Här kan du byta till rätt sökväg för huvudbilden
      const url = await getDownloadURL(mainImageRef);
      setMainImageUrl(url);
    };

    fetchBoende();
    fetchMainImage()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Kontrollera om alla fält är ifyllda
    if (!location || !checkInDate || !checkOutDate || adults < 1) {
      setErrorMessage("Du måste fylla i alla fält för att kunna söka boende.");
      return;  // Avsluta funktionen om valideringen misslyckas
    }

    // Töm felmeddelandet och navigera till searchboende om valideringen lyckas
    setErrorMessage("");
    router.push(`/searchboende?location=${location}&adults=${adults}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
  };

  const navigateToDetails = (boendeId) => {
    if (boendeId) {
      router.push(`/boendedetalj/${boendeId}`);
    } else {
      console.error("Boende ID är inte definierat!");
    }
  };

  return (
    <div className="relative">
  <section className="flex flex-col lg:flex-row justify-between items-center mt-10 lg:mx-24 space-y-10 lg:space-y-0">
    <div className="bg-white p-4 border border-green-600 rounded-md lg:w-1/2 z-10 lg:mt-0 mt-6 absolute md:relative md:z-auto md:mt-0 top-10 max-w-xs md:max-w-sm 
    h-auto  md:h-auto  flex flex-col space-y-4"> 
      <h1 className=" sm:text-2xl font-bold text-black sm:mb-2">Hitta boenden på Airbnb</h1>
      <p className="text-sm sm:text-base mb-4 text-gray-700">Upptäck hela boenden och rum som är perfekta för alla resor.</p>  
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">PLATS</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm text-sm sm:text-base"
          >
            <option value="">Välj stad</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Malmö">Malmö</option>
            <option value="Uppsala">Uppsala</option>
            <option value="Göteborg">Göteborg</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div>
            <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Incheckning</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Utcheckning</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm text-sm sm:text-base"
            />
          </div>
        </div>

        <div>
          <label htmlFor="adults" className="block text-sm font-medium text-gray-700">ANTAL VUXNA</label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm text-sm sm:text-base"
            min="1"
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition text-sm sm:text-base"
        >
          Sök
        </button>
      </form>
    </div>

    <div className="hidden lg:block w-full lg:w-1/2 ">
      {mainImageUrl && (
        <Image
          src={mainImageUrl}
          alt="Hus"
          width={700}
          height={700}
          className="rounded-md shadow-lg object-cover w-full h-auto"
        />
      )}
    </div>
  </section>

  <section className="hidden md:flex justify-around items-center my-12">
    <div className="max-w-sm p-6 mb-10">
      <h2 className="text-2xl font-bold mb-2">Få lite flexibilitet</h2>
      <p>Boenden med flexibel avbokning gör det enkelt att omboka om dina planer ändras.</p>
    </div>
    <div className="max-w-sm p-6">
      <h2 className="text-2xl font-bold mb-2">Mer än sju miljoner aktiva annonser</h2>
      <p>Gör som 1 miljard andra gäster som har hittat semesterbostäder i över 220 länder och resmål.</p>
    </div>
    <div className="max-w-sm p-6">
      <h2 className="text-2xl font-bold mb-2">Över 100 filter för skräddarsydda vistelser</h2>
      <p>Välj prisklass, antal rum och andra viktiga bekvämligheter för att hitta det boende som passar dina behov.</p>
    </div>
  </section>

  <section className="container mx-auto mb-10 px-4">
    <h2 className=" hidden sm:block text-3xl font-bold mb-6 text-center">Boenden att upptäcka</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
      {boende.map((boende, index) => (
        <div
          key={boende.id}
          className="text-center cursor-pointer relative"
          onClick={() => navigateToDetails(boende.id)}
        >
          <Image
            src={imageUrls[index]}
            alt={boende.title}
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-auto"
          />
          <p className="mt-3 text-white text-2xl">{boende.title}</p>
        </div>
      ))}
    </div>
  </section>
</div>

  );
}
export default Home;