import { Container } from 'inversify'

import { Katana, Shuriken } from './services'


export const rootContainer = new Container()
rootContainer.bind(Katana).toSelf()
rootContainer.bind(Shuriken).toSelf()
