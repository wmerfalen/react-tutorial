import React from "react";

function dbGet(key) {
  return window.localStorage.getItem(key);
}
function dbSet(key, value) {
  window.localStorage.setItem(key, value);
}
function SyncLocalStorage(key, initialValue = "") {
  const [itemName, setItemName] = React.useState(
    () => dbGet(key) || initialValue
  );
  React.useEffect(() => {
    dbSet(key, itemName);
  }, [itemName, key]);
  return [itemName, setItemName];
}
function Name({ initialName = "" }) {
  console.log("render");
  const [name, setName] = SyncLocalStorage("name", initialName);
  const [age, setAge] = SyncLocalStorage("age", 0);
  function handleChange(event) {
    setName(event.target.value);
  }
  function ageChange(event) {
    setAge(event.target.value);
  }
  return (
    <div className="Name">
      <header className="Name-header">
        What is your name? <input onChange={handleChange} value={name} />
        <p>Thine name is {name}</p>
        What is your age? <input onChange={ageChange} value={age} />
        <p>Thine age is {age}</p>
      </header>
    </div>
  );
}

export default Name;
