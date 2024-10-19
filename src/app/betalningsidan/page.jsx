/*"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useRouter } from "next/navigation";

export default function BetalningPage() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const { cardNumber, expiryDate, cvv, billingAddress } = formData;
  
    // Regex för att validera adressen
    const addressRegex = /^[A-Za-zÅÄÖåäö]{3,}\s+\d+$/;
  
    if (!selectedPayment) {
      return "Vänligen välj en betalningsmetod.";
    }
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      return "Kortnummer måste vara 16 siffror.";
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      return "Utgångsdatum måste vara i formatet MM/ÅÅ.";
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
      return "CVV måste vara 3 siffror.";
    }
    if (!addressRegex.test(billingAddress)) {
      return "Faktureringsadressen måste innehålla minst tre bokstäver följt av ett nummer";
    }
  
    return "";
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Spara data till Firestore
      const docRef = await addDoc(collection(db, "betalningar"), {
        paymentMethod: selectedPayment,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        billingAddress: formData.billingAddress,
        timestamp: new Date(),
      });
      console.log("Betalning genomförd!");

      // Om betalning lyckades, navigera till "betalt" sidan
      router.push("/betalningsidan/betalt");
    } catch (error) {
      console.error("Fel vid betalning: ", error);
      setError("Ett fel uppstod vid betalningen. Försök igen.");
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center mb-8 text-white">Betalning</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Välj Betalningsmetod</h2>

          
            <div
              onClick={() => handlePaymentSelect("MasterCard")}
              className={`flex items-center justify-center gap-3 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "MasterCard" ? "border-green-500" : ""
              }`}
            >
              <img
                src="/images/MasterCard.png"
                alt="MasterCard"
                className="w-16 h-auto sm:w-16 sm:h-16 object-contain"
              />
              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">MasterCard</p>
            </div>

           
            <div
              onClick={() => handlePaymentSelect("Visa")}
              className={`flex items-center justify-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "Visa" ? "border-green-500" : ""
              }`}
            >
              <img
                src="/images/visa.jpg"
                alt="Visa"
                className="w-16 h-auto sm:w-16 sm:h-16 object-contain"
              />
              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">Visa</p>
            </div>

            
            <div
              onClick={() => handlePaymentSelect("Swish")}
              className={`flex items-center justify-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "Swish" ? "border-green-500" : ""
              }`}
            >
              <img
                src="/images/swich.webp"
                alt="Swish"
                className="w-16 h-auto sm:w-12 sm:h-12 object-contain"
              />
              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">Swish</p>
            </div>

          
            <div
              onClick={() => handlePaymentSelect("Klarna")}
              className={`flex items-center justify-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "Klarna" ? "border-green-500" : ""
              }`}
            >
              <img
                src="/images/klarna.avif"
                alt="Klarna"
                className="w-16 h-auto sm:w-20 sm:h-20 object-contain"
              />
              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">Klarna</p>
            </div>
          </div>
        </div>

       
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Fyll i Dina Betalningsuppgifter</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300">
                Kortnummer
              </label>
              <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="1234 5678 9101 1121"
              />
            </div>

            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300">
                  Giltighetstid
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="MM/ÅÅ"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-300">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="123"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-300">
                Faktureringsadress
              </label>
              <input
                type="text"
                id="billingAddress"
                value={formData.billingAddress}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Adress, stad, postnummer"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-3  text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
              >
                Betala nu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}*/



"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image från Next.js

export default function BetalningPage() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const { cardNumber, expiryDate, cvv, billingAddress } = formData;

    // Regex för att validera adressen
    const addressRegex = /^[A-Za-zÅÄÖåäö]{3,}\s+\d+$/;

    if (!selectedPayment) {
      return "Vänligen välj en betalningsmetod.";
    }
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      return "Kortnummer måste vara 16 siffror.";
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      return "Utgångsdatum måste vara i formatet MM/ÅÅ.";
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
      return "CVV måste vara 3 siffror.";
    }
    if (!addressRegex.test(billingAddress)) {
      return "Faktureringsadressen måste innehålla minst tre bokstäver följt av ett nummer.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Spara data till Firestore
      await addDoc(collection(db, "betalningar"), {
        paymentMethod: selectedPayment,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        billingAddress: formData.billingAddress,
        timestamp: new Date(),
      });
      console.log("Betalning genomförd!");

      // Om betalning lyckades, navigera till "betalt" sidan
      router.push("/betalningsidan/betalt");
    } catch (error) {
      console.error("Fel vid betalning: ", error);
      setError("Ett fel uppstod vid betalningen. Försök igen.");
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center mb-8 text-white">Betalning</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Välj Betalningsmetod</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* MasterCard */}
            <div
              onClick={() => handlePaymentSelect("MasterCard")}
              className={`flex items-center justify-center gap-3 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "MasterCard" ? "border-green-500" : ""
              }`}
            >
              <Image
                src="/images/MasterCard.png"
                alt="MasterCard"
                width={60}
                height={60}
                className="object-contain"
                style={{ width: "auto", height: "auto" }} 
                priority
              />

              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">MasterCard</p>
            </div>

            {/* Visa */}
            <div
              onClick={() => handlePaymentSelect("Visa")}
              className={`flex items-center justify-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "Visa" ? "border-green-500" : ""
              }`}
            >
             <Image
                src="/images/visa.jpg"
                alt="Visa"
                width={50}
                height={50}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">Visa</p>
            </div>

            {/* Swish */}
            <div
              onClick={() => handlePaymentSelect("Swish")}
              className={`flex items-center justify-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "Swish" ? "border-green-500" : ""
              }`}
            >
              <Image
                src="/images/swich.webp"
                alt="Swish"
                width={60}
                height={50}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">Swish</p>
            </div>

            {/* Klarna */}
            <div
              onClick={() => handlePaymentSelect("Klarna")}
              className={`flex items-center justify-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "Klarna" ? "border-green-500" : ""
              }`}
            >
              <Image
                src="/images/klarna.avif"
                alt="Klarna"
                width={60}
                height={60}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
                priority
                
              />
              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">Klarna</p>
            </div>
          </div>
        </div>

        {/* Betalningsformulär */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Fyll i Dina Betalningsuppgifter</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300">
                Kortnummer
              </label>
              <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="1234 5678 9101 1121"
              />
            </div>

            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300">
                  Giltighetstid
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="MM/ÅÅ"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-300">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="123"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-300">
                Faktureringsadress
              </label>
              <input
                type="text"
                id="billingAddress"
                value={formData.billingAddress}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Adress, stad, postnummer"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
              >
                Betala nu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


