import { useDispatch, useSelector } from "react-redux";
import { decrementWitchCheckingAction, increment } from "../../../app/features/Counter/actions";
import styled from "styled-components";

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
  font-family: arial;
  margin: 60px auto;
`;
const Qty = styled.p`
  font-size: 22px;
  width: 600px;
`;
const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: darkslategrey;
  background-color: lightgreen;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  margin-top: 0;
  &:hover {
    opacity: 0.7;
  }
`;

const Description = styled.p`
  font-size: small;
  padding-top: 5px;
`;
const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <CardContainer>
        <Description>Contoh Redux </Description>
        <div style={{ display: "flex" }}>
          <Button onClick={() => dispatch(decrementWitchCheckingAction(1))}>-</Button>
          {""}
          <Qty>{count}</Qty>
          {""}
          <Button onClick={() => dispatch(increment(1))}>+</Button>
        </div>
      </CardContainer>
    </div>
  );
};
export default Counter;
