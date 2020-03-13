import {
  clearSearchString,
  debounce,
  appendData,
  groupDataByDepartment,
  filterDataBySearch,
} from './functions';

const fecthData = debounce(event => {
  const search = event.target.value || '';
  fetch('/data/data.json')
    .then(response => {
      console.log(response);
      appendData(groupDataByDepartment(filterDataBySearch(response, search)));
    })
    .catch(err => {
      console.log(err);
    });

  return event.target;
}, 1000);

window.onload = event => fecthData(event);

document
  .querySelector('#input-search')
  .addEventListener('keyup', event => fecthData(clearSearchString(event)));

document
  .querySelector('#btn-clear')
  .addEventListener('click', event =>
    fecthData(clearSearchString(event, true))
  );
