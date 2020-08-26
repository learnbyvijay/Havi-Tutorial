import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signin =()=>{
	const history = useHistory()
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const PostData =()=>{
		//console.log(name)
		fetch(' /signin',{
			method:'post',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				password,
				email
			})
		}).then(res=>res.json())
		.then(data=>{
			if(data.error){
				M.toast({html:data.error,classes:"#e53935 red darken-1"})
			}
			else{
				localStorage.setItem("jwt",data.token)
				localStorage.setItem("user",JSON.stringify(data.user))
				M.toast({html:'signedin success',classes:"#388e3c green darken-2"})
				history.push('/')
			}
		}).catch(err=>{
			console.log(err)
		})


	}
	return(
		<div className="my-card">
			<div className="card auth-card">
				<h2>Havi</h2>
				<input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
				<input type="text" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
				<button className="waves-effect waves-light btn-small #1e88e5 blue darken-1 " onClick={()=>PostData()}>Signin</button>
				<h6><Link to="/Signup">Don't have an account?</Link></h6>
			</div>
		</div>
	);
}
export default Signin;