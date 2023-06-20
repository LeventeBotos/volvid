"use client";

import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const HTLightbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>
        <span>Galéria</span>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/HT/1.webp",
          "/images/HT/2.webp",
          "/images/HT/3.webp",
          "/images/HT/4.webp",
          "/images/HT/5.webp",
          "/images/HT/6.webp",
          "/images/HT/7.webp",
          "/images/HT/8.webp",
          "/images/HT/9.webp",
        ]}
      />
    </div>
  );
};

export default HTLightbox;
