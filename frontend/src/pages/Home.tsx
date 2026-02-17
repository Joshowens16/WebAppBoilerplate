import { useState } from "react";
import api from "../lib/api";

function Home() {
  const [message, setMessage] = useState("");

  async function handleClick() {
    const res = await api.get("/api/hello");
    setMessage(res.data.message);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <div className="flex gap-2">
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Call API
          </button>
          <button
            onClick={() => setMessage("")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Clear API Results
          </button>
        </div>
        {message && <p className="mt-4 text-gray-800">{message}</p>}
      </div>
    </div>
  );
}

export default Home;
