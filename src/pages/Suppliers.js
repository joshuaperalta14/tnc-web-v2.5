import React from 'react';
import '../pages/Suppliers.css';
import Sidebar from "../components/Sidebar";
import { FaTruck } from 'react-icons/fa';

const SuppliersPage = () => {
  const suppliers = [
    {
      name: 'Jayson Santa Ana',
      address: ' 2200 Espana corner Josefina Street, Sampaloc, Manila',
      contact: 'santaanajayson96@gmail.com'
    },
    {
      name: 'Ash Custodio',
      address: '13-F Sinag Street, Highway Hills, Mandaluyong',
      contact: 'custudio_ash72@gmail.com'
    },
    {
      name: 'Elaine Madrid',
      address: 'No.12 P.Burgos St., 1980 Tanay, Rizal',
      contact: 'elaine26madrid@gmail.com'
    },
    {
      name: 'Stephanie Guinto',
      address: 'Peninsula Court Building 1200, Makati City',
      contact: 'stephguinto_22@gmail.com'
    },
    {
      name: 'Danilo Cuizon',
      address: '236 6th Street 11th Avenue Grace Park 1400, Caloocan City',
      contact: 'danilocuizon45@gmail.com'
    },
    {
      name: 'Marco Rosales',
      address: 'Cva Building 44 National Road Putatan 1770, Muntinlupa City',
      contact: 'marc_rosales@gmail.com'
    },
    {
      name: 'Angeline Palma',
      address: '3F Hildevanne Food Corporation, 254 P. Burgos Street, Tacloban',
      contact: 'angelpalma13@gmail.com'
    },
  ];

  return (
    <div className="suppliers-background">
      <Sidebar />
      <div className="suppliers-container">
      <h1 className="suppliers-title">Suppliers&nbsp;<FaTruck /></h1>
      <div className="supplier-list">
        {suppliers.map((supplier, index) => (
          <div className="supplier-item" key={index}>
            <h3 className="supplier-name">{supplier.name}</h3>
            <p className="supplier-text">Address: {supplier.address}</p>
            <p className="supplier-text">Contact: {supplier.contact}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SuppliersPage;
