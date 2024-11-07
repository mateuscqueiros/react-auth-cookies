import { useParams } from 'react-router-dom';

export function MenuId() {
  const params = useParams();

  return <h1>Menu interno: {params.id}</h1>;
}
