import { GifList } from "./gifs/components/GifList";
import { PreviousSearchers } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermClick, gifs } = useGifs();

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
      <GifList gifs={gifs} />
    </>
  );
};
