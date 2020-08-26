import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Createpost =()=>{
	const history = useHistory()
	const [title,setTitle] = useState('')
	const [body,setBody] = useState('')
	const [photo,setPhoto] = useState('')
	const [url,setUrl] = useState('')
	const PostData =()=>{
		var formData = new FormData();
        
       formData.append("file",photo)

       formData.append("upload_preset","instagramclone")

       formData.append("cloud_name","dlioaed33")
       fetch("https://api.cloudinary.com/v1_1/dlioaed33/image/upload",{
       	method:"post",
       	body:formData
       }).then(res=>res.json())
		.then(data=>{
			setUrl(data.url)
		}).catch(err=>{
			console.log(err)
		})


		console.log(photo)

		fetch('/createpost',{
			method:'post',
			headers:{
				'Content-Type':'application/json',
				'Authorization':"Bearer "+localStorage.getItem("jwt")
			//	'Content-Type':'multipart/form-data'
			},
			body:JSON.stringify({
				title,
				body,
				pic:url
			})
		}).then(res=>res.json())
		.then(data=>{
			if(data.error){
				M.toast({html:data.error,classes:"#e53935 red darken-1"})
			}
			else{
				M.toast({html:data.message,classes:"#388e3c green darken-2"})
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
				<input type="text" name="title" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)} />
				<input type="text" name="body" placeholder="Enter body"value={body} onChange={(e)=>setBody(e.target.value)} />
				<div className="file-field input-field">
			      <div className="btn">
			        <span>File</span>
			        <input type="file" name="photo" onChange={(e)=>setPhoto(e.target.files[0])}/>
			      </div>
			      <div className="file-path-wrapper">
			        <input className="file-path validate " type="text"/>
			      </div>
			    </div>
				
				<a className="waves-effect waves-light btn-small #1e88e5 blue darken-1"  onClick={()=>PostData()}>Post</a>
			</div>
		</div>	
	);
}
export default Createpost;