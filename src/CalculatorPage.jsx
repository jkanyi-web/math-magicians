import Calculator from "./components/Calculator";

export default function CalculatorPage() {
  const header = {
    fontSize: '1.5rem',
    position: 'absolute',
    top: '-7px',
    left: '15px',
  }

  return (
    <>
      <h1 style={header}>Let us do some math!</h1>
      <Calculator />
    </>
  )
}
