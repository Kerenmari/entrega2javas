const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Ejercicio A
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`la ${pizza.nombre} tiene un id impar`);
  }
});

// ejercicio B
const precioMenorA600 = (pizza) => pizza.precio < 600;
if (pizzas.some(precioMenorA600)) {
  console.log("Hay pizzas con precio menor a $600");
} else {
  console.log("No hay pizzas con precio menor a $600");
}

// ejercicio C
pizzas.forEach((pizza) =>
  console.log(`Prueba nuestra ${pizza.nombre} por tan solo $${pizza.precio}`)
);

// ejercicio D
pizzas.forEach((pizza) => {
  console.log(`los ingredientes de la ${pizza.nombre} son:`);
  pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
});
