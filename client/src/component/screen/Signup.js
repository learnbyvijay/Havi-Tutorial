import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup =()=>{

	const history = useHistory()
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [cpassword,setCpassword] = useState('')
	const [city,setCity] = useState('')
	const PostData =()=>{
		console.log(name)
		
		fetch('/signup',{
			method:'post',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				name,
				password,
				email,
				city,
				cpassword
			})
		}).then(res=>res.json())
		.then(data=>{
			if(data.error){
				M.toast({html:data.error,classes:"#e53935 red darken-1"})
			}
			else{
				M.toast({html:data.message,classes:"#388e3c green darken-2"})
				history.push('/Signin')
			}
		}).catch(err=>{
			console.log(err)
		})


	}
	return(
		<div className="my-card">
			<div className="card auth-card">
				<h2>Havi</h2>
				<input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
				<input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
				<input type="text" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
				<input type="text" placeholder="Enter city" value={city} onChange={(e)=>setCity(e.target.value)} />

				<input type="text" placeholder="Enter Confirm password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
				<input type="date" class="datepicker" placeholder="Enter Date of Birth" />
				<button className="waves-effect waves-light btn-small #1e88e5 blue darken-1 " onClick={()=>PostData()}>Signup</button>
				<h6><Link to="/Signin">Already have an account?</Link></h6>
			</div>
		</div>
	);
}
export default Signup;