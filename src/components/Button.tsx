import React from "react";

import PropTypes from "prop-types";
import { string } from "mathjs";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
interface ButtonProps {
  symbol: string;
  color: string;
  handleClick: (symbol: string) => void;
}

const Button: React.FC<ButtonProps> = ({
  symbol,
  handleClick,
  color
}: ButtonProps) => {
  return (
    <button
      onClick={() => handleClick(symbol)}
      className="focus:ring-4 shadow-lg transform active:scale-75 transition-transform flex justify-center text-center text-2xl text-white flex-1 h-16 rounded-md m-2 items-center bg-[#{color}]"
      style={{ backgroundColor: color }}

   

    >
      {symbol}
    </button>
  );
};

export default Button;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
// #endregion
