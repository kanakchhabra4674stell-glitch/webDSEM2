// ...existing code...
import React, { useState } from 'react';

function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <h2>Name : {name}</h2>
      <h2>Email : {email}</h2>
    </div>
  );
}

export default Input;
// ...existing code...