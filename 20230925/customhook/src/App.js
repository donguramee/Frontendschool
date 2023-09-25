import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./Hooks/useMouseLocation";

function App() {
  const mouseLocation = useMouseLocation();

  return (
    <div>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: mouseLocation.y > 100 ? "royalblue" : "hotpink",
        }}
      ></div>
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
