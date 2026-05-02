/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function sightings(...animalsNames){

	console.log(animalsNames);
}
console.log(sightings("Lion","Cat","Leopard"));

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const habitatsList = [...forestHabitats,...savannahHabitats];
console.log(habitatsList);
/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
rhinoStatus.population = 120;
rhinoStatus.status = 'new status';

// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
rhinoStatus.population = 300;
newRhinoStatus = {...rhinoStatus,population:120,status:"new status"};

console.log(rhinoStatus);
console.log(newRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};

// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
duplicateLionProfile = {...lionProfile,genetics:"gentaic info"}
console.log(lionProfile);
console.log(duplicateLionProfile);
/*
/*
 * Observations:
update the duplicated profile  not affect the original copy.
 * TODO: Explain here.
duplicated profile has it's own copy of properties(top level properties pass by value).
 */



/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's
//health, including water quality and food supply. Perform a shallow copy and modify
//a nested property. Observe and explain how changes to nested properties affect
//both the original and the copied object.
copyEcosystemHealth = {...ecosystemHealth};
copyEcosystemHealth.foodSupply.herbivores = "Sufficient";
console.log(ecosystemHealth);
console.log(copyEcosystemHealth);
	
/*
 * Observations:
 updated shallow copied neted item property update the original copy 
 * TODO: Explain here.
 spread and object with nested item create a reference for the nested copy item address not its value
 */
