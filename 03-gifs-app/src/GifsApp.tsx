import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearchers } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

const MAX_PREVIOUS_TERMS = 8;

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["goku"]);
  const handleTermClick = (term: string) => {
    console.log("Term clicked:", term);
  };

  const handleSearch = (query: string) => {
    const convertedQuery = query.toLowerCase();
    if (
      previousTerms.includes(convertedQuery) ||
      convertedQuery.trim() === "" ||
      previousTerms.length >= MAX_PREVIOUS_TERMS
    )
      return;
    setPreviousTerms((prevTerms) => [convertedQuery, ...prevTerms]);
  };
  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el GIF perfecto"
      />

      <SearchBar
        placeholder="Busca tus gifs favoritos..."
        onQuery={handleSearch}
      />

      <PreviousSearchers
        searches={previousTerms}
        onLabelClick={handleTermClick}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
