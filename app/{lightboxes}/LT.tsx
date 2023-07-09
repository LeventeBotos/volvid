"use client";

import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const LTLightbox = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <button onClick={() => setToggler(!toggler)}>
        <span>Galéria</span>
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/LT/1.webp",
          "/images/LT/2.webp",
          "/images/LT/3.webp",
        ]}
      />
    </div>
  );
};

export default LTLightbox;
