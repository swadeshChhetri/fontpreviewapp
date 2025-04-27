'use client'
import { useEffect, useState } from "react";
import Head from 'next/head';

interface Font {
  name: string;
  class: string;
  isGoogleFont: boolean;
}

export default function ShowFonts() {
  const [show, setShow] = useState(false);
  const [texts, setTexts] = useState<{ [key: number]: string }>({});

  const fontNames = [
    "Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New",
    "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS",
    "Trebuchet MS", "Arial Black", "Impact", "Webdings", "Monospace",
    "Roboto", "Poppins", "Open Sans", "Lato", "Montserrat",
    "Oswald", "Raleway", "Merriweather", "Noto Sans", "Dancing Script",
    "Pacifico", "Lobster", "Bebas Neue", "Rubik", "Nunito",
    "Titillium Web", "Playfair Display", "PT Sans", "Fira Sans",
    "Cabin", "Josefin Sans", "Manrope", "Muli", "Cairo",

    // New additional fonts
    "Sora", "Inter", "Urbanist", "Work Sans", "Mukta",
    "Figtree", "Source Sans Pro", "Space Grotesk", "Prompt",
    "Exo 2", "IBM Plex Sans", "Quicksand", "Abel", "Zilla Slab",
    "DM Sans", "Kanit", "Signika", "Archivo", "Asap",
    "Overpass", "Red Hat Display", "Lexend", "Varela Round",
    "Assistant", "Chivo", "Mulish", "Barlow", "Hind",
    "Public Sans", "Heebo",
  ];

  const fonts: Font[] = fontNames.map(name => ({
    name,
    class: `font-[${name.replace(/\s+/g, '_')}]`,
    isGoogleFont: ![
      "Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New",
      "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS",
      "Trebuchet MS", "Arial Black", "Impact", "Webdings", "Monospace",
    ].includes(name),
  }));

  useEffect(() => {
    const googleFontFamilies = fonts
      .filter(font => font.isGoogleFont)
      .map(font => font.name.replace(/\s+/g, '+'))
      .join('&family=');

    if (googleFontFamilies) {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${googleFontFamilies}&display=swap`;
      link.rel = "stylesheet";
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, []);

  return (
    <div className="min-h-screen p-2 bg-gray-50">
      <div className=" flex gap-8 justify-center items-center">
        <h1 className="text-2xl font-bold ">Enter Your Text</h1>
        <div className="flex gap-3">
          <input
            type="text"
            // value={text}
            // onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />
          <button
            onClick={() => setShow(true)}
            className="bg-blue-600 text-white px-3 rounded-lg hover:bg-blue-700 transition w-48"
          >
            Show Fonts
          </button>
        </div>
      </div>

      {show && (
        <div className="mt-8 flex flex-wrap gap-6 w-full mb-4 justify-center">
          {fonts.map((font, index) => (
            <div
              key={index}
              className="w-[30%] min-w-[280px] p-5 gap-4 shadow-md bg-white text-center rounded-lg flex flex-col items-center"
            >
              {/* Displaying font name dynamically as title */}
              <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: font.name }}>
                {font.name}
              </h3>
              <input
                type="text"
                value={texts[index] || ""} // Display the text entered for each font
                onChange={(e) =>
                  setTexts({ ...texts, [index]: e.target.value }) // Update text for each input box
                }
                placeholder="Type here..."
                // Applying the font directly through inline style
                style={{ fontFamily: font.name }}
                className="border border-gray-300 rounded-lg p-3 w-full text-xl"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// 'use client'
// import { useEffect, useState } from "react";

// interface Font {
//   name: string;
//   class: string;
//   isGoogleFont: boolean;
// }

// export default function ShowFonts() {
//   const [texts, setTexts] = useState<{ [key: number]: string }>({});

//   const fontNames = [
//     "Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New",
//     "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS",
//     "Trebuchet MS", "Arial Black", "Impact", "Webdings", "Monospace",
//     "Roboto", "Poppins", "Open Sans", "Lato", "Montserrat",
//     "Oswald", "Raleway", "Merriweather", "Noto Sans", "Dancing Script",
//     "Pacifico", "Lobster", "Bebas Neue", "Rubik", "Nunito",
//     "Titillium Web", "Playfair Display", "PT Sans", "Fira Sans",
//     "Cabin", "Josefin Sans", "Manrope", "Muli", "Cairo",
//     "Sora", "Inter", "Urbanist", "Work Sans", "Mukta",
//     "Figtree", "Source Sans Pro", "Space Grotesk", "Prompt",
//     "Exo 2", "IBM Plex Sans", "Quicksand", "Abel", "Zilla Slab",
//     "DM Sans", "Kanit", "Signika", "Archivo", "Asap",
//     "Overpass", "Red Hat Display", "Lexend", "Varela Round",
//     "Assistant", "Chivo", "Mulish", "Barlow", "Hind",
//     "Public Sans", "Heebo",
//     "Caveat", "Baloo", "Bangers", "Lora", "Nunito Sans", "Righteous", "Shanti",
//     "Mochiy Pop P One", "Staatliches", "Fredoka One", "Tangerine", "Playfair Display SC",
//   ];

//   const fonts: Font[] = fontNames.map(name => ({
//     name,
//     class: `font-[${name.replace(/\s+/g, '_')}]`,
//     isGoogleFont: ![
//       "Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New",
//       "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS",
//       "Trebuchet MS", "Arial Black", "Impact", "Webdings", "Monospace",
//     ].includes(name),
//   }));

//   // Preload core fonts (e.g., commonly used fonts)
//   const preloadCoreFonts = ["Roboto", "Open Sans", "Poppins"];
//   useEffect(() => {
//     const preloadFonts = preloadCoreFonts.join('&family=');
//     const link = document.createElement('link');
//     link.href = `https://fonts.googleapis.com/css2?family=${preloadFonts}&display=swap`;
//     link.rel = "stylesheet";
//     document.head.appendChild(link);

//     return () => {
//       document.head.removeChild(link);
//     };
//   }, []);

//   // Load Google Fonts dynamically as the user types
//   const loadGoogleFont = (fontName: string) => {
//     const id = `font-${fontName.replace(/\s+/g, '-')}`;
//     if (document.getElementById(id)) return; // Already loaded

//     const link = document.createElement('link');
//     link.id = id;
//     link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}&display=swap`;
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   };

//   return (
//     <div className="min-h-screen p-4 bg-gray-50 pt-12">
//       <div className="flex mb-16 gap-3 items-center justify-center">
//         <input
//           type="text"
//           onChange={(e) =>
//             setTexts({
//               ...texts,
//               0: e.target.value, // Update the text for the first font
//             })
//           }
//           placeholder="Type something..."
//           className="border border-gray-300 rounded-lg px-4 py-3 w-96 text-center text-xl"
//         />
//       </div>

//       <div className="mt-8 flex flex-wrap gap-6 w-full mb-4 justify-center">
//         {fonts.map((font, index) => (
//           <div
//             key={index}
//             className="w-[30%] min-w-[280px] p-5 gap-4 shadow-md bg-white text-center rounded-lg flex flex-col items-center"
//           >
//             {/* Displaying font name dynamically as title */}
//             <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: font.name }}>
//               {font.name}
//             </h3>
//             <input
//               type="text"
//               value={texts[index] || ""} // Display the text entered for each font
//               onChange={(e) =>
//                 setTexts({ ...texts, [index]: e.target.value }) // Update text for each input box
//               }
//               placeholder="Type here..."
//               // Applying the font directly through inline style
//               style={{ fontFamily: font.name }}
//               className="border border-gray-300 rounded-lg p-3 w-full text-xl"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// 'use client'
// import { useEffect, useState } from "react";

// interface Font {
//   name: string;
//   class: string;
//   isGoogleFont: boolean;
// }

// export default function ShowFonts() {
//   const [fonts, setFonts] = useState<Font[]>([]);
//   const [texts, setTexts] = useState<{ [key: number]: string }>({});
//   const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

//   // Function to load a Google Font dynamically
//   const loadGoogleFont = (fontName: string) => {
//     const id = `font-${fontName.replace(/\s+/g, '-')}`;
//     if (document.getElementById(id)) return; // Already loaded

//     const link = document.createElement('link');
//     link.id = id;
//     link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}&display=swap`;
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   };

//   // Debounced function for font loading
//   const handleTyping = (fontName: string, index: number, value: string) => {
//     // Set the text for the specific font
//     setTexts({ ...texts, [index]: value });

//     // Clear the existing timeout (if any)
//     if (typingTimeout) {
//       clearTimeout(typingTimeout);
//     }

//     // Set a new timeout to load the font after typing has stopped for 500ms
//     const timeout = setTimeout(() => {
//       loadGoogleFont(fontName); // Load the font only once per font
//     }, 500); // Debounce time (500ms)

//     setTypingTimeout(timeout); // Store the timeout to clear it on next keystroke
//   };

//   // Fetch Google Fonts list dynamically from Google API
//   useEffect(() => {
//     const fetchFonts = async () => {
//       const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD1PM4iANh-cxehdDUrof3xGzorHjENA44');
//       const data = await response.json();
//       const fontList = data.items.map((font: any) => ({
//         name: font.family,
//         class: `font-[${font.family.replace(/\s+/g, '_')}]`,
//         isGoogleFont: true,
//       }));
//       setFonts(fontList);
//     };

//     fetchFonts();
//   }, []);

//   return (
//     <div className="min-h-screen p-4 bg-gray-50 pt-12">
//       <div className="flex mb-16 gap-3 items-center justify-center">
//         <input
//           type="text"
//           onChange={(e) => handleTyping("Roboto", 0, e.target.value)} // Example for the first font
//           placeholder="Type something..."
//           className="border border-gray-300 rounded-lg px-4 py-3 w-96 text-center text-xl"
//         />
//       </div>

//       <div className="mt-8 flex flex-wrap gap-6 w-full mb-4 justify-center">
//         {fonts.map((font, index) => (
//           <div
//             key={index}
//             className="w-[30%] min-w-[280px] p-5 gap-4 shadow-md bg-white text-center rounded-lg flex flex-col items-center"
//           >
//             <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: font.name }}>
//               {font.name}
//             </h3>
//             <input
//               type="text"
//               value={texts[index] || ""} // Display the text entered for each font
//               onChange={(e) =>
//                 handleTyping(font.name, index, e.target.value) // Update text for each font with debounced loading
//               }
//               placeholder="Type here..."
//               // Applying the font directly through inline style
//               style={{ fontFamily: font.name }}
//               className="border border-gray-300 rounded-lg p-3 w-full text-xl"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



