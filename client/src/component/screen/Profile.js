import React from 'react'

const Profile =()=>{
	return(
		<div className="profile">
			<div style={{display:"flex",justifyContent:"space-around",margin:"0 20% 0 20%",borderBottom:"1px solid grey"}}  >
				<div>
					<img style={{maxWidth:"160px"}}  className="profileimg" src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				</div>
				<div className="detail">
					<h4>My Friend</h4>
					<div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
						<h5> 40 post &nbsp;</h5>
						<h5> 40 followers &nbsp;</h5>
						<h5> 40 following </h5>
					</div>
				</div>
			</div>
			<div className="gallary" style={{maxWidth:"750px",margin:"0px auto"}} >
				<img className="item" src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				<img className="item" src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				<img className="item" src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				<img className="item" src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				<img className="item" src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				<img className="item" src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
			</div>
		</div>
	);
}
export default Profile;