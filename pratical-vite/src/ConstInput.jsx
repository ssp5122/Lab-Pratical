import { useState } from "react";

export default function ConstInput() {
    const [name, setName] = useState("Enter name");

    return (
        <div style={{ padding: 16, fontFamily: "system-ui" }}>
            <h2>{name}</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: 8, minWidth: 220 }}
            />
        </div>
    );
}

