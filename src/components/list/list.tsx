import { useCallback, useEffect, useMemo, useState } from 'react';
import { Character } from '../../model/characters';
import { Card } from '../card/card';
import { ApiRepo } from '../../services/api.repo';

// type Props = {
//   info: Character;
// };

export function List() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const repo = useMemo(() => new ApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    try {
      const loadedCharacters = await repo.getCharacters();
      setCharacters(loadedCharacters);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <>
      <ul className="characters-list row list-unstyled">
        {characters.map((item) => (
          <Card info={item}></Card>
        ))}
      </ul>
    </>
  );
}
