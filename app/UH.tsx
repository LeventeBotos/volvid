"use client";

import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const UHLightbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>
        <span>Galéria</span>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/UH/1.webp",
          "/images/UH/2.webp",
          "/images/UH/3.webp",
          "/images/UH/4.webp",
          "/images/UH/5.webp",
          "/images/UH/6.webp",
          "/images/UH/7.webp",
          "/images/UH/8.webp",
          "/images/UH/9.webp",
        ]}
      />
    </div>
  );
};

export default UHLightbox;
