import { useState, useEffect } from "react";

function BgColor() {
    const [color, setColor] = useState("pink");

    useEffect(() => {
        const body = document.body;
        body.style.transition = "background-color 0.5s ease"; // Smooth transition effect
        body.style.backgroundColor = color;
        return () => {
            body.style.backgroundColor = "white"; // Reset to default
        };
    }, [color]);

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6 shadow-2xl bg-white p-10 rounded-3xl border border-gray-300">
                <h2 className="text-2xl font-bold text-gray-700">Change Background</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {["blue", "red", "green", "yellow"].map((col) => (
                        <button
                            key={col}
                            className={`text-white text-lg font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 m-3 
                                     ${col === "blue" ? "bg-blue-500 hover:bg-blue-600" :
                                    col === "red" ? "bg-red-500 hover:bg-red-600" :
                                        col === "green" ? "bg-green-500 hover:bg-green-600" :
                                            "bg-yellow-50 hover:bg-yellow-100"}
      `}
                            onClick={() => setColor(col)}
                        >
                            {col.charAt(0).toUpperCase() + col.slice(1)}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default BgColor;
