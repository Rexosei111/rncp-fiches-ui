import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useAuthToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("access_token")));
  }, []);

  const saveToken = (token) => {
    // Save the access token to localStorage
    window.localStorage.setItem("access_token", JSON.stringify(token));

    // Set the token state
    setToken(token);
  };

  const removeToken = () => {
    // Remove the access token from localStorage
    window.localStorage.removeItem("access_token");

    // Set the token state to null
    setToken(null);
  };

  return {
    token,
    saveToken,
    removeToken,
  };
};

export const getProfile = async () => {
  const { token } = useAuthToken();
  let profile = null;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    profile = data;
  } catch (e) {
    console.log(e);
  }
  return profile;
};

export const useProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const storageProfile = localStorage.getItem("profile");
    setProfile(JSON.parse(storageProfile));
  }, []);

  const saveProfile = (updated_profile) => {
    // Save the access token to localStorage
    window.localStorage.setItem("profile", JSON.stringify(updated_profile));

    // Set the token state
    setProfile(updated_profile);
  };

  const removeProfile = () => {
    // Remove the access token from localStorage
    window.localStorage.removeItem("profile");

    // Set the token state to null
    setProfile(null);
  };

  return {
    profile,
    saveProfile,
    removeProfile,
  };
};
