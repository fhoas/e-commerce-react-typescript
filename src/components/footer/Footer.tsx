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
    <footer className="bg-primaryWhite text-primaryBlack p-4 text-center bottom-0">
      {kanyeQuote !== null ? <p>{kanyeQuote}</p> : <p>Loading...</p>}
    </footer>
  );
};

export default Footer;
