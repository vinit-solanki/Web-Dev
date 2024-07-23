import './App.css';
import Greet from './greet.jsx'; // Ensure the component is correctly imported
import LoginForm from './loginForm.jsx'; // Ensure the component is correctly imported
function RollDie(){
  let a = Math.floor(Math.random()*6)+1;
  return <h3>Dice Roll: {a}</h3>;
} 
function DiceRolls(){
  return( 
  <>
  <RollDie/>
  <RollDie/>
  <RollDie/>
  </>
  );
}
function App() {
  return (
    <>
      <Greet/>
      <DiceRolls/>
      <LoginForm />
    </>
  );
}

export default App;
