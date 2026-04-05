import { CounterContext } from "./Context";

const Component1 = () => {
  const data = useContext(CounterContext);
  return <div>component4:{data}</div>;
};

export default Component1;
