import React from "react";

function Button() {
  return (
    <div>
      <form>
        <div>
          <label for="un">User Name</label>
          <br/>
          <input id="un" />
        </div>
        <div>
          <label for="pw">Password</label>
          <br/>
          <input id="pw" />
        </div>
      </form>
      <button style={buttonstyle}>Submit</button>
    </div>
  );
}

const buttonstyle = {
  border: "1px solid",
  padding: "0.25em",
};

export default Button;
