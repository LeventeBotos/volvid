"use client";

import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const LTLightbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>
        <span>Gallery</span>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/LT/1.webp",
          "/images/LT/2.webp",
          "/images/LT/3.webp",
          "/images/LT/4.webp",
          "/images/LT/5.webp",
          "/images/LT/6.webp",
          "/images/LT/7.webp",
          "/images/LT/8.webp",
          "/images/LT/9.webp",
          "/images/LT/10.webp",
          "/images/LT/11.webp",
        ]}
      />
    </div>
  );
};

export default LTLightbox;
