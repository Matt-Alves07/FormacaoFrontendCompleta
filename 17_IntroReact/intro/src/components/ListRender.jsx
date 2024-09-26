import { useState } from "react";

const ListRender = () => {
    //Exemplo ruim, pq não possui uma key
    /* const [list] = useState(["Matheus", "Pedro", "Josias"]); */
    const [fruits, setFruits] = useState([
        { id: 1, name: "Uva", value: 2.99 },
        { id: 2, name: "Pêra", value: 5.99 },
        { id: 3, name: "Maçã", value: 3.99 },
    ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setFruits((prevFruits) => {
      return prevFruits.filter((fruit) => randomNumber !== fruit.id);
    });
  };

  return (
    <div>
        {/* render sem key primeiramente */}
        {/* <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
        </ul> */}
        <ul>
            {fruits.map((fruit) => (
                <li key={fruit.id}>
                {fruit.name} - value: {fruit.value}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random fruit</button>
    </div>
  );
};

export default ListRender;