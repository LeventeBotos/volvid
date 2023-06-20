"use client";

import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const MTLightbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>
        <span>Gallery</span>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/MT/1.webp",
          "/images/MT/2.webp",
          "/images/MT/3.webp",
          "/images/MT/4.webp",
          "/images/MT/5.webp",
          "/images/MT/6.webp",
        ]}
      />
    </div>
  );
};

export default MTLightbox;
