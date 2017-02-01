import { Container } from 'inversify'

import { Katana, Shuriken } from './services'


export const container = new Container({ defaultScope: 'Singleton' })
container.bind(Katana).toSelf()
container.bind(Shuriken).toSelf()
