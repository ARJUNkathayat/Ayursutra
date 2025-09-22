"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/Components/navbar";
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const params = useParams();
  const userId = params?.id as string;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (userId) {
      axios.get(`/api/dashboard/patient/${userId}`).then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      });
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      axios.get(`/api/readCookie`).then((res) => {
        console.log("Cookie data", res.data.data);
      });
    }
  }, [userId]);

  // Dummy chart data
  const sessionsBarData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Sessions Completed',
        data: [3, 5, 2, 8, 4, 6],
        backgroundColor: 'rgba(107, 142, 35, 0.7)',
        borderColor: '#6b8e23',
        borderWidth: 2,
        borderRadius: 8,
      }
    ]
  };

  const therapyLineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Wellness Score',
        data: [6, 7, 5, 8, 6, 9, 7],
        borderColor: '#d4af37',
        backgroundColor: 'rgba(212, 175, 55, 0.2)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#d4af37',
        pointBorderColor: '#2d5016',
        pointBorderWidth: 2,
      }
    ]
  };

  const statusDoughnutData = {
    labels: ['Completed', 'Scheduled', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [65, 20, 10, 5],
        backgroundColor: [
          '#22c55e',
          '#d4af37',
          '#f59e0b',
          '#ef4444'
        ],
        borderColor: '#2d5016',
        borderWidth: 2,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#2d5016',
          font: { size: 12, weight: '600' }
        }
      },
      title: {
        display: true,
        color: '#2d5016',
        font: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#2d5016' },
        grid: { color: 'rgba(212, 175, 55, 0.2)' }
      },
      y: {
        ticks: { color: '#2d5016' },
        grid: { color: 'rgba(212, 175, 55, 0.2)' },
        beginAtZero: true
      }
    }
  };

  if (!data) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 100%)'
        }}
      >
        <div className="text-center">
          <div 
            className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: '#d4af37' }}
          ></div>
          <p 
            className="text-xl font-semibold"
            style={{ color: '#2d5016' }}
          >
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #f7f3e9 0%, #e8dcc0 50%, #d4e7d4 100%)'
      }}
    >
      <Navbar/>
      <div className="w-full h-1" 
           style={{ background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513)' }}></div>

      <div className="p-6 sm:p-8 max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl font-bold mb-2"
            style={{ 
              color: '#2d5016',
              textShadow: '1px 1px 2px rgba(212, 175, 55, 0.2)'
            }}
          >
            Patient Dashboard
          </h1>
          <div 
            className="w-24 h-px mx-auto"
            style={{ background: '#d4af37' }}
          ></div>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Sessions', value: '28', color: '#6b8e23', icon: '📅' },
            { label: 'Completed', value: '18', color: '#22c55e', icon: '✅' },
            { label: 'Upcoming', value: '6', color: '#d4af37', icon: '⏰' },
            { label: 'Wellness Score', value: '8.5/10', color: '#8b4513', icon: '⭐' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                border: `2px solid ${stat.color}30`
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: '#2d5016' }}>
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Patient Information Card */}
          <div className="lg:col-span-1 space-y-8">
            <div 
              className="shadow-xl rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                border: '2px solid #d4af37'
              }}
            >
              {/* Profile Header */}
              <div 
                className="p-6 text-center"
                style={{
                  background: 'linear-gradient(135deg, #d4af37, #f4e6a1)'
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                  style={{ 
                    background: '#2d5016',
                    color: 'white'
                  }}
                >
                  {data.firstName?.charAt(0)}{data.lastName?.charAt(0)}
                </div>
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: '#2d5016' }}
                >
                  {data.firstName} {data.lastName}
                </h2>
              </div>

              {/* Patient Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded mr-3"
                    style={{ background: '#6b8e23' }}
                  ></div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#2d5016' }}>Gender</p>
                    <p className="font-semibold" style={{ color: '#6b8e23' }}>{data.gender}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded mr-3"
                    style={{ background: '#8b4513' }}
                  ></div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#2d5016' }}>Age</p>
                    <p className="font-semibold" style={{ color: '#8b4513' }}>{data.age} years</p>
                  </div>
                </div>

                {data.medicalHistory && (
                  <div 
                    className="p-4 rounded-xl mt-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.03))',
                      border: '1px solid rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    <p className="text-sm font-medium mb-2" style={{ color: '#2d5016' }}>Medical History</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#2d5016' }}>{data.medicalHistory}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Session Status Doughnut Chart */}
            <div 
              className="shadow-xl rounded-2xl p-6"
              style={{
                background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                border: '2px solid #8b4513'
              }}
            >
              <h3 
                className="text-xl font-bold mb-4 text-center"
                style={{ color: '#2d5016' }}
              >
                Session Status Overview
              </h3>
              <div className="h-64">
                <Doughnut 
                  data={statusDoughnutData} 
                  options={{
                    ...chartOptions,
                    plugins: {
                      ...chartOptions.plugins,
                      title: { display: false }
                    }
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Charts and Sessions Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Charts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Weekly Sessions Bar Chart */}
              <div 
                className="shadow-xl rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                  border: '2px solid #6b8e23'
                }}
              >
                <h3 
                  className="text-lg font-bold mb-4"
                  style={{ color: '#2d5016' }}
                >
                  Weekly Sessions
                </h3>
                <div className="h-64">
                  <Bar 
                    data={sessionsBarData} 
                    options={{
                      ...chartOptions,
                      plugins: {
                        ...chartOptions.plugins,
                        title: { display: false }
                      }
                    }} 
                  />
                </div>
              </div>

              {/* Wellness Score Line Chart */}
              <div 
                className="shadow-xl rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                  border: '2px solid #d4af37'
                }}
              >
                <h3 
                  className="text-lg font-bold mb-4"
                  style={{ color: '#2d5016' }}
                >
                  Daily Wellness Score
                </h3>
                <div className="h-64">
                  <Line 
                    data={therapyLineData} 
                    options={{
                      ...chartOptions,
                      plugins: {
                        ...chartOptions.plugins,
                        title: { display: false }
                      }
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Sessions List */}
            <div 
              className="shadow-xl rounded-2xl p-6 sm:p-8"
              style={{
                background: 'linear-gradient(145deg, #fdfcf7 0%, #f9f6ea 100%)',
                border: '2px solid #6b8e23'
              }}
            >
              {/* Sessions Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 
                  className="text-2xl font-bold"
                  style={{ color: '#2d5016' }}
                >
                  Treatment Sessions
                </h2>
                <div 
                  className="px-4 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: '#6b8e23',
                    color: 'white'
                  }}
                >
                  {data.sessions?.length || 0} Sessions
                </div>
              </div>

              {/* Sessions List */}
              {data.sessions?.length > 0 ? (
                <div className="space-y-4">
                  {data.sessions.map((session: any, idx: number) => {
                    const statusColors = {
                      'completed': { bg: '#22c55e', text: 'white' },
                      'scheduled': { bg: '#d4af37', text: '#2d5016' },
                      'cancelled': { bg: '#ef4444', text: 'white' },
                      'pending': { bg: '#f59e0b', text: 'white' }
                    };
                    
                    const statusColor = statusColors[session.status as keyof typeof statusColors] || 
                                     { bg: '#6b7280', text: 'white' };

                    return (
                      <div
                        key={idx}
                        className="rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(107, 142, 35, 0.05), rgba(107, 142, 35, 0.02))',
                          border: '1px solid rgba(107, 142, 35, 0.2)'
                        }}
                      >
                        {/* Session Header */}
                        <div className="flex items-center justify-between mb-4">
                          <h3 
                            className="text-lg font-bold"
                            style={{ color: '#2d5016' }}
                          >
                            Session #{idx + 1}
                          </h3>
                          <span 
                            className="px-3 py-1 rounded-full text-sm font-semibold"
                            style={{
                              background: statusColor.bg,
                              color: statusColor.text
                            }}
                          >
                            {session.status?.toUpperCase()}
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Doctor Info */}
                          <div 
                            className="p-4 rounded-lg"
                            style={{
                              background: 'rgba(255, 255, 255, 0.7)',
                              border: '1px solid rgba(212, 175, 55, 0.3)'
                            }}
                          >
                            <h4 
                              className="font-semibold mb-2 text-sm uppercase tracking-wide"
                              style={{ color: '#2d5016' }}
                            >
                              Doctor Information
                            </h4>
                            <p className="font-bold text-lg mb-1" style={{ color: '#d4af37' }}>
                               {session.doctor.name}
                            </p>
                            <p className="text-sm mb-1" style={{ color: '#2d5016' }}>
                              {session.doctor.specialization}
                            </p>
                            <p className="text-xs" style={{ color: '#6b8e23' }}>
                              {session.doctor.experienceYears} years experience
                            </p>
                          </div>

                          {/* Therapy Info */}
                          <div 
                            className="p-4 rounded-lg"
                            style={{
                              background: 'rgba(255, 255, 255, 0.7)',
                              border: '1px solid rgba(107, 142, 35, 0.3)'
                            }}
                          >
                            <h4 
                              className="font-semibold mb-2 text-sm uppercase tracking-wide"
                              style={{ color: '#2d5016' }}
                            >
                              Therapy Details
                            </h4>
                            <p className="font-bold text-lg" style={{ color: '#6b8e23' }}>
                              {session.therapy.name}
                            </p>
                            {session.therapy.description && (
                              <p className="text-xs mt-1" style={{ color: '#2d5016' }}>
                                {session.therapy.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div 
                    className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(107, 142, 35, 0.1), rgba(107, 142, 35, 0.05))',
                      border: '2px solid rgba(107, 142, 35, 0.3)'
                    }}
                  >
                    <div 
                      className="w-8 h-8 rounded"
                      style={{ background: '#6b8e23' }}
                    ></div>
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: '#2d5016' }}
                  >
                    No Sessions Yet
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: '#6b8e23' }}
                  >
                    Your treatment sessions will appear here once scheduled.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <div 
            className="max-w-md mx-auto p-4 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(107, 142, 35, 0.08))',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <p 
              className="text-sm font-medium italic"
              style={{ color: '#2d5016' }}
            >
              "Your journey to wellness is our priority"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
