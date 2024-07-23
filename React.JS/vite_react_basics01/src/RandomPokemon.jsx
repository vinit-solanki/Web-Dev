import './GetPokemon.css'
// function GetImgNo(random){
//     return random;
// }
// function GetImg(){
//     let r = Math.floor(Math.random()*10000)+1;
//     GetImgNo(r);
//     let imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${r}.png`; 
//     return (
//         <img src={imgUrl} alt="" />
//     );
// } 
export default function GetPokemon(){
    let r = Math.floor(Math.random()*898)+1;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${r}.png`;
    return (
    <div className='GetPokemon'>
        <img src={imgUrl} alt="" />
        <h2>Pokemon No. : {r}</h2>
    </div>
    );
}