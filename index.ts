import 'core-js'
import { injectable } from 'inversify'

import { container } from './container'
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



container.bind(Ninja).toSelf()

/*
  If two lines below are removed, Katana class will be bind to Ninja class.
  So in the case of that, "cut!" will be displayed in console.
*/
container.unbind(Katana)
container.bind(Katana).to(MockKatana)



const ninja = container.get(Ninja)

console.log(ninja.fight()) // output: "cut! (mock)"
console.log(ninja.sneak()) // output: "hit!"
