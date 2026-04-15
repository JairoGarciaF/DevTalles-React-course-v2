interface Props {
  searches: string[];
  onLabelClick: (search: string) => void;
}
export const PreviousSearchers = ({ searches, onLabelClick }: Props) => {
  return (
    <>
      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
          {searches.map((term, index) => (
            <li key={index} onClick={() => onLabelClick(term)}>
              {term}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
