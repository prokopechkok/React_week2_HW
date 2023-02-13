import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  let temperature = 20;

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently ${temperature}°C in ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <dir className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} placeholder="Type a city" />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </dir>
  );
}
