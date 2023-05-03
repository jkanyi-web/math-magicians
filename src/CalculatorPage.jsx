import Calculator from "./components/Calculator";

export default function CalculatorPage() {
  const header = {
    fontSize: '1.5rem',
    marginLeft: '-360%',
    marginTop: '10%',
  };

  const divStyle = {
    position: 'absolute',
    right: '20%',
    bottom: '10%',

  }

  return (
    <div style={divStyle}>
      <h1 style={header}>Let us do some math!</h1>
      <Calculator />
    </div>
  )
}
