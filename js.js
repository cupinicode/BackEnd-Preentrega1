// Inicio de la clase

class ProductManager{

    products; // Array de productos
    static id = 0; // Variable estática de la clase

    constructor() {
        this.products = []; // Al instanciar un objeto de esta clase, inicializo el array de productos
    }
    
    // Método para agregar un nuevo producto al array
    addProduct(title, description, price, thumbnail, code, stock){ 
        if (!title || !description || !price || !thumbnail || !code || !stock) { // Controlo que TODOS los campos estén completos
            console.log("Todos los campos deben estar completos. No se incluirá el producto en la lista")
            return
        }

        if (this.products.find((prod) => prod.code === code)) { //COntrolo que el CODE no exista en los objetos ya ingresados
            console.log(`El código ${code} ya existe.  No se incluirá el producto en la lista`)
            return
        }

        let producto = { // Armo el objeto
            id : ProductManager.id, // Asigno la variable estática al ID del objeto
            title, // Uso azúcar sintáctica para los pares clave: valor
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(producto) // Agrego el objeto nuevo al array
        // console.log(producto) Lo muestro por pantalla, en caso de ser necesario
        ProductManager.id++ // Incremento la variable estática, para el próximo producto a crear
    }
    
    // Método que devuelve el array con todos los objetos ingresados hasta el momento
    getProducts() { 
        return this.products // Retorno el array completo
    }

    // Método que recibe por parámetro un ID, lo busca y devuelve el producto, en caso de encontrarlo
    getProductById(id){ 
        let encontrado = this.products.find((prod) => prod.id == id) // Lo busco entre los IDs de cada ob jeto del array
        if (!encontrado) { //Si no lo encuentro ...
            console.log("Not found"); // ... muestro el error por consola
            return "" // salgo del método, retornando CADENA VACIA (no está indicado en la consigna, pero entiendo que TODA función debe retornar un valor)
        }
        return encontrado // encontré el ID, por lo tanto retorno el objeto
    }
}

// Fin de la clase



// Código adicional utilizado para testear la clase

let manag = new ProductManager();
console.log(manag.getProducts());
manag.addProduct("Pelapapas", "Pelapapas metalico de gran calidad", 255, "\fff\fdsd.jpg", "CD31", 34)
console.log(manag.getProducts());
manag.addProduct("Cucharita", "Cucharita de cafe de calidad mejorable", 500, "\gg\gg.jpg", "MR55", 11)
console.log(manag.getProducts());
manag.addProduct("Tetera", "Tetera de Porcelana china", 7000, "\\tt\tt.jpg", "CD31", 2)
console.log(manag.getProducts());
console.log(manag.getProductById(7))
console.log(manag.getProductById(7))

// Fin del código adicional
