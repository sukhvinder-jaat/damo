import "bootstrap/dist/css/bootstrap.min.css";
import { FormSubmit } from "./components/FormSubmit";
import { SliderCard } from "./components/SliderCard";
import FormComponent from "./components/FormComponent ";
import { Form } from "./components/Form";
import { AnimationDamo } from "./components/AnimationDamo";
import { Dropdown_animated } from "./components/Dropdown_animated";
import { TextShadow } from "./components/TextShadow";
import TodoList from "./components/TodoList";
import Stopwatch from "./components/Stopwatch";
import DigitalWatch from "./components/DigitalWatch";
import Calculator from "./components/Calculator";
function App() {
  return (
    <div className=" container">
      {/* <FormSubmit/> */}
      {/* <TextShadow /> */}
      <TodoList />
      <Stopwatch />
      <DigitalWatch />
      <Calculator/>
      {/* <SliderCard /> */}
      {/* <FormComponent /> */}
      {/* <Form/> */}
      {/* <AnimationDamo /> */}
      {/* <Dropdown_animated /> */}
    </div>
  );
}

export default App;
