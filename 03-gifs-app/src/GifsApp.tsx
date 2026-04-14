import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      {/* header */}
      <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el GIF perfecto</p>
      </div>

      {/* search */}
      <div className="search-container">
        <input type="text" placeholder="Buscar GIFs" name="" id="" />
        <button>Buscar</button>
      </div>

      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />

            <h3>{gif.title}</h3>
            <p>
              {gif.width} x {gif.height} (1.5 MB)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
