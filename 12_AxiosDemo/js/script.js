const getData = async () => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
            {
                headers: {
                    "content-type": "application/json",
                    custom: "header",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(`Something happened ${error.response}.`);
    }
};
  
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();

  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");
    const nameElement = document.createElement("h2");

    nameElement.textContent = user.name;

    div.appendChild(nameElement);

    const emailElement = document.createElement("p");

    emailElement.textContent = user.email;

    div.appendChild(emailElement);
    container.appendChild(div);
  });
};

printData();