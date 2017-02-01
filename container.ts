import { Container } from 'inversify'

import { Katana, Shuriken } from './services'


export const rootContainer = new Container({ defaultScope: 'Singleton' })
rootContainer.bind(Katana).toSelf()
rootContainer.bind(Shuriken).toSelf()
