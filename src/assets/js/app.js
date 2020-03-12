import ramais from './ramais';
import debounce from './debounce';

const filterDataBySearch = (data, str) => {
  if (!str) {
    return data;
  }
  let search = str.toLowerCase();
  return data.filter(fields => {
    // destructuring
    let { departamento, ramal, nome } = fields;
    // Regex
    let myReg = new RegExp(search + '.*');
    // Department search
    let myMatch = String(departamento)
      .toLowerCase()
      .match(myReg);
    // if not match search in number
    myMatch =
      myMatch ||
      String(ramal)
        .toLowerCase()
        .match(myReg);
    // if not match search in name
    myMatch =
      myMatch ||
      String(nome)
        .toLowerCase()
        .match(myReg);

    // if match
    if (myMatch) {
      return true;
    }
  });
};

const groupDataByDepartment = data =>
  data.reduce((department, currentValue) => {
    if (currentValue.departamento) {
      department[currentValue.departamento] = [
        ...(department[currentValue.departamento] || []),
        currentValue,
      ];
    }
    return department;
  }, []);

const appendData = data => {
  // Container
  const container = document.querySelector('#sha_temp_meta');
  // for each department
  Object.keys(data).forEach(department => {
    // div.row
    let row = document.createElement('div');
    row.classList.add('row');
    // div.col-12
    let colHeading = document.createElement('div');
    colHeading.classList.add('col-12');
    // span.headingDepartment
    let headingDepartment = document.createElement('span');
    headingDepartment.classList.add('heading-department');
    headingDepartment.textContent = department;
    // div.col-12 > span.headingDepartment
    colHeading.appendChild(headingDepartment);
    // div.row > div.col-12 > span.headingDepartment
    row.appendChild(colHeading);
    // for each member
    data[department].forEach(member => {
      // div.col-12.col-sm-4.sha_tile
      let colMember = document.createElement('div');
      colMember.classList.add('col-12', 'col-sm-4', 'sha_tile');
      // div
      let div = document.createElement('div');
      // div.tile_number
      let spanNumber = document.createElement('span');
      spanNumber.classList.add('tile_number');
      spanNumber.textContent = member.ramal;
      // div.tile_info
      let spanInfo = document.createElement('span');
      spanInfo.classList.add('tile_info');
      spanInfo.textContent = member.nome;
      // span
      let spanDepartment = document.createElement('span');
      spanDepartment.classList.add('department');
      spanDepartment.textContent = member.departamento;
      // span > span
      spanInfo.appendChild(spanDepartment);
      // div > tile_number+tile_info
      div.appendChild(spanNumber);
      div.appendChild(spanInfo);
      // div.col-12.col-sm-4.sha_tile > div
      colMember.appendChild(div);
      // div.row > div.col-12.col-sm-4.sha_tile
      row.appendChild(colMember);
    });
    container.appendChild(row);
  });
};

const clearSearchString = event => {
  // Container
  const container = document.querySelector('#sha_temp_meta');
  container.innerHTML = '';
  return event;
};

const fecthData = debounce(event => {
  appendData(
    groupDataByDepartment(filterDataBySearch(ramais, event.target.value || ''))
  );
  return event;
}, 500);

window.onload = event => fecthData(event);

document
  .querySelector('#input-search')
  .addEventListener('keyup', event => fecthData(clearSearchString(event)));

document
  .querySelector('#btn-clear')
  .addEventListener('click', event => fecthData(clearSearchString(event)));
