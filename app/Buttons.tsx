"use client";
import axios from "axios";
import { NextRequest } from "next/server";

const Buttons = () => {
  const data = {
    name: "levi",
  };
  const options = {
    method: "GET",
    url: "/api/email",
    params: {
      name: "Levi",
    },
    data: data,
  };

  const makeApiCall = async () => {
    // await fetch("/api/email", {
    //   method: "POST",
    //   body: JSON.stringify({ hello: "world" }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const ret = await axios.request(options);
    const ret = await axios(options);
    console.log(ret);
    console.log("done");
  };
  return (
    <button onClick={makeApiCall}>
      <span>API</span>
    </button>
  );
};

export default Buttons;
