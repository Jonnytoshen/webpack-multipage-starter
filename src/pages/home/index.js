import '../../assets/scss/styles.scss';
import './styles.scss';


console.log('Welcome to Home Page!');

let a = (a) => {
  console.log(a);
};

a(1231231321);

class Jonny {
  constructor() {
    this.name = 'jonny';
    this.age = 24;
  }
  sayHello(msg) {
    console.log(msg);
  }
}

let jonny = new Jonny();
jonny.sayHello('I love you!');