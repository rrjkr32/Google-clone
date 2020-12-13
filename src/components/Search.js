import React,{useState} from 'react';
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic"
import {Button} from"@material-ui/core";
import {useHistory} from "react-router-dom"
import {actionTypes} from '../reducer'
import {useStateValue} from '../StateProvider'

function Search({hideButtons,inp}){

	const [input_state,update_input_state]=useState(inp);
	const history =useHistory();
	const[{},dispatch] = useStateValue();

	const search = e =>{
		

		e.preventDefault();
		console.log({input_state},actionTypes.SET_SEARCH_TERM);

		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input_state
		});

		history.push("./search")
	}
	return(
		<form className="search_body">
			<div className="search_input">
			<SearchIcon className="search_icon"/>
			<input value={input_state} onChange={e=>{update_input_state(e.target.value)}} />
			
			<MicIcon/>

			</div>

			<div className={"search_buttons"+"_"+hideButtons}>
			<Button type="submit" onClick={search} variant="outlined">Google Search</Button>

			<Button variant="outlined">I'm Feeling Lucky</Button>


			</div>

		</form>
		)

}

export default Search;

