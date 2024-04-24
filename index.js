let attendees = [
  {
    name: "Diego Fernandes",
    email: "diego@gmail.com",
    createdAt: new Date(2024, 2, 1, 19, 23),
    checkedInAt: new Date(2024, 2, 1, 20, 20)
  },
  {
    name: "Mayk Brito",
    email: "mayk@gmail.com",
    createdAt: new Date(2024, 2, 23, 19, 23),
    checkedInAt: new Date(2024, 2, 25, 20, 20)
  },
  {
    name: "Ana Souza",
    email: "ana@gmail.com",
    createdAt: new Date(2024, 0, 3, 19, 23),
    checkedInAt: new Date(2024, 0, 4, 20, 20)
  },
  {
    name: "João Silva",
    email: "joao@gmail.com",
    createdAt: new Date(2023, 11, 4, 19, 23),
    checkedInAt: new Date(2023, 11, 5, 20, 20)
  },
  {
    name: "Maria Oliveira",
    email: "maria@gmail.com",
    createdAt: new Date(2023, 10, 5, 19, 23),
    checkedInAt: new Date(2023, 10, 6, 20, 20)
  },
  {
    name: "Pedro Santos",
    email: "pedro@gmail.com",
    createdAt: new Date(2023, 9, 6, 19, 23),
    checkedInAt: new Date(2023, 9, 7, 20, 20)
  },
  {
    name: "Carla Lima",
    email: "carla@gmail.com",
    createdAt: new Date(2023, 8, 7, 19, 23),
    checkedInAt: new Date(2023, 8, 8, 20, 20)
  },
  {
    name: "Lucas Sousa",
    email: "lucas@gmail.com",
    createdAt: new Date(2023, 7, 8, 19, 23),
    checkedInAt: new Date(2023, 7, 9, 20, 20)
  },
  {
    name: "Paula Costa",
    email: "paula@gmail.com",
    createdAt: new Date(2023, 6, 9, 19, 23),
    checkedInAt: new Date(2023, 6, 10, 20, 20)
  },
  {
    name: "Gabriel Almeida",
    email: "gabriel@gmail.com",
    createdAt: new Date(2023, 5, 10, 19, 23),
    checkedInAt: new Date(2023, 5, 11, 20, 20)
  }
];

const createAttendee = (attendee) => {
  return `
    <tr>
      <td>
        <strong>
          ${attendee.name}
        </strong>
        <br>
        <small>
          ${attendee.email}
        </small>
      </td>
      <td>
        ${dayjs(Date.now()).to(attendee.createdAt)}
      </td>
      <td>
        ${dayjs(Date.now()).to(attendee.checkedInAt)}
      </td>
  </tr>
  `
}

const updateAttendeeList = (attendees) => {
  let row = "";
  for (let attendee of attendees) {
    row = row + createAttendee(attendee);
  }
  document.querySelector("tbody").innerHTML = row;
}

updateAttendeeList(attendees);