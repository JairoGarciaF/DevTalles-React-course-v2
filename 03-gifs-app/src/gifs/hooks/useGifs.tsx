import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query-action";

const MAX_PREVIOUS_TERMS = 8;
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifsResponse = await getGifsByQuery(term);
    setGifs(gifsResponse);
  };

  const handleSearch = async (query: string) => {
    const convertedQuery = query.toLowerCase();
    if (
      previousTerms.includes(convertedQuery) ||
      convertedQuery.trim() === "" ||
      previousTerms.length >= MAX_PREVIOUS_TERMS
    )
      return;

    setPreviousTerms(
      [convertedQuery, ...previousTerms].slice(0, MAX_PREVIOUS_TERMS),
    );

    const gifsResponse = await getGifsByQuery(convertedQuery);
    setGifs(gifsResponse);

    gifsCache.current[convertedQuery] = gifsResponse;
  };

  return {
    gifs,
    previousTerms,
    handleSearch,
    handleTermClick,
  };
};
