const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';


export function getTasksList() {
  return fetch(baseUrl).then(response => response.json())
}

export function getTaskById(taskId) {
  return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks')
    .then((response) => response.json())
    .then((resArr) => resArr.find((el) => el.id === taskId));
}


/*getTasksList().then((tasksList) => {
  console.log(tasksList); 
});

getTaskById('2').then((taskData) => {
  console.log(taskData); 
});*/
