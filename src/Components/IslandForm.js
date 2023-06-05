import { useState } from "react";

export default function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelPhone = (e) => {
    setPhone(e.target.value);
  };
  const handelSubmit = () => {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`
    );
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>

      <input placeholder="Type Full Name" onChange={handelName} />
      <input
        placeholder="Type Phone Number"
        type="tel"
        onChange={handelPhone}
      />
      <button className="book" onClick={handelSubmit}>
        Book for today!
      </button>
    </div>
  );
}
