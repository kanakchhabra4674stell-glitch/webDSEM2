import {useState} from "react";
export default function App(){
const [f, setF] = useState({name:"", email:"", pass:""});
function submit(){
if(!f.name || !f.email.includes("@") || f.pass.length<6)
alert("Invalid Data");
else
alert("Success");
}
return(
<>
<input placeholder="Name"
onChange={e=>setF({...f,name:e.target.value})}/>
<input placeholder="Email"
onChange={e=>setF({...f,email:e.target.value})}/>
<input placeholder="Password"
onChange={e=>setF({...f,pass:e.target.value})}/>
<button onClick={submit}>Submit</button>
</>
);
}