import { Container } from 'inversify'

import { Katana, Shuriken } from './services'


const container = new Container({ defaultScope: 'Singleton' })
container.bind(Katana).toSelf()
container.bind(Shuriken).toSelf()


export const rootContainer = container
