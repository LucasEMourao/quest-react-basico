const Button = (props) => {
    const alertLabel = () => {
        alert(`A label desse botão é ${props.label}`);
      };
  return <button onClick={alertLabel}>{props.label}</button>;
};

export default Button;
