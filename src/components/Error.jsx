import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>Something went wrong</h3>
      <h4>
        {err.status}: {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
