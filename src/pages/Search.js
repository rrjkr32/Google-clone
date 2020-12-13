import React from 'react';
import './Search.css'
import Search from '../components/Search.js'
import reducer from '../reducer'
import {useStateValue} from '../StateProvider'
import GoogleSearch from '../useGoogleSearch'
function SearchPage(){
	const [{term}] = useStateValue();
	const { data } = GoogleSearch(term);
	console.log(term);
	return(
		<div>
		Search
		<Search hideButtons="hide" inp={term}/>
		</div>
		)
}

export default SearchPage;
