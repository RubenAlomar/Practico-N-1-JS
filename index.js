        const pizzas = [
        {
            id: 1,
            nombre: 'Pizza Muzza',
            ingredientes: ['Muzzarella', 'Tomate', 'Aceitunas Verdes'],
            precio: 1000
        },
        {
            id: 2,
            nombre: 'Pizza Napo',
            ingredientes: ['Muzzarella', 'Tomate en Rodajas', 'Aceitunas Negras'],
            precio: 1200
        },
        {
            id: 3,
            nombre: 'Pizza Peperoni',
            ingredientes: ['Muzzarella', 'Salsa de Tomates', 'Peperoni'],
            precio: 900
        },
        {
            id: 4,
            nombre: 'Pizza Especial',
            ingredientes: ['Jamon', 'Queso', 'Pimiento Rojo'],
            precio: 800
        },
        {
            id: 5,
            nombre: 'Pizza Anana',
            ingredientes: ['Muzzarella', 'Anana en Rodajas', 'Azucar negro'],
            precio: 850
        },
        {
            id: 6,
            nombre: 'Pizza vegetariana',
            ingredientes: ['Rucula', 'Tomate en Dados', 'Pimientos'],
            precio: 599
        },
        ]
        console.log("Aquí está nuestro listado de pizzas para que elijas la que más te guste")
        console.log(pizzas)

    console.log("***EJERCICIO A***")

    const a = pizzas.filter((e) => e.id % 2!=0);
        
        console.log("Estas pizzas por estar ubicadas en lugares impares de nuestra lista tienen un descuento especial")
        console.log(a)
        
    console.log("***EJERCICIO B***")


    const pizzaBarata = pizzas.some ((e) => e.precio<= 600); true 
        console.log (pizzaBarata ? "hay pizzas en oferta a menos de $600" : 'no hay pizzas de menos de $600')

    console.log("***EJERCICIO C***")


    pizzas.forEach ( (e) => console.log(`La ${e.nombre} tiene un valor de ${e.precio}`))
    
    
    const nombrePizzaPrecio = pizzas.map((pizza)=>{
    return{ nombre: pizza.nombre,
            precio: pizza.precio}
     })     
        console.log(nombrePizzaPrecio)

    console.log("***EJERCICIO D***")    

    console.log("He aquí todas las pizzas con sus ingredientes!!!")

    pizzas.forEach ((pizzas)=> {
        console.log ("La " + pizzas.nombre + " contiene los siquientes ingredientes: " + pizzas.ingredientes)
    })

    console.log("ESPERAMOS TU PEDIDO")

