import axios from 'axios'

const API_KEY = "AIzaSyCAjGrW7a_NpN5E5MtWQHrryyBa9Nvpo-I" 

export default axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3',
	params : {
		part: 'snippet',
		maxResults : 5,
		key : API_KEY
	}
})