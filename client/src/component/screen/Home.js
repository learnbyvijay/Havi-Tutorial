import React from 'react'

const Home =()=>{
	return(

    <div className="row">
      <div className="col s4">
			<div style={{maxWidth:"550px",margin:"0px auto"}}>

					<div className="card">
				        <div className="card-image">
				          <img src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				          <span className="card-title">My Friend</span>
				        </div>
				        <div className="card-content">
				          <p>I am a very simple card. I am good at containing small bits of information.
				          I am convenient because I require little markup to use effectively.</p>
				          <span><input type="text" placeholder="Enter comment"/><button class="btn waves-effect waves-light" type="submit" name="action">Submit<i class="material-icons right">send</i> </button></span>
				        </div>
				        <div className="card-action">
				          <a href="#">Goto Profile</a>
				        </div>
				    </div>
			</div>
		</div>
		<div className="col s4">
			<div style={{maxWidth:"550px",margin:"0px auto"}}>

					<div className="card">
				        <div className="card-image">
				          <img src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				          <span className="card-title">My Friend</span>
				        </div>
				        <div className="card-content">
				          <p>I am a very simple card. I am good at containing small bits of information.
				          I am convenient because I require little markup to use effectively.</p>
				          <input type="text" placeholder="Enter comment"/>
				        </div>
				        <div className="card-action">
				          <a href="#">Goto Profile</a>
				        </div>
				    </div>
			</div>
		</div>
		<div className="col s4">
			<div style={{maxWidth:"550px",margin:"0px auto"}}>

					<div className="card">
				        <div className="card-image">
				          <img src="https://images.unsplash.com/photo-1593110774833-20bcb2ca56d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
				          <span className="card-title">My Friend</span>
				        </div>
				        <div className="card-content">
				          <p>I am a very simple card. I am good at containing small bits of information.
				          I am convenient because I require little markup to use effectively.</p>
				          <input type="text" placeholder="Enter comment"/>
				        </div>
				        <div className="card-action">
				          <a href="#">Goto Profile</a>
				        </div>
				    </div>
			</div>
		</div>
	</div>
	);
}
export default Home;