/* question data */
import { normalize, schema } from 'normalizr';


const questions = {
	"What is your name?": { 
		options: [ "Greg", "Joe", "Tom"],
		answer: "Greg"
	},
	"Where do you live?": {
		options: [ "Stamford", "New York", "San Diego"],
		answer: "Stamford"
	}
};

console.log("loaded questions");

export default questions;
