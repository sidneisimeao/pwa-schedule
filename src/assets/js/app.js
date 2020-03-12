import ramais from './ramais';
import {
  clearSearchString,
  debounce,
  appendData,
  groupDataByDepartment,
  filterDataBySearch,
} from './functions';

const fecthData = debounce(event => {
  const search = event.target.value || '';
  appendData(groupDataByDepartment(filterDataBySearch(ramais, search)));
  return event.target;
}, 500);

window.onload = event => fecthData(event);

document
  .querySelector('#input-search')
  .addEventListener('keyup', event => fecthData(clearSearchString(event)));

document
  .querySelector('#btn-clear')
  .addEventListener('click', event =>
    fecthData(clearSearchString(event, true))
  );
