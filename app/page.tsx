"use client";

import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  interface DecodedToken {
    exp: number;
  }

  //Is Token expired ->
  const isTokenExpired = (token: string): boolean => {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const now = Math.floor(Date.now() / 1000);
      if (decoded.exp < now) {
        return true;
      } else return false;
    } catch (error) {
      console.log(error);
      return true;
    }
  };

  const refreshAccessToken = async () => {
    const refreshToken = await localStorage.getItem("refreshToken");
    if (refreshToken) {
      try {
        const response = await axios.post(
          "https://post.rootski.live/employee/access_byrefresh/",
          {
            refresh: refreshToken,
          }
        );
        const newAcessToken = response.data.access;

        await localStorage.setItem("accessToken", newAcessToken);
        return true;
      } catch (error) {
        console.log("Token refresh failed", error);
        return false;
      }
    }
  };

  const checkTokens = async () => {
    setLoading(true);
    try {
      const refreshToken = await localStorage.getItem("refreshToken");
      const accessToken = await localStorage.getItem("accessToken");
      const type = await localStorage.getItem("type");

      if (accessToken && !isTokenExpired(accessToken)) {
        if (type === "spo") router.replace("/spo");
        else if (type === "hpo")
          router.replace("/hpo");
        else if (type === "ich")
          router.replace("/ich");
        else if (type === "nsh")
          router.replace("/nsh");
      } else if (refreshToken) {
        const refreshed = await refreshAccessToken();
        if (refreshed) {
          const newAccessToken = await localStorage.getItem("accessToken");
          const newType = await localStorage.getItem("type");
          if (newAccessToken && newType === "spo") {
            router.replace("/spo");
          } else if (newAccessToken && newType === "hpo") {
            router.replace("/hpo");
          } else if (newAccessToken && newType === "ich") {
            router.replace("/ich");
          } else if (newAccessToken && newType === "nsh") {
            router.replace("/nsh");
          }
        } else {
          router.replace("/auth/signIn");
        }
      } else {
        router.replace("/auth/signIn");
      }
    } catch (error) {
      console.log("Error checking tokens:", error);
      router.replace("/auth/signIn");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkTokens();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-screenBackgroundColor flex flex-col justify-center items-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center">POSTIE</h2>
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  return null;
}

export default Page;
