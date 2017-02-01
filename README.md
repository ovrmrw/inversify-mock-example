# inversify-mock-example
Mocking your class using DI based on InversifyJS

---

```js
@injectable()
class Ninja {
  constructor(
    private katana: Katana,
    private shuriken: Shuriken,
  ) { }

  fight() {
    return this.katana.hit()
  }

  sneak() {
    return this.shuriken.throw()
  }
}

@injectable()
class MockKatana implements Katana {
  hit() {
    return 'cut! (mock)'
  }
}

const container = rootContainer.createChild()

container.bind(Ninja).toSelf()

/*
  If the line below are removed, Katana class will be bind to Ninja class.
  So in that case, "cut!" will be displayed in console.
*/
container.bind(Katana).to(MockKatana)

const ninja = container.get(Ninja)

console.log(ninja.fight()) // output: "cut! (mock)"
console.log(ninja.sneak()) // output: "hit!"
```

---

## Setup
```
$ yarn install
or
$ npm install
```

## Run (ts files directly)
```
$ npm start
or
$ npm run ts index
```

## Build JS files
```
$ npm run build
```
