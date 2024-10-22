"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../../../firebase/config";

export default function Betalt({ params }) {
  const { boendeId } = params; // Hämta boendeId från URL:en
  const [firstImageUrl, setFirstImageUrl] = useState(null);

  useEffect(() => {
    const fetchFirstImage = async () => {
      if (boendeId) {
        const docRef = doc(db, "boende", boendeId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const boendeData = docSnap.data();

          if (boendeData.images && boendeData.images.length > 0) {
            const firstImageRef = ref(storage, boendeData.images[0]);
            const firstImageUrl = await getDownloadURL(firstImageRef);
            console.log("Image URL:", firstImageUrl); // Logga URL för bilden
            setFirstImageUrl(firstImageUrl);
          } else {
            console.error("Inga bilder tillgängliga!");
          }
        } else {
          console.error("Boende finns inte!");
        }
      }
    };

    fetchFirstImage();
  }, [boendeId]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-2/5">
        
        {firstImageUrl && (
          <div className="mb-6">
            <img
              src={firstImageUrl}
              alt="Bokad lägenhet"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}

        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-green-600 mb-6">
          Betalning Genomförd!
        </h1>
        <p className="text-base sm:text-lg text-center text-gray-700 mb-6">
          Tack för din betalning! Du har framgångsrikt hyrt lägenheten och din betalning har behandlats.
        </p>
        <p className="text-center text-green-500 text-sm sm:text-base mb-6">
          Du kommer att få en bekräftelse via e-post inom kort.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 sm:px-8 py-2 sm:py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
          >
            Tillbaka till startsidan
          </button>
        </div>
      </div>
    </div>
  );
}
