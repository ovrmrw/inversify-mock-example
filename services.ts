import { injectable } from 'inversify'


@injectable()
export class Katana {
  hit() {
    return 'cut!'
  }
}


@injectable()
export class Shuriken {
  throw() {
    return 'hit!'
  }
}
