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

const addAttendee = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const attendee = {
    name: formData.get("name"),
    email: formData.get("email"),
    createdAt: new Date(),
    checkedInAt: null,
  }
  const attendeeExists = attendees.find((p) => {
    return p.email == attendee.email
  })
  
  if(attendeeExists) {
    alert("Email já cadastrado")
    return
  }

  attendees = [attendee, ...attendees]
  updateAttendeeList(attendees);

  event.target.querySelector('[name="name"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const createAttendee = (attendee) => {
  const createdAt = dayjs(Date.now()).to(attendee.createdAt);
  let checkedInAt = dayjs(Date.now()).to(attendee.checkedInAt);

  if(attendee.checkedInAt == null) {
    checkedInAt = `<button data-email="${attendee.email}" onclick="checkIn(event)">Confirmar check-in<button/>`
  }

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
        ${createdAt}
      </td>
      <td>
        ${checkedInAt}
      </td>
  </tr>
  `
}

const checkIn = (event) => {
  const confirmMessage = "Tem certeza que deseja fazer o check-in?"
  if(confirm(confirmMessage) == false) {
    return
  }

  const attendee = attendees.find((p) => {
    return p.email == event.target.dataset.email
  })
  attendee.checkedInAt = new Date();
  updateAttendeeList(attendees);
}

const updateAttendeeList = (attendees) => {
  let row = "";
  for (let attendee of attendees) {
    row = row + createAttendee(attendee);
  }
  document.querySelector("tbody").innerHTML = row;
}

updateAttendeeList(attendees);