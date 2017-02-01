import 'core-js'
import { injectable, Container } from 'inversify'

import { rootContainer } from './container'
import { Katana, Shuriken } from './services'


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



const container = new Container()
container.parent = rootContainer


container.bind(Ninja).toSelf()

/*
  If the line below are removed, Katana class will be bind to Ninja class.
  So in that case, "cut!" will be displayed in console.
*/
container.bind(Katana).to(MockKatana)



const ninja = container.get(Ninja)

console.log(ninja.fight()) // output: "cut! (mock)"
console.log(ninja.sneak()) // output: "hit!"
