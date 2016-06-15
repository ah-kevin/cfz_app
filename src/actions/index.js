const loginActions=require('./login');
const trainLineActions=require('./trainLine')
const homeActions=require('./home');
export default {
  ...loginActions,
  ...trainLineActions,
  ...homeActions
}