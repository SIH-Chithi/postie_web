"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [employeID, setEmployeID] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://post.rootski.live/employee/employee_login/",
        {
          Employee_id: employeID,
          password,
        }
      );

      console.log("Response:", response);

      if (response.status === 200) {
        const { access, refresh, type } = response.data;
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        localStorage.setItem("type", type);

        switch (type) {
          case "spo":
            router.push("/spo");
            break;
          case "hpo":
            router.push("/hpo");
            break;
          case "ich":
            router.push("/ich");
            break;
          case "nsh":
            router.push("/nsh");
            break;
          default:
            setError("Error: Unknown user type");
        }
      } else {
        setError("Error: Something went wrong");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Error: Please check your credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-screenBackgroundColor flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">POSTIE</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="employeID"
            >
              Employee ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="employeID"
              type="text"
              placeholder="Employee ID"
              value={employeID}
              onChange={(e) => setEmployeID(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center mx-auto justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
