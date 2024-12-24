import React from "react";
import "./index.css";

const Table = () => {
  const data = [
    {
      name: "xyz",
      details: "For one of the client",
      contact: "+91-234567895",
      email: "xyz@gmail.com",
      paymentMethod: "Online/Card",
    },
  
    {
      name: "xyz1",
      details: "For one of the client2",
      contact: "+91-4567891235",
      email: "xyz123@gmail.com",
      paymentMethod: "Online/Card",
    },
    {
      name: "chandu",
      details: "For one of the client2",
      contact: "+91-4567891678",
      email: "xyz123@gmail.com",
      paymentMethod: "Online/Card",
    },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Organization name</th>
            <th>Organization details</th>
            <th>Organization contact number</th>
            <th>Organization mail id</th>
            <th>Organization payment method</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.contact}</td>
              <td>{item.email}</td>
              <td>{item.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table