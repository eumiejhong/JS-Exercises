//Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//Computed property names 
var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
let instructor = {
    [favoriteNumber]: "That is my favorite!"
}

//Object methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//createAnimal function
function createAnimal(species, verb, noise){
    return {
        species: species,
        [verb]() {
            return noise;
        }
    }
}


