import { evaluate } from "mathjs";

export interface CalculatorState {
  expression: string;
}

const initialState: CalculatorState = {
  expression: "0",
};

const calculatorReducer = (state = initialState, action?: any) => {
  switch (action.type) {
    case "UPDATE_EXPRESSION":
      return { ...state, expression: action.payload };
    case "CLEAR_EXPRESSION":
      return { ...state, expression: "0" };
    case "DELETE_EXPRESSION": {
      if (state.expression.length > 0) {
        const expression_edited = state.expression.slice(0, -1);
        return { ...state, expression: expression_edited.toString() };
      }
      else return { ...state, expression:"Error"}
    }
    case "CALCULATE_RESULT":
      try {
        const result = evaluate(state.expression);
        return { ...state, expression: result.toString() };
      } catch (error) {
        return { ...state, expression: "Error" };
      }
    default:
      return state;
  }
};

export default calculatorReducer;
