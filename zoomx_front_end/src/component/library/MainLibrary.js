import React from 'react';
import LibraryImage from './image/LibraryImage';
import LibraryLookup from './lookup/LibraryLookup';
import ModalLookup from './lookup/ModalLookup';
import LibraryVideo from './video/LibraryVideo';
export default function MainLibrary({ isPage }) {
    return (
        <>
            {isPage == "lookup" && <ModalLookup />}
            {isPage == "image" && <LibraryImage />}
            {isPage == "video" && <LibraryVideo />}

        </>
    )
}