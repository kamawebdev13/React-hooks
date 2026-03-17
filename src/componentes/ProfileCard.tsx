const ProfileCard = () => {
    return (

        <main className="min-h-screen flex items-center justify-center p-4">

            {/* LA TARJETA PRINCIPAL (CARD) */}
            <div className="max-w-md w-full rounded-2xl shadow-lg shadow-gray-500/50 overflow-hidden
                        
                          bg-linear-to-b from-red-200 from-50% to-white to-50%">


                <div className="p-8 flex flex-col items-center pt-5">

                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-950">
                        Egle Karina
                    </h5>
                    <span className="text-base font-medium text-blue-950 mb-6">
                        Web Developer
                    </span>


                    <img
                        alt="creator"
                        src="/creator-card.webp"
                        className="w-20 h-20 me-2.5 mb-6 rounded-full border border-white/50"
                    />

                    <div className="flex gap-3">
                        <button
                            type="button"
                            className="inline-flex items-center text-gray-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-xl text-sm px-5 py-2.5 transition-colors shadow-sm"
                        >
                            Follow me
                        </button>

                        <button
                            type="button"
                            className="inline-flex items-center text-gray-950  border-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-semibold rounded-xl text-sm px-5 py-2.5 transition-colors shadow-sm"
                        >
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfileCard;