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
    <footer className="flex justify-between px-8 py-4 bg-primary text-deepWhite text-center bottom-0">
      <div>All rights reserved © 2024</div>
      <div>{kanyeQuote !== null ? <p>{kanyeQuote}</p> : <p>Loading...</p>}</div>
    </footer>
  );
};

export default Footer;
