import { useState } from "react";

export default function FormComponent() {
  const [fullName, setfullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState(0);
  const [devDescription, setdevDescription] = useState("");
  const [specialization, setSpecialization] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (fullName !== "") {
      console.log(fullName);
    } else {
      console.log("Inserisci il tuo nome e cognome");
    }
    if (userName !== "") {
      console.log(userName);
    } else {
      console.log("Inserisci il tuo username");
    }
    if (password !== "") {
      console.log(password);
    } else {
      console.log("Inserisci una password");
    }
    if (experience > 0) {
      console.log(experience);
    } else {
      console.log("Inserisci anni di esperienza ");
    }
    if (devDescription !== "") {
      console.log(devDescription);
    } else {
      console.log("Inserisci la descrizione");
    }
    if (specialization !== "") {
      console.log(specialization);
    } else {
      console.log("Scegli la tua specializzazione");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome Completo"
        value={fullName}
        onChange={(e) => setfullName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        name="specialization"
        id="specialization-select"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      >
        <option value="">Scegli un'opzione</option>
        <option value="full-stack">Full Stack</option>
        <option value="front-end">Front End</option>
        <option value="back-end">Back End</option>
      </select>
      <input
        type="number"
        placeholder="Years of Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <textarea
        name="description"
        id="developer-description"
        value={devDescription}
        onChange={(e) => setdevDescription(e.target.value)}
      >
        About you
      </textarea>
      <button type="submit">Invia</button>
    </form>
  );
}
