"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    diet: "none",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Dziękujemy za przesłanie odpowiedzi! 💌");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 mt-10 w-full max-w-md">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Imię i nazwisko</label>
        <input
          name="name"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pink-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Czy będziesz obecny/a?</label>
        <select
          name="attending"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pink-300"
        >
          <option value="yes">Tak</option>
          <option value="no">Nie</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Preferencje żywieniowe</label>
        <select
          name="diet"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-pink-300"
        >
          <option value="none">Brak preferencji</option>
          <option value="vegetarian">Wegetariańska</option>
          <option value="vegan">Wegańska</option>
          <option value="allergy">Alergie (dopisz w komentarzu)</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded transition"
      >
        Wyślij potwierdzenie
      </button>
    </form>
  );
}
