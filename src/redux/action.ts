

export const updateExpression = (expression: string) => {
  return {
    type: "UPDATE_EXPRESSION",
    payload: expression,
  };
};

export const calculateResult = () => {
  return {
    type: "CALCULATE_RESULT",
  };
};
export const deleteExpression= () => {
  return {
    type: "DELETE_EXPRESSION",

  };
};

export const clearExpression = () => {
  console.log("clearing")
  return {
    type: "CLEAR_EXPRESSION",
  };
};
