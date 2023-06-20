"use client";

import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const RTLightbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>
        <span>Galerie</span>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/RT/1.webp",
          "/images/RT/2.webp",
          "/images/RT/3.webp",
          "/images/RT/4.webp",
          "/images/RT/5.webp",
          "/images/RT/6.webp",
          "/images/RT/7.webp",
          "/images/RT/8.webp",
          "/images/RT/9.webp",
          "/images/RT/10.webp",
          "/images/RT/11.webp",
        ]}
      />
    </div>
  );
};

export default RTLightbox;
