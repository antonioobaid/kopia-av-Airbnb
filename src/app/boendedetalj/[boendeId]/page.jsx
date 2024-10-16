"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; 
import { ref, getDownloadURL } from "firebase/storage"; 
import Image from "next/image";
import { db, storage } from "../../../../firebase/config";

const BoendeDetalj = ({ params }) => {
  const [boende, setBoende] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const { boendeId } = params; // Få boende ID från params

  // Hämta boendeinformation från Firestore baserat på boendeId
  useEffect(() => {
    if (boendeId) {
      const fetchBoendeDetalj = async () => {
        const docRef = doc(db, "boende", boendeId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const boendeData = docSnap.data();
          setBoende(boendeData);

          // Hämta bild-URL
          const imageRef = ref(storage, boendeData.image);
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        } else {
          console.error("Boende finns inte!");
        }
      };

      fetchBoendeDetalj();
    }
  }, [boendeId]);

  if (!boende) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10" >
      <section className="flex justify-between items-start mx-4 sm:mx-8 md:mx-24 mb-10">
        <div className="flex justify-between items-start gap-12">
          <div>
            <h1 className="text-2xl font-bold mb-6 max-w-max">{boende.title}</h1>
            <div className="mb-6">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={boende.title}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              )}
            </div>
            {/* Här visar vi stjärnor */}
            <div className="text-2xl flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-gray-300">★</span>
            </div>
          </div>

          <div className="flex flex-col mt-12 gap-5 ">
            <div>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={boende.title}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              )}
            </div>
            <div className="flex">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={boende.title}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              )}
            </div>
            <div className="flex">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={boende.title}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-600 rounded-sm max-w-72 border border-green-600 p-6 mt-10 mx-auto">
          <p className="mb-4 border-b-2 border-b-green-500 p-2 w-full text-center">Bokningsinfo</p>
          <div className="flex flex-col justify-start items-start gap-2">
            <p>{boende.title}</p>
            <p>{boende.location}</p>
            <p>Datum: 23 Sep till 29 Sep</p>
            <p>Antal gäster: 2</p>
            <p>{boende.price} kr per natt</p>
            <p>7000 kr per månad</p>
          </div>
          {/* Centrera knappen */}
          <div className="flex justify-center mt-2">
            <button className="bg-green-600 rounded-sm p-2 w-32">Boka nu</button>
          </div>
        </div>
      </section>


      <section>
              <div className="mx-24 flex flex-col justify-between items-start gap-3">
                <p className="text-2xl">45 - 60 m². Rymmer upp till 2 personer.</p>
                <p className="text-2xl">Luta dig tillbaka i fåtöljen med en bok, eller koppla av i sängen framför TV:n. Du kan använda
                skrivbordet om du behöver få lite arbete gjort.</p>
                <p className="mt-11 text-2xl mb-6">Detta rum är utrustat med:</p>
              </div>
      </section>

      <section className="bg-gray-600 rounded-sm p-7 mx-4 sm:mx-8 md:mx-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="before:content-['•'] before:mr-2">Dubbelsäng</p>
            <p className="before:content-['•'] before:mr-2">Fåtölj / fåtöljer</p>
            <p className="before:content-['•'] before:mr-2">Badrum med dusch eller badkar</p>
            <p className="before:content-['•'] before:mr-2">Mörkläggningsgardiner</p>
            <p className="before:content-['•'] before:mr-2">Sminkspegel</p>
            <p className="before:content-['•'] before:mr-2">Skrivbord och stol</p>
            <p className="before:content-['•'] before:mr-2">Gratis WiFi</p>
            <p className="before:content-['•'] before:mr-2">Hårtork</p>
          </div>
          <div className="space-y-2">
            <p className="before:content-['•'] before:mr-2">Strykjärn och strykbräda</p>
            <p className="before:content-['•'] before:mr-2">Rökfritt</p>
            <p className="before:content-['•'] before:mr-2">Regndusch</p>
            <p className="before:content-['•'] before:mr-2">Kylskåp</p>
            <p className="before:content-['•'] before:mr-2">Säkerhetsbox</p>
            <p className="before:content-['•'] before:mr-2">Toalettartiklar</p>
            <p className="before:content-['•'] before:mr-2">TV</p>
            <p className="before:content-['•'] before:mr-2">Garderob</p>
          </div>
        </div>
      </section>


      <div className="ml-10">
          <p className="text-lg mb-4"><strong>Plats:</strong> {boende.location}</p>
          <p className="text-lg mb-4"><strong>Yta:</strong> {boende.area}</p>
          <p className="text-lg mb-4"><strong>Pris:</strong> {boende.price} kr/natt</p>
          <p className="text-lg mb-4"><strong>Antal vuxna:</strong> {boende.adults}</p>
        </div>
    </div>
  );
};

export default BoendeDetalj;
