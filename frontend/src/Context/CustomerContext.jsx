import React, { createContext, useState, useEffect } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [CustomerName, setCustomerName] = useState(localStorage.getItem("name") || "");
  const [CustomerId, setCustomerId] = useState(localStorage.getItem("customerId") || "");

  useEffect(() => {
    localStorage.setItem("name", CustomerName);
  }, [CustomerName]);

  useEffect(() => {
    localStorage.setItem("customerId", CustomerId);
  }, [CustomerId]);

  return (
    <CustomerContext.Provider value={{ CustomerName, setCustomerName, CustomerId, setCustomerId }}>
      {children}
    </CustomerContext.Provider>
  );
};
