// call back - oddzwoń 
// const prepareMeal = (dupaJasiu) => {
//     setTimeout (() => {
//         console.log('zbieranie składników');
//         console.log('przygotowanie');
//         dupaJasiu();
//     })
//  }

//  const poszloPeklo = () => {
//     console.log('Danie gotowe');
//  }

//  prepareMeal(poszloPeklo);

// spread operator - operator rozwijania

// const getSum = (...args) => {
//     let sum = 0;
//     args.forEach(ar => sum += ar);
//     console.log(args, sum);
// }

// getSum(1, 2, 3, 4);

// rekurencje part 1

// const getSum = (start, ...args) => {
//     if (args.length === 0) {
//         return start;
//     }
//     return args[0] + getSum(start, ...args.slice(1)); // slice powoduje zmniejszenie tabeli w kazdej pętli
// // ...args.slice(1) trzy ktopki powodują rozpakowanie tablicy na poszczególne elementy. Bez tego wywali błąd
// }

// console.log(getSum(0, 2, 2, 5));


// rekurencje part 2
// let x = 0;

// const addUntil = (a, until) => {
//     if(a === until) return a;
//     console.log(a);
//     return addUntil(a + 1, until);

// }

// console.log(addUntil(x, 10));

// ( function() {
// const dog = {
//     getName() {
//         return console.log(this.name);
//     }
// }

// const cat = {
//     name: 'Mruczek',
// }

// dog.getName.call(cat);
// })();


// Zadanie 1

const user = {
    name: 'Jon',
    lastName: 'Snow',
}


const names = {
    displayName() {
        return console.log(`You know nothing ${this.name} ${this.lastName}`);
    }
}

names.displayName.call(user);

const carParts = {
    first: 'Doors',
    second: 'Windows',
}

const cars = {
    displayParts() {
        return console.log(`This is parts: ${this.first} and ${this.second}`)
    }
}

cars.displayParts.call(carParts);

// Zadanie 2 -----------------------------------------------------
( function() {
const address = { city: 'Lublin', street: 'Lekka' };

const cb1 = (ad) => {
    return `Mieszkasz w mieście: ${ad.city} na ulicy ${ad.street}`;
}

const cb2 = (ad) => {
    return `Miasto: ${ad.city}, ulica: ${ad.street}`;
}

function showAdress(address, cb) {
    return console.log(cb(address));
};
 showAdress(address, cb1);
showAdress(address, cb2);
})()

// Zadanie 3 -----------------------------------------------------

const say = (words) => {
    return (element) => {
      return  console.log(words + ' ' + element);
    }
}

const sayHi = say('Hi');
const sayHello = say('Hello');

sayHi('Janek');
sayHello('Janek')

// Zadanie 4 -----------------------------------------------------

const square = (base, exponent) => {
    if(exponent === 1) {
        return base;
    }
    return base * square(base, exponent - 1);
}
console.log(square(2, 3));

// ----------------------------------------------------------------------------------------------------------

const users = {
    name: 'Jon',
    lastName: 'Smith',
};

const sayGoodBy = function() {
    console.log(`You know anything ${this.name} and ${this.lastName}`);
}

sayGoodBy.bind(users)();

//------------

const said = (text) => {
    return (name) => {
        console.log(text + ' ' + name);
    }
};

const sayHie = said('Hi');
const sayHelloe = said('Hello');

sayHie('Janek');
sayHelloe('Grzanek');