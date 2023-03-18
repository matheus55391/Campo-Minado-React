import SquareBox from "./components/SquareBox";

function App() {
  return (
    <div className="flex flex-wrap">
      <SquareBox isBomb={true} />
      <SquareBox isBomb={false} />
      <SquareBox isBomb={false} />
      <SquareBox isBomb={true} />
      <SquareBox isBomb={false} />
      <SquareBox isBomb={false} />
      <SquareBox isBomb={false} />
      <SquareBox isBomb={false} />
      <SquareBox isBomb={true} />
    </div>
  );
}

export default App;
