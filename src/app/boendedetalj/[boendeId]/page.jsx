"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { db, storage } from "../../../../firebase/config";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";


const BoendeDetalj = ({ params }) => {
  const [boende, setBoende] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Ny state för vald bild
  const { boendeId } = params; // Få boende ID från params
  const router = useRouter();

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
          const imageRefs = boendeData.images.map((imagePath) =>
            ref(storage, imagePath)
          );
          const urls = await Promise.all(
            imageRefs.map((imageRef) => getDownloadURL(imageRef))
          );
          setImageUrls(urls);

          // Sätt den första bilden som standardvald bild
          if (urls.length > 0) {
            setSelectedImage(urls[0]);
          }
        } else {
          console.error("Boende finns inte!");
        }
      };

      fetchBoendeDetalj();
    }
  }, [boendeId]);

  if (!boende || imageUrls.length === 0) {
    return <div>Loading...</div>;
  }

  const BetalningPage = () => {
    router.push(`/betalningsidan/${boendeId}`);
  };

  return (
    <div className="mt-10">
      <section className="flex flex-col lg:flex-row justify-between items-start mx-4 sm:mx-8 md:mx-12 lg:mx-24 mb-10">
        <div className=" flex flex-col lg:flex-row justify-between items-start gap-6">
          <div >    
            <div className="mb-6 ">
              <div>
                  <h1 className="hidden sm:block text-2xl font-bold mb-6">{boende.title}</h1>
              </div>
              <div className="flex justify-start items-start  ">
              
              <button
                className="sm:hidden "
                onClick={() => router.push("/")}
              >
                <ArrowLeftIcon className="w-10 h-10 text-white" />
                </button>
                  {selectedImage && (
                    <Image
                      src={selectedImage}
                      alt={boende.title}
                      width={750}
                      height={750}
                      className="rounded-lg mx-3 object-cover 
                                 sm:w-auto sm:h-auto
                                 w-[300px] h-[300px] " 
                    />
                  )}
              </div>
                <div className="hidden text-2xl sm:flex items-center ">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-300">★</span>
                </div>
              
            </div>

          </div>

          <div className="hidden sm:flex flex-row lg:flex-col mt-6 lg:mt-14 gap-4">
            {imageUrls.map((url, index) => (
              <div key={index} onClick={() => setSelectedImage(url)}>
                <Image
                  src={url}
                  alt={`Bild ${index + 1}`}
                  width={170}
                  height={170}
                  className={`rounded-lg object-cover cursor-pointer ${
                    selectedImage === url ? "border-2 border-green-500" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-600 rounded-sm max-w-full lg:max-w-72 border border-green-600 p-6 mt-8 lg:mt-16 mx-auto">
          <p className="mb-4 border-b-2 border-b-green-500 p-2 w-full text-center">
            Bokningsinfo
          </p>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="text-2xl">{boende.title}</p>
            <p>Stad: {boende.location}</p>
            <p>Lägenhetsyta: {boende.area}</p>
            <p>Datum: 1 Sep till 31 dec</p>
            <p>Antal gäster: {boende.adults}</p>
            <p>Daglig Pris: {boende.price} SEK per natt</p>
            <p>månadshyra: {boende.månadshyra} SEK månad</p>
          </div>

          <div className="flex justify-center mt-2">
            <button
              className="bg-green-600 rounded-sm p-2 w-full lg:w-32"
              onClick={BetalningPage}
            >
              Boka nu
            </button>
          </div>
        </div>
      </section>

      <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-24">
        <div className="flex flex-col justify-between items-start gap-3">
          <p className="text-xl md:text-2xl">
            {boende.area}. Rymmer upp till {boende.adults} personer
          </p>
          <p className="text-xl md:text-2xl">
            Luta dig tillbaka i fåtöljen med en bok, eller koppla av i sängen
            framför TV:n. Du kan använda skrivbordet om du behöver få lite
            arbete gjort.
          </p>
          <p className="mt-11 text-xl md:text-2xl mb-6">Detta rum är utrustat med:</p>
        </div>
      </section>

      <section className="bg-gray-600 rounded-sm p-5 sm:p-7 mx-4 sm:mx-8 md:mx-12 lg:mx-24 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="before:content-['•'] before:mr-2">Dubbelsäng</p>
            <p className="before:content-['•'] before:mr-2">Fåtölj / fåtöljer</p>
            <p className="before:content-['•'] before:mr-2">
              Badrum med dusch eller badkar
            </p>
            <p className="before:content-['•'] before:mr-2">
              Mörkläggningsgardiner
            </p>
            <p className="before:content-['•'] before:mr-2">Sminkspegel</p>
            <p className="before:content-['•'] before:mr-2">Skrivbord och stol</p>
            <p className="before:content-['•'] before:mr-2">Gratis WiFi</p>
            <p className="before:content-['•'] before:mr-2">Hårtork</p>
          </div>
          <div className="space-y-2">
            <p className="before:content-['•'] before:mr-2">
              Strykjärn och strykbräda
            </p>
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
    </div>
  );
};

export default BoendeDetalj;
