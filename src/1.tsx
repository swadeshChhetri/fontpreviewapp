'use client'
import { useState } from "react";

// interface Font {
//   name: string;
// }

export default function ShowFonts() {
  const [texts, setTexts] = useState<{ [key: number]: string }>({});

  // Predefined system font names that are commonly available
  const fontNames = [
    "Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New",
    "Georgia", "Palatino", "Garamond", "Comic Sans MS", "Trebuchet MS",
    "Roboto", "Poppins", "Lato", "Montserrat", "Open Sans", "Impact", "Segoe UI",
    // Add any system fonts available on the system (you can fetch or manually add more)
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-50 pt-12">
      <div className="flex mb-16 gap-3 items-center justify-center">
        <input
          type="text"
          onChange={(e) =>
            setTexts({
              ...texts,
              0: e.target.value, // Update the text for the first font
            })
          }
          placeholder="Type something..."
          className="border border-gray-300 rounded-lg px-4 py-3 w-96 text-center text-xl"
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-6 w-full mb-4 justify-center">
        {fontNames.map((font, index) => (
          <div
            key={index}
            className="w-[30%] min-w-[280px] p-5 gap-4 shadow-md bg-white text-center rounded-lg flex flex-col items-center"
          >
            <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: font }}>
              {font}
            </h3>
            <input
              type="text"
              value={texts[index] || ""} // Display the text entered for each font
              onChange={(e) =>
                setTexts({ ...texts, [index]: e.target.value }) // Update text for each input box
              }
              placeholder="Type here..."
              style={{
                fontFamily: font,
              }}
              className="border border-gray-300 rounded-lg p-3 w-full text-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
