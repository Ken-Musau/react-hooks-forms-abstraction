import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    const key = event.target.id;
    let value = event.target.value;

    if (event.target.type === "checked") {
      value = event.target.checked;
    }
    setFormData({
      ...formData,
      [key]: value,
    });
  }
  console.log(formData);
  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        value={formData.firstName}
        id="firstName"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.lastName}
        id="lastName"
      />

      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
