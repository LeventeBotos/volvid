"use client";

const Buttons = () => {
  const makeApiCall = async () => {
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <button onClick={makeApiCall}>
      <span>API</span>
    </button>
  );
};

export default Buttons;
