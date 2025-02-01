"use client"; // Required for interactive components

import React from "react";
import { motion } from "framer-motion";

const perfumes = [
  { name: "Luxury Oud", price: "$120", image: "/images/perfume1.jpg" },
  { name: "Floral Essence", price: "$95", image: "/images/perfume2.jpg" },
  { name: "Citrus Bliss", price: "$85", image: "/images/perfume3.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-bold">Discover Your Signature Scent</h1>
        <p className="mt-4 text-lg">Exquisite fragrances curated just for you</p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full">
          Shop Now
        </button>
      </section>
      
      {/* Featured Products */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Perfumes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perfumes.map((perfume, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-64 object-cover"
                />
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold">{perfume.name}</h3>
                  <p className="text-gray-500">{perfume.price}</p>
                  <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Perfume Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
