"use client"
import axios from "axios";
import { useState, useEffect } from "react";

export default function Practitioners() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const res = await axios.get("/api/doctor/list");
                console.log(res.data);
                setDoctors(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching doctors:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []); 
    if (loading) {
        return <div>Loading practitioners...</div>;
    }

    if (error) {
        return <div>Error loading practitioners: {error}</div>;
    }

    return (
        <div>
            <h1>Practitioners</h1>
            <div>
                {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                        <div key={doctor.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                            <h3>{doctor.name}</h3>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Experience:</strong> {doctor.experienceYears} years</p>
                            <p><strong>Email:</strong> {doctor.email}</p>
                            <p><strong>Phone:</strong> {doctor.phone}</p>
                            <p><strong>Available Slots:</strong> {doctor.availableSlots}</p>
                        </div>
                    ))
                ) : (
                    <p>No practitioners found.</p>
                )}
            </div>
        </div>
    );
}
