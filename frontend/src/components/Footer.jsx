import { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import './Footer.css';

function Footer() {
  const [data, setData] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:27017/api/establishments"); // Update the URL to match the server route
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="footerproper">
        <ul>
          <a href="https://rzyrusg.vercel.app">About Dev</a>
          <p>{data.onlineMessage}</p>
        </ul>
      </div>
    </>
  );
}

export default Footer;