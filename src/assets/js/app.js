import ramais from './ramais';

const groupByDepartments = ramais.reduce((department, currentValue) => {
  if (currentValue.departamento) {
    department[currentValue.departamento] = [
      ...(department[currentValue.departamento] || []),
      currentValue,
    ];
  }
  return department;
}, []);

const container = document.querySelector('#sha_temp_meta');

// for each department
Object.keys(groupByDepartments).forEach(department => {
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
  groupByDepartments[department].forEach(member => {
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
