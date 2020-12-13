import React from 'react';
import './Home.css'
import logo from '../images/glogo.png'
import {Link} from 'react-router-dom'
import AppsIcon from'@material-ui/icons/Apps';
import Search from '../components/Search.js';

import{Avatar,Button} from"@material-ui/core";
function Home(){
	return(
		<div className="home">
		<div className="home_header">
			<div className="home_headerLeft">
			<Link to="/about">About</Link>
			<Link to="/store">Store</Link>


			</div>

			<div className="home_headerRight">
			<Link to="/gmail">Gmail</Link>
			<Link to="/images">Images</Link>
			<Link to="/about">About</Link>
			<AppsIcon/>
			<Avatar/>



			</div>

		</div>

		<div className="home_body">
			<div className="img_logo">

				<img className="logo" src={logo}></img>
			</div>

			<div className="input_cont">
				<Search hideButtons=""/>
		
			</div>

			
			
			
			</div>

		</div>
		)
}

export default Home;
