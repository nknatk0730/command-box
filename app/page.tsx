import { Command } from "./components/command";

export default async function Home() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => res.json());


  return (
    <Command source={pokemons.results} />
  );
}
