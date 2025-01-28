import React from "react";
import "./Clients.css";

const clients = [
  {
    name: "Client A",
    logo: "https://via.placeholder.com/150", // Replace with actual logo URLs
  },
  {
    name: "Client B",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Client C",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Client D",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Client E",
    logo: "https://via.placeholder.com/150",
  },
];

const Clients = () => {
  return (
    <section className="clients-section">
      <h2 className="clients-title">My Clients</h2>
      <hr className="t_border my-4 ml-0 text-left" />
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="client-logo"
              onError={(e) => {
                // e.target.src = "https://via.placeholder.com/150"; // Fallback image
              }}
            />
            <p className="client-name">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
