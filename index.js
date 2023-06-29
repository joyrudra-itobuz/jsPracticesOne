import axios from "axios";
import { log } from "console";
const herName = "Zenia";

log("Hey Rahul!");

// global.console.log("Hello" + herName + " ! " + "I'm " + myName);
var myName = "Joy";

function sayHello() {
  console.log("Hello" + herName + " ! " + "I'm " + myName + " from function");
}

const sayHello2 = () => {
  console.log("Hello" + herName + " ! " + "I'm " + myName + " from function 2");
};

const parent = () => {
  const parentVar = "Enclose ME";
  const child = () => {
    console.log(parentVar);
  };
  child();
};

console.log("Hello" + herName + " ! " + "I'm " + myName);
// console.log(global);

sayHello();

sayHello2();

parent();

// var myName = "Joy";
// const myName = "Joy";

// **Intermediate JS**

// 1. Callbacks

const callbackMe = (name) => {
  console.log("My name is " + name + " from callback");
};

const meCallback = (callbackMe, name) => {
  callbackMe(name);
};

const add = (a, b) => {
  console.log("Inside Func Add");
  console.log(a + b);
};

const sub = (a, b) => {
  console.log("Inside Func Sub");
  console.log(a - b);
};

const calc = (num1, num2, callback) => {
  console.log("Inside Calc");
  if (typeof callback === "function") {
    console.log("Calling Func");
    const res = callback(num1, num2);
    console.log("Returning Result!");
    return res;
  }
};

// meCallback(callbackMe, "Joy");

calc(7, 3, add);

const callbackHell = (a, b) => {
  console.log(a + b);
};

// 2. Promises

const smoker = {
  name: "Joy",
  age: 21,
  isSmoker: true,
};

const smoking = new Promise((resolve, reject) => {
  if (smoker.isSmoker) {
    setTimeout(() => {
      resolve(`${smoker.name} Smoking is bad for health`);
    }, 0);
  } else {
    reject("Not Smoking is good for health");
  }
});

console.log(
  smoking
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
);

smoking
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

const studentName = {
  name: "Zenia",
  age: 21,
  isGoodStudent: true,
};

const student = new Promise((resolve, reject) => {
  if (studentName.isGoodStudent) {
    setTimeout(() => {
      resolve(`${studentName.name} is a good student! \nPromise Resolved!`);
    }, 0);
  } else {
    reject("Not a good student!");
  }
});

console.log(
  "Resolving Student Promise : ",
  student
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
);

// 3. Async Await

const getDatabase = async () => {
  const response = await axios.get(
    "http://localhost:7000/database/Frontend-user"
  );
  return response;
};

// getDatabase()
//   .then((res) => {
//     console.log("Response : ", res.data.data.slice(0, 5));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("Hello World!");

// 4. This Keyword

const person = {
  name: "Joy",
  age: 21,
  greet: function () {
    console.log("Hello Rahul, Myself " + this.name);
  },
};

person.greet();

var a = 10;

const name = "Zenia";

// Constructor function for creating a Person object
class Person {
  constructor(name) {
    let nameMe = "Zenia";
    this.name = name;

    this.greet = () => {
      console.log("Hello, my name is " + this.name);
    };
    this.zeniaSayHello = () => {
      console.log("Hello, my name is " + nameMe);
    };

    // Regular function declaration
    function sayName() {
      console.log("My name is " + this.name);
    }

    // Arrow function declaration
    const sayNameArrow = () => {
      console.log("My name is " + this.name);
    };

    this.sayNameRegular = sayName;
    this.sayNameArrow = sayNameArrow;
  }
}

// Create a Person object
var john = new Person("John");

// Call the 'greet', 'sayNameRegular', and 'sayNameArrow' methods
john.greet();
john.sayNameRegular();
john.sayNameArrow();
john.zeniaSayHello();

const num = 6;

// 5. Bind, Call, Apply

// Bind

const person2 = {
  name: "Zenia Itobuz",
  age: 25,
  greet: function (message) {
    console.log(
      message +
        ", my name is " +
        this.name +
        " and I am " +
        this.age +
        " years old."
    );
  },
};

const anotherPerson2 = {
  name: "Sarah",
  age: 30,
};

// Using bind
const boundGreet = person2.greet.bind(anotherPerson2);
boundGreet("Hello");
//Hello, my name is Sarah and I am 30 years old.

// Using call
person2.greet.call(anotherPerson2, "Hi");
//Hi, my name is Sarah and I am 30 years old.

// Using apply
person2.greet.apply(anotherPerson2, ["Hey"]);
//Hey, my name is Sarah and I am 30 years old.

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6

// 6. Closures

function outer() {
  var a = 10;
  async function inner() {
    console.log(a);
    const response = await axios
      .get("http://localhost:7000/database/Frontend-user")
      .then((res) => {
        return res.data.data.slice(0, 1);
      })
      .then((err) => {
        console.log(err);
      });
    console.log(response);
  }
  inner();
}

outer();

setTimeout(async () => {
  console.log(a);
  const response = await axios
    .get("http://localhost:7000/database/Frontend-user")
    .then((res) => {
      return res.data.data.slice(0, 1);
    })
    .then((err) => {
      console.log(err);
    });
  console.log(response);
}, 0);

console.log("Type 2");

setTimeout(() => {
  console.log("i should be printed last");
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve("I am A promise HIHI");
});

promise.then((res) => {
  console.log(res);
});

await axios
  .get("http://localhost:7000/database/Frontend-user")
  .then((res) => {
    console.log(res.data.data.slice(0, 1));
    return res.data.data.slice(0, 1);
  })
  .then((err) => {
    console.log(err);
  });
