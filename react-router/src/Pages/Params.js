import { useParams } from 'react-router-dom';

const Params = () => {
  const param = useParams();

  return (
    <div>
      <h1>{param.paramsId}</h1>
      <h2>Hello this is params page</h2>
    </div>
  );
};

export default Params;
