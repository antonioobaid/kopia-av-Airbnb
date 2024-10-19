"use client"
export default function Betalt() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Betalning Genomförd!</h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          Tack för din betalning! Du har framgångsrikt hyrt lägenheten och din betalning har behandlats.
        </p>
        <p className="text-center text-green-500 text-sm mb-6">
          Du kommer att få en bekräftelse via e-post inom kort.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
          >
            Tillbaka till startsidan
          </button>
        </div>
      </div>
    </div>
  );
}
