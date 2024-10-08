"use client";
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
      {/* Formulär och bild */}
      <section className="flex justify-between items-center mt-10 mx-24">
       <div className="max-w-80 bg-white p-4 border border-green-600 rounded-md">
        <h1 className="text-3xl font-bold text-black mb-4">Hitta boenden på Airbnb</h1>
        <p className="mb-6 text-gray-700">
          Upptäck hela boenden och rum som är perfekta för alla resor.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Platsfält */}
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

          {/* Datumfält */}
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

          {/* Antal vuxna */}
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

          {/* Sök-knapp */}
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
        {/* Bild 1 */}
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

        {/* Bild 2 */}
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

        {/* Bild 3 */}
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

        {/* Bild 4 */}
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

        {/* Bild 5 */}
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

        {/* Bild 6 */}
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

export default Home;
