import React from "react";

import Banner from "../Banner/Banner";

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>Sorry, the correct answer is {answer}</p>
    </Banner>
  );
}

export default LostBanner;
