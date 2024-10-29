"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingIcons from "react-loading-icons";

const RegisterButton = () => {
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const [details, setDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      setLoading(true);
      getData();
    } else {
      setLoading(false);
    }
  }, [status]);

  const getData = async () => {
    setLoading(true);
    const res = await fetch("/api/userInfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

      Authorization: `Bearer ${session?.accessTokenBackend}`,
      "Access-Control-Allow-Origin": "*",
    });

    const data = await res.json();
    setDetails(data);
    setLoading(false);
  };

  const handleClick = () => {
    setLoading(true);
    if (details?.user?.hasFilledDetails == true) {
      setLoading(false);
      router.push("/explore");
    } else {
      setLoading(false);
      router.push("/userDetails");
    }
  };

  return (
    <div>
    
      {status !== "authenticated" ? (
        <button
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:text-black"
          onClick={() => {
            setLoading(true);
            signIn("google");
          }}
        >
          {loading ? <LoadingIcons.Oval /> : "Register!"}
        </button>
      ) : (
        <button
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:text-black"
          onClick={() => {
            handleClick();
          }}
        >
          {loading ? (
            <LoadingIcons.Oval />
          ) : 
            "Get Started"
         }
        </button>
      )}
  
    </div>
  );
};
export default RegisterButton;
