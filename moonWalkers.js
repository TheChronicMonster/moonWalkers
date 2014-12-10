var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Split each name in array and sort in alphabetical order by last name
    var fullNamesWithComma = [];
    for (var walker in names){
		var walkerNames = moonWalkers[walker].split(" ");
		var firstName = walkerNames[0];
		var lastName = walkerNames[1]; 
		var fullNameWithComma = lastName + ", "+firstName;
		fullNamesWithComma.push(fullNameWithComma);
    }
	return fullNamesWithComma.sort(); 
}

console.log(alphabetizer(moonWalkers));
