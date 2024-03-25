import axios from "axios";
import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [kanyeQuote, setKanyeQuote] = useState<string | null>(null);

  useEffect(() => {
    axios.get("https://api.kanye.rest/").then(
      (response) => setKanyeQuote(response.data.quote),
      (error) => console.error("Kanye quote alınamadı.", error)
    );
  }, []);

  return (
    <footer className="flex justify-between p-8 bg-primary text-gray5 text-center bottom-0 md:px-16 md:py-4 ">
      <div>All rights reserved © 2024</div>
      <div className="hidden sm:flex gap-2">
        Kanye Says:
        {kanyeQuote !== null ? <p>{kanyeQuote}</p> : <p>Loading...</p>}
      </div>
    </footer>
  );
};

export default Footer;