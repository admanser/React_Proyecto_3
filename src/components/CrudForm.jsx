import { useState, useEffect } from "react";

const CrudForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [argument, setArgument] = useState("");

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const handleReset = (e) => {};

  useEffect(() => {
    console.log(name);
    console.log(category);
    console.log(image);
    console.log(trailer);
    console.log(argument);
  }, [name, category, image, trailer, argument]);

  return (
    <div className="crud">
      <h2 className="text-center">AGREGAR NUEVA PELÍCULA</h2>
      <form onSubmit={handleSubmit} className="form-size mb-5">
        <input
          type="text"
          name="name"
          placeholder="Ingrese nombre de película"
          onInput={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label for="category">Seleccione Categoría:</label>
        <select
          name="category"
          id="category"
          value={category}
          onSelect={(e) => setCategory(e.target.value)}
        >
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="accion">Acción</option>
          <option value="ficcion">Ciencia Ficción</option>
        </select>
        <br />
        <br />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen de portada"
          onInput={(e) => setImage(e.target.value)}
          value={image}
        />
        <br />
        <br />
        <input
          type="text"
          name="trailer"
          placeholder="URL del Trailer"
          onInput={(e) => setTrailer(e.target.value)}
          value={trailer}
        />
        <br />
        <br />
        <textarea
          name="argument"
          for="argument"
          placeholder="Describe brevemente el argumento en menos de 300 carácteres"
          maxlength="300"
          onChange={(e) => setArgument(e.target.value)}
          value={argument}
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Enviar" />
        <br />
        <br />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
