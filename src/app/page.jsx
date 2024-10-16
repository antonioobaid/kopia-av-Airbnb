/*"use client";
import { useState } from "react";
import Image from "next/image"; // Importera Image-komponenten

function Home() {
  // State för att hålla formulärdata
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [adults, setAdults] = useState(1);

  // Funktion för att hantera formulärsändning (kommer att kopplas till Firebase senare)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Du kan skicka dessa värden till Firebase eller en API-hanterare här
    console.log("Location:", location);
    console.log("Check-in Date:", checkInDate);
    console.log("Adults:", adults);
  };

  return (
    <div>
    
      <section className="flex justify-between items-center mt-10 mx-24">
       <div className="max-w-80 bg-white p-4 border border-green-600 rounded-md">
        <h1 className="text-3xl font-bold text-black mb-4">Hitta boenden på Airbnb</h1>
        <p className="mb-6 text-gray-700">
          Upptäck hela boenden och rum som är perfekta för alla resor.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
    
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              PLATS (Vart som helst)
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Vart som helst"
            />
          </div>

     
          <div>
            <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
              DATUM
            </label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>

      
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
              ANTAL VUXNA
            </label>
            <input
              type="number"
              id="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              min="1"
            />
          </div>

       
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            Sök
          </button>
        </form>
       </div>
        <div className="ml-10">
          <Image
            src="/images/kitchen.jpg" 
            alt="Hus"     
            width="1000"   
            height="500"   
            className="rounded-md shadow-lg" 
          />
        </div>
      </section>

      <section className="flex justify-around items-center my-12">
      <div className="max-w-sm p-6 mb-10">
        <h2 className="text-2xl font-bold mb-2">Få lite flexibilitet</h2>
        <p className="">
          Boenden med flexibel avbokning gör det enkelt att omboka om dina planer ändras.
        </p>
      </div>

      <div className="max-w-sm p-6">
        <h2 className="text-2xl font-bold mb-2">Mer än sju miljoner aktiva annonser</h2>
        <p className="">
        Gör som 1 miljard andra gäster som har hittat semesterbostäder i över 220 länder och resmål.
        </p>
      </div>

      <div className="max-w-sm p-6">
        <h2 className="text-2xl font-bold mb-2">Över 100 filter för skräddarsydda vistelser</h2>
        <p className="">
        Välj prisklass, antal rum du vill ha och andra viktiga bekvämligheter för att hitta det boende som passar dina behov.
        </p>
      </div>
      </section>

      <section className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Boenden att upptäcka</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
        <div className="text-center">
          <Image
            src="/images/en liten hus.jpg"
            alt="en liten hus"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-auto cursor-pointer"
          />
          <p className="mt-2 text-white">hus med tre sovrum, rymligt vardagsrum, modernt kök</p>
        </div>

     
        <div className="text-center">
          <Image
            src="/images/house.webp"
            alt="house"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-auto cursor-pointer"
          />
          <p className="mt-2 text-white">Nyrenoverad lägenhet med öppen planlösning, stora fönster och balkong med utsikt över parken, perfekt för både avkoppling och stadsliv</p>
        </div>

     
        <div className="text-center">
          <Image
            src="/images/hus.jpg"
            alt="hus"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-auto cursor-pointer"
          />
          <p className="mt-2 text-white">Mysigt torp på landet med två sovrum, vedeldad kamin och stor tomt, idealiskt för naturälskare som söker lugn och ro</p>
        </div>

       
        <div className="text-center">
          <Image
            src="/images/villa.jpg"
            alt="villa"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-auto cursor-pointer"
          />
          <p className="mt-2 text-white">Lugnt och mysigt bergsboende</p>
        </div>

    
        <div className="text-center">
          <Image
            src="/images/mellan hus.jpg"
            alt="mellan hus"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-auto cursor-pointer"
          />
          <p className="mt-2 text-white">Lyxvilla vid havet</p>
        </div>

     
        <div className="text-center">
          <Image
            src="/images/stora huset.jpg"
            alt="stora huset"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-auto cursor-pointer"
          />
          <p className="mt-2 text-white">Rustikt lantställe med trädgård</p>
        </div>
      </div>
    </section>


    </div>
    
  );
}

export default Home;*/








/*"use client";
import { useState } from "react";
import Image from "next/image"; // För bilder
import { useRouter } from "next/navigation"; // För navigering
import { db } from "../../firebase/config"; // Importera Firebase-konfigurationen
import { collection, addDoc } from "firebase/firestore"; // Firestore-funktioner

function Home() {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [boende, setBoende] = useState([]);
  const router = useRouter(); // Använd `useRouter` för navigering

  useEffect(() => {
    const fetchBoende = async () => {
      const boendeCollection = collection(db, "boende");
      const boendeSnapshot = await getDocs(boendeCollection);
      const boendeList = boendeSnapshot.docs.map((doc) => doc.data());
      setBoende(boendeList);
    };

    fetchBoende();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/searchboende");
  };

  const navigateToDetails = (boendeId) => {
    router.push(`/boendedetalj/${boendeId}`);
  };


  return (
    <div>
      <section className="flex justify-between items-center mt-10 mx-24">
        <div className="max-w-80 bg-white p-4 border border-green-600 rounded-md">
          <h1 className="text-3xl font-bold text-black mb-4">Hitta boenden på Airbnb</h1>
          <p className="mb-6 text-gray-700">
            Upptäck hela boenden och rum som är perfekta för alla resor.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                PLATS (Vart som helst)
              </label>
              <input 
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                placeholder="Vart som helst"
              />
            </div>

            <div className="flex space-x-4">
              <div>
                <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                  Incheckning
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
                  Utcheckning
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                  />
              </div>
            </div>

            <div>
              <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                ANTAL VUXNA
              </label>
              <input
                type="number"
                id="adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                min="1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition" 
            >
              Sök
            </button>
          </form>
        </div>
        <div className="ml-10">
          <Image
            src="/images/kitchen.jpg"
            alt="Hus"
            width="1000"
            height="500"
            className="rounded-md shadow-lg"
          />
        </div>
      </section>

      <section className="flex justify-around items-center my-12">
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

      <section className="container mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Boenden att upptäcka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center" onClick={navigateToDetails}>
            <Image
              src="/images/en liten hus.jpg"
              alt="en liten hus"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto cursor-pointer"
            />
            <p className="mt-2 text-white">hus med tre sovrum, rymligt vardagsrum, modernt kök</p>
          </div>

          <div className="text-center" onClick={navigateToDetails}>
            <Image
              src="/images/house.webp"
              alt="house"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto cursor-pointer"
            />
            <p className="mt-2 text-white">
              Nyrenoverad lägenhet med öppen planlösning, stora fönster och balkong med utsikt över parken, perfekt för både avkoppling och stadsliv.
            </p>
          </div>

          <div className="text-center" onClick={navigateToDetails}>
            <Image
              src="/images/hus.jpg"
              alt="hus"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto cursor-pointer"
            />
            <p className="mt-2 text-white">Mysigt torp på landet med två sovrum, vedeldad kamin och stor tomt, idealiskt för naturälskare som söker lugn och ro.</p>
          </div>

          <div className="text-center" onClick={navigateToDetails}>
            <Image
              src="/images/villa.jpg"
              alt="villa"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto cursor-pointer"
            />
            <p className="mt-2 text-white">Lugnt och mysigt bergsboende</p>
          </div>

          <div className="text-center" onClick={navigateToDetails}>
            <Image
              src="/images/mellan hus.jpg"
              alt="mellan hus"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto cursor-pointer"
            />
            <p className="mt-2 text-white">Lyxvilla vid havet</p>
          </div>

          <div className="text-center" onClick={navigateToDetails}>
            <Image
              src="/images/stora huset.jpg"
              alt="stora huset"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto cursor-pointer"
            />
            <p className="mt-2 text-white">Rustikt lantställe med trädgård</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;*/


/*"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; 
import { useRouter } from "next/navigation"; 
import { db , storage } from "../../firebase/config"; 
import { collection, getDocs } from "firebase/firestore"; 
import { ref, getDownloadURL } from "firebase/storage";

function Home() {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [boende, setBoende] = useState([]);
  const [imageUrls, setImageUrls] = useState([]); // För att hålla koll på boendena från Firebase
  const router = useRouter(); 

  // Hämta boende från Firestore när komponenten laddas
  useEffect(() => {
    const fetchBoende = async () => {
      const boendeCollection = collection(db, "boende");
      const boendeSnapshot = await getDocs(boendeCollection);

      const boendeList = boendeSnapshot.docs.map((doc) => ({
        id: doc.id,     // Dokumentets ID
        ...doc.data()    // Resterande data från Firestore-dokumentet
      })); 

      const imageRefs = boendeList.map((boende) => ref(storage, boende.image)); // Skapa en referens till varje bild
      const imageUrls = await Promise.all(imageRefs.map((imageRef) => getDownloadURL(imageRef))); // Hämta alla URL:er samtidigt

      setBoende(boendeList);
      console.log(boendeList);
      setImageUrls(imageUrls);
    };

    fetchBoende();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/searchboende");
  };

  const navigateToDetails = (boendeId) => {
    if (boendeId) {
      router.push(`/boendedetalj/${boendeId}`);
    } else {
      console.error("Boende ID är inte definierat!");
    }
  };

  return (
    <div>
      <section className="flex justify-between items-center mt-10 mx-24">
        <div className="max-w-80 bg-white p-4 border border-green-600 rounded-md">
          <h1 className="text-3xl font-bold text-black mb-4">Hitta boenden på Airbnb</h1>
          <p className="mb-6 text-gray-700">
            Upptäck hela boenden och rum som är perfekta för alla resor.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                PLATS (Vart som helst)
              </label>
              <input 
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                placeholder="Vart som helst"
              />
            </div>

            <div className="flex space-x-4">
              <div>
                <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                  Incheckning
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
                  Utcheckning
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                ANTAL VUXNA
              </label>
              <input
                type="number"
                id="adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                min="1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition" 
            >
              Sök
            </button>
          </form>
        </div>
        <div className="ml-10">
          <Image
            src="/images/kitchen.jpg"
            alt="Hus"
            width="1000"
            height="500"
            className="rounded-md shadow-lg"
          />
        </div>
      </section>

      <section className="flex justify-around items-center my-12">
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

      <section className="container mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Boenden att upptäcka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boende.map((boende, index) => (
          <div
            key={boende.id}  // Använd item.id som nyckel istället för index
            className="text-center cursor-pointer"
            onClick={() => navigateToDetails(boende.id)}  // Skicka rätt boendeId
          >
            <Image
              src={imageUrls[index]}
              alt={boende.title}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="mt-2 text-white">{boende.title}</p>
          </div>
           ))}
          </div>
      </section>
    </div>
  );
}

export default Home;*/


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
  const [errorMessage, setErrorMessage] = useState("");  // Nytt state för felmeddelande
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

    fetchBoende();
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
    <div>
      <section className="flex justify-between items-center mt-10 mx-24">
        <div className="max-w-80 bg-white p-4 border border-green-600 rounded-md">
          <h1 className="text-3xl font-bold text-black mb-4">Hitta boenden på Airbnb</h1>
          <p className="mb-6 text-gray-700">Upptäck hela boenden och rum som är perfekta för alla resor.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                PLATS
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
              >
                <option value="">Välj stad</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Malmö">Malmö</option>
                <option value="Uppsala">Uppsala</option>
                <option value="Göteborg">Göteborg</option>
              </select>
            </div>

            <div className="flex space-x-4">
              <div>
                <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                  Incheckning
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
                  Utcheckning
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                ANTAL VUXNA
              </label>
              <input
                type="number"
                id="adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm"
                min="1"
              />
            </div>

            {/* Visa felmeddelande om något fält saknas */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
            >
              Sök
            </button>
          </form>
        </div>
        <div className="ml-10">
          <Image
            src="/images/kitchen.jpg"
            alt="Hus"
            width="1000"
            height="500"
            className="rounded-md shadow-lg"
          />
        </div>
      </section>

      <section className="flex justify-around items-center my-12">
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

      <section className="container mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Boenden att upptäcka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boende.map((boende, index) => (
          <div
            key={boende.id}
            className="text-center cursor-pointer"
            onClick={() => navigateToDetails(boende.id)}
          >
            <Image
              src={imageUrls[index]}
              alt={boende.title}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
            <p className="mt-2 text-white">{boende.title}</p>
          </div>
           ))}
          </div>
      </section>
    </div>
  );
}

export default Home;



