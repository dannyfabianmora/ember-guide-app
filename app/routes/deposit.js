import Route from '@ember/routing/route';

export default class DepositRoute extends Route {
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
}
