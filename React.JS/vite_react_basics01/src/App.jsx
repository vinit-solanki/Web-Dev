import './App.css';
import Greet from './greet.jsx'; // Ensure the component is correctly imported
import LoginForm from './loginForm.jsx'; // Ensure the component is correctly imported
import GetPokemon from './RandomPokemon.jsx';
import Counter from './counter.jsx';
function RollDie(){
  let a = Math.floor(Math.random()*6)+1;
  return <h3 style={{color:"teal"}}>Dice Roll: {a}</h3>;
} 
// function DiceRolls(){
//   return( 
//   <> 
//   <RollDie/>
//   <RollDie/>
//   </>
//   );
// }
const DiceRolls=()=>{
  const a = Math.floor(Math.random()*6)+1;
  const b = Math.floor(Math.random()*6)+1;
  const styles={color: a===b?"green":"red"};
  return(
    <div className='box' style={styles}>
      <h2 style={{color:"teal"}}>Double Dice</h2>
      {a===b && <h3>You Win :) </h3>}
      <h3>Dice 1: {a}</h3>
      <h3>Dice 2: {b}</h3>
    </div>
  );
}
function App() {
  return (
    <>
     {/* Using props in greet */}
      <Greet name="React"/>
      <DiceRolls/>
      <LoginForm />
      <GetPokemon /> 
      <Counter/>
    </>
  );
}

export default App;
