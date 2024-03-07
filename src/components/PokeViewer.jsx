import { useState, useEffect } from 'react';
const PokeViewer = () => {
  const [pokeImage, setPokeImage] = useState('');

  const getData = async () => {
    try {
      const maxPokemonId = 800; // Ajusta este valor según la cantidad total de Pokémon en la API
      const randomOffset = Math.floor(Math.random() * maxPokemonId);
      console.log(randomOffset);
      const response = await fetch(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomOffset}.png`
      );
      const data = await response;
      const randomPokemonUrl = data.url;
      return randomPokemonUrl;
    } catch (error) {
      console.error('Error al obtener Pokémon aleatorio:', error);
      return null;
    }
  };

  const fetchData = async () => {
    const randomUrl = await getData();
    console.log(randomUrl);
    setPokeImage(randomUrl);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='poke-container'>
      <h1>Poke Viewer</h1>
      <div className='image-container'>
        {pokeImage && <img src={pokeImage} alt='Pokemon' />}
      </div>
      <button onClick={fetchData}>Obtener otro Pokémon</button>
    </div>
  );
};

export default PokeViewer;
