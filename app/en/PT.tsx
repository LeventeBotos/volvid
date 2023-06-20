"use client";

import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const PTLightbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>
        <span>Gallery</span>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/PT/1.webp",
          "/images/PT/2.webp",
          "/images/PT/3.webp",
        ]}
      />
    </div>
  );
};

export default PTLightbox;
