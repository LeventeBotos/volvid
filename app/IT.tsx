"use client";

import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const ITLightbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>
        <span>Galéria</span>
      </button>
      <FsLightbox toggler={toggler} sources={["/images/IT/1.webp"]} />
    </div>
  );
};

export default ITLightbox;
