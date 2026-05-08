import { useState } from "react";

function Input() {
  const [name, setName] = useState("Enter name");

  return (
    <div>
      <h2>{name}</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Input;
