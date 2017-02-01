import { Container, interfaces } from 'inversify';


export function rebind<T extends interfaces.Newable<any>>(container: Container, token: T, injectClass: T): void {
  container.unbind(token)
  container.bind(token).to(injectClass)
}
