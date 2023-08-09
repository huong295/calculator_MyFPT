import React from "react";



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
interface InputProps {
    text: string;

  }
const Input: React.FC<InputProps> = ({text} :InputProps) => {
  const styles = {
    wrapperInput: "flex h-16 items-end justify-end flex-end flex-col px-4",
    result: "text-2xl font-bold",       
    text: "text-xl",
  };
  return (
    <div className={styles.wrapperInput}>
      
      <div className={styles.text}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

// #endregion

export default Input;
