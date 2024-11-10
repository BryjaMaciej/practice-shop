const dog = {
    name: 'Spike', 
    getName(VolumentValue) {
        if(VolumentValue) {
            return 'Imię to jest: ' + this.name;
        }
        return this.name;
    }
};
const cat = {
    name: 'Mruczek',
}

// przypinamy cat
const catSayName = dog.getName.bind(cat);

//console.log(catSayName());

//cat wpina ale przede wszystkim od razu wykonuje daną funkcję. Przyjmuje równiez inne parametry jak nam true
//console.log(dog.getName.call(cat));
//console.log(dog.getName.call(cat, false));

//applay rózni się od call tym ze poszczególne parametry są przekazywane przez tablice
console.log(dog.getName.call(cat, [false, 'Bukkeke']));
