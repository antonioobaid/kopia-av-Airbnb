"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BetalningPage({ params }) {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: ""
  });
  const [error, setError] = useState("");
  const { apartmentId } = params;
  const router = useRouter() 
  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const { cardNumber, expiryDate, cvv, billingAddress } = formData;
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

    if (!apartmentId) {
      setError("Boende-ID saknas.");
      return;
    }

    try {
      await addDoc(collection(db, "betalningar"), {
        paymentMethod: selectedPayment,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        billingAddress: formData.billingAddress,
        timestamp: new Date(),
      });
      console.log("Betalning genomförd!");
      router.push(`/paymentspage/paid/${apartmentId}`);
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

            <div
              onClick={() => handlePaymentSelect("PayPal")}
              className={`flex items-center justify-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "PayPal" ? "border-green-500" : ""
              }`}
            >
              <Image
                src="/images/NEU_PayPal.png"
                alt="PayPal"
                width={60}
                height={50}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <p className="mt-2 text-center font-bold text-sm sm:text-base text-white">PayPal</p>
            </div>
        
            <div
              onClick={() => handlePaymentSelect("Klarna")}
              className={`flex items-center justify-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-lg transition duration-300 ${
                selectedPayment === "Klarna" ? "border-green-500" : ""
              }`}
            >
              <Image
                src="/images/klarna1.png"
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

            <div className="mb-4">
              <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-300">
                Faktureringsadress
              </label>
              <input
                type="text"
                id="billingAddress"
                value={formData.billingAddress}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Storgatan 1"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
            >
              Bekräfta Betalning
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
