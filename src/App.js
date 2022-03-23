import ReactDOM from "react-dom";

export default function MyForm() {
  function handler() {
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const peppronie = document.getElementById("peppronie").checked;
    const GlutenFree = document.getElementById("GlutenFree").checked;
    const quantity = document.getElementById("quantity").value;
    const instruction = document.getElementById("message").value;
    const list = `<h2>Order for ${quantity} ${size} pizza(s) that are ${
      peppronie
        ? `not gluten-free and have peppronie`
        : `have gluten-free and not peppronie`
    }for ${name}</h2>
                <h1>Instructions: ${instruction}</h1>`;
    document.getElementById("root").innerHTML = list;
  }
  return (
    <form>
      <img
        width="200px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcugjSxL2qaq037aXiOTmwQ9Vt6waMs6pt3g&usqp=CAU"
      />
      <h1 style={{ color: "red" }}>Build Your Pizza !</h1>
      <label>
        Name:
        <input type="text" id="name" />
      </label>
      <div>
        <label>
          Size:
          <select name="pizza" id="size">
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          pepproni:
          <input type="checkbox" id="peppronie" />
        </label>
      </div>
      <div>
        <label>
          Gluten Free:
          <input type="checkbox" id="GlutenFree" />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <label for="quantity"></label>
          <input type="number" id="quantity" name="quantity" min="1" max="5" />
        </label>
      </div>
      <div>
        <label>
          <p>Additional instructions:</p>
          <textarea id="message" name="container" rows="4" cols="50"></textarea>
        </label>
      </div>
      <button onClick={handler}>Submit</button>
    </form>
  );
}
ReactDOM.render(<MyForm />, document.getElementById("root"));
