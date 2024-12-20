export async function searchBook(query){
    const API_KEY = "AIzaSyAHTjkWduODjVmp2njr85vWhu1qtv4RqRc";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    try {
        const response = await fetch(url); // Realiza la solicitud
        if (!response.ok) {
            throw new Error("Error al obtener datos de la API");
        }

        const data = await response.json(); // Convierte la respuesta a JSON
        return data.items;
    } catch (err) {
        console.log(err);
        return {title: "Error", message: "No se encontraron libros", error: true};
    }
}