import { Container } from 'inversify'

import { Katana, Shuriken } from './services'


const rootContainer = new Container()
rootContainer.bind(Katana).toSelf()
rootContainer.bind(Shuriken).toSelf()


export const container = rootContainer.createChild()
