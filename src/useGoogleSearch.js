import {useState,useEffect} from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "c12bb912a492a37cf" ;

const GoogleSearch = (term) => {
const [data, setData] = useState(null);
	
	console.log(term);

	useEffect(() => {
		console.log(term);
		const fetchData = async() => {

			term && fetch('https://www.googleapis.com/customsearch/v1?'
				+'key='+API_KEY+'&cx='+CONTEXT_KEY+'&q='+term)
				.then(response => response.json())
				.then(result=> {
					setData(result);
				})

		} 
		fetchData();
		},[term]); 


	return { data }
	
};

export default GoogleSearch;
