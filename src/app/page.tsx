'use client'
import { useState } from "react";

export default function ShowFonts() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const fonts = [
    { name: "Arial", class: 'font-[Arial]' },
    { name: "Verdana", class: 'font-[Verdana]' },
    { name: "Helvetica", class: 'font-[Helvetica]' },
    { name: "Times New Roman", class: 'font-["Times_New_Roman"]' },
    { name: "Courier New", class: 'font-["Courier_New"]' },
    { name: "Georgia", class: 'font-[Georgia]' },
    { name: "Palatino", class: 'font-[Palatino]' },
    { name: "Garamond", class: 'font-[Garamond]' },
    { name: "Bookman", class: 'font-[Bookman]' },
    { name: "Comic Sans MS", class: 'font-["Comic_Sans_MS"]' },
    { name: "Trebuchet MS", class: 'font-["Trebuchet_MS"]' },
    { name: "Arial Black", class: 'font-["Arial_Black"]' },
    { name: "Impact", class: 'font-[Impact]' },
    { name: "Webdings", class: 'font-[Webdings]' },
    { name: "Monospace", class: 'font-mono' },
    { name: "Serif", class: 'font-serif' },
    { name: "Sans", class: 'font-sans' },
    { name: "Italic", class: 'italic' },
    { name: "Normal", class: 'not-italic' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Enter Your Text</h1>

      <div className="flex gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="border border-gray-300 rounded-lg px-4 py-3 w-full max-w-md"
        />
        <button
          onClick={() => setShow(true)}
          className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Show Fonts
        </button>
      </div>

      {show && (
        <div className="mt-8 flex flex-wrap gap-6 w-full mb-4 justify-center">
          {fonts.map((font, index) => (
            <div
              key={index}
              className={`w-[30%] p-3 flex flex-col items-start gap-2 border rounded-lg shadow-sm bg-white ${font.class}`}
            >
              <h3 className="font-semibold text-lg">{font.name}</h3>
              <p className="text-xl">{text || "Preview Text"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
