import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "London", "San Francisco", "Paris", "Tokyo"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
export default App;
