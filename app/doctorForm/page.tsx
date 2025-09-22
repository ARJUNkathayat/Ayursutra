"use client";
import { useState, useEffect } from "react";

export default function DoctorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [therapyIds, setTherapyIds] = useState<number[]>([]);
  const [therapies, setTherapies] = useState<{id: number, name: string}[]>([]);
  const [message, setMessage] = useState("");

  // Fetch therapies from backend to show in multi-select
  useEffect(() => {
    fetch("/api/Therapy") // You need an API to list therapies
      .then(res => res.json())
      .then(data => setTherapies(data.data),)
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      name,
      email,
      phone,
      specialization,
      experienceYears: Number(experienceYears),
      therapyIds,
    };

    try {
      const res = await fetch("/api/doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Doctor added successfully!");
        setName(""); setEmail(""); setPhone(""); setSpecialization(""); setExperienceYears(""); setTherapyIds([]);
      } else {
        setMessage("Error: " + data.error);
      }
    } catch (err) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Doctor</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Specialization"
          value={specialization}
          onChange={e => setSpecialization(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          placeholder="Experience Years"
          value={experienceYears}
          onChange={e => setExperienceYears(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        {/* Multi-select therapies */}
        <select
          multiple
          value={therapyIds.map(String)}
          onChange={e => setTherapyIds(Array.from(e.target.selectedOptions, o => Number(o.value)))}
          className="w-full border p-2 rounded"
        >
          {therapies.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Add Doctor
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
