// Object Literal
const Student1 = {
    firstname: 'ahmad',
    lastname: 'karim',
    info: function(){
        console.log(firstname , lastname);
    }
}

// Factory Function
function Student2(firstname , lastname){
    return{
        firstname: firstname,
        lastname: lastname,
        showInfo(){
            console.log(firstname, lastname)
        }
    }
}


// Constructor Function
function Student(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.showInfo = function(){
        console.log('Show Info...', this.firstname);
    }
}



