const loginActions=require('./login');
const trainLineActions=require('./trainLine')
export default {
  ...loginActions,
  ...trainLineActions
}