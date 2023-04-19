import { useContext } from "react";
import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button } from "@mui/material";
import Form from "./Form";
import { CounterContext } from "./Context";
import Contador from "./Contador";
import { ContainerContador } from "./styles";

function App() {

  const counterData = useContext(CounterContext);

  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <ContainerContador>
          <Contador />
          <div>
            <Button variant="outlined" onClick={() => counterData.resta()}>
              -
            </Button>
            <Button variant="outlined" onClick={() => counterData.suma()}>
              +
            </Button>
          </div>
        </ContainerContador>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
