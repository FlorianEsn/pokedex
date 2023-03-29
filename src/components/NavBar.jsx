import React from "react";

function NavBar({ pokemonIndex, pokemonList, onPreviousClick, onNextClick }) {
  const showPrevButton = pokemonIndex > 0;
  const showNextButton = pokemonIndex < pokemonList.length - 1;
  return (
    <div>
      {showPrevButton && <button onClick={onPreviousClick}>Précédent</button>}
      {showNextButton && <button onClick={onNextClick}>Suivant</button>}
    </div>
  );
}

export default NavBar;
