import React from "react";
import LibraryImage from "./image/LibraryImage";
import LibraryLookup from "./lookup/LibraryLookup";
import LibraryVideo from "./video/LibraryVideo";
export default function MainLibrary({ isPage }) {
  
  return (
    <>
      {isPage == "lookup" && <LibraryLookup />}
      {isPage == "image" && <LibraryImage />}
      {isPage == "video" && <LibraryVideo />}
    </>
  );
}
