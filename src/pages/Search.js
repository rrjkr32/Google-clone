import React from 'react';
import './Search.css'
import Search from '../components/Search.js'
import reducer from '../reducer'
import {useStateValue} from '../StateProvider'
import GoogleSearch from '../useGoogleSearch.js'
import Response from '../response'
import logo from '../images/glogo.png';
import {Link}from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import MoreVertIcon from "@material-ui/icons/MoreVert"

function SearchPage(){
	const [{term}] = useStateValue();
	//console.log(term);
	const {data}= GoogleSearch(term);
	//const data = Response;
	console.log(data);
	return(
		<div>
		<div className="SearchPage_header">
		<Link to='/'>
			<img className="SearchPage_logo" src={logo}></img>
		</Link> 
		<div className="SearchPage_headerbody">
		<Search hideButtons="hide" inp={term}/>
		<div className="SearchPage_options">
			<div className="options_left">
				<div className="SearchPage_option">
				<SearchIcon/>
				<Link to ="/all">All</Link>
				</div>

				<div className="SearchPage_option">
				<DescriptionIcon/>
				<Link to ="/news">News</Link>
				</div>
				<div className="SearchPage_option">
				<ImageIcon/>
				<Link to ="/images">Images</Link>
				</div>
				<div className="SearchPage_option">
				<LocalOfferIcon/>
				<Link to ="/shopping">Shopping</Link>
				</div>
				<div className="SearchPage_option">
				<RoomIcon/>
				<Link to ="/maps">Maps</Link>
				</div>
				<div className="SearchPage_option">
				<MoreVertIcon/>
				<Link to ="/more">More</Link>
				</div>

			</div>

			<div className="options_right">

				<div className="SearchPage_option">
				
				<Link to ="/settings">Settings</Link>
				</div>

				<div className="SearchPage_option">
				
				<Link to ="/tool">Tools</Link>
				</div>

			</div>

		</div>
		</div>
		</div>

		<div className="SearchPage_results">

		<p className="SearchPage_resultCount">About {data?.searchInformation.totalResults} results ({data?.searchInformation.formattedSearchTime} seconds)</ p>
		{data?.items.map(item=>(
			<div className='SearchPage_result'>
			<a href ={item.link}>
			{item.pagemap?.cse_image?.length>0 && item.pagemap.cse_image[0].src && (<img className="SearchPage_result_image" src={item.pagemap.cse_image.length> 0 && item.pagemap.cse_image[0].src} alt=""/>)}
			{item.displayLink}</a>
			<a className="SearchPage_result_title" href={item.link}><h2>{item.title} </h2> </a>
			<p className="SearchPage_result_snippet"> {item.snippet}</p>
			</div>




			))}
		</div>
		
		</div>
		)
}

export default SearchPage;
