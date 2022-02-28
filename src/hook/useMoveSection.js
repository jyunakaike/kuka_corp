import React from "react";

export const useMoveSection = (id) => {
    let element = document.getElementById(id)
    element.scrollIntoView({behavior: "smooth"})
  }