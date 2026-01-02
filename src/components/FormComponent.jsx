// Aggiungi una validazione al submit, verificando che:
// Tutti i campi siano compilati
// L'input Anni di esperienza sia un numero positivo
// La Specializzazione sia selezionata
// Al submit, se il form è valido, stampa in console i dati.
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
    </form>
  );
}
