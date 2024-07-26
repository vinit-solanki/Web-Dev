// loginForm.jsx
import './LoginForm.css';
const displayName = ()=>{
    const name=input.value;
    console.log(name);
    return <h3>{name}</h3>
}
function LoginForm() {
    return (
        <form className="LoginForm">
            <input type="text" name="name" id="" placeholder="Enter your name"/>
            <button onClick={displayName}>Submit</button>
            <displayName/>
        </form>
    );
}

export default LoginForm;
