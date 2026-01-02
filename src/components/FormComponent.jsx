import { useMemo, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function FormComponent() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState(0);
  const [devDescription, setDevDescription] = useState("");
  const [specialization, setSpecialization] = useState("");

  //VALIDAZIONE USERNAME
  const isUsernameValid = useMemo(() => {
    if (userName.trim().length < 6) return false;
    return userName
      .split("")
      .every((char) => letters.includes(char) || numbers.includes(char));
  }, [userName]);

  //VALIDAZIONE PASSWORD
  const isPasswordValid = useMemo(() => {
    const hasLetter = password.split("").some((char) => letters.includes(char));
    const hasNumber = password.split("").some((char) => numbers.includes(char));
    const hasSymbol = password.split("").some((char) => symbols.includes(char));
    return password.trim().length >= 8 && hasLetter && hasNumber && hasSymbol;
  }, [password]);

  //VALIDAZIONE DESCRIZIONE
  const isDescriptionValid = useMemo(() => {
    const len = devDescription.trim().length;
    return len >= 100 && len <= 1000;
  }, [devDescription]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName.trim()) return alert("Inserisci il tuo nome e cognome");
    if (!isUsernameValid) return alert("Username non valido");
    if (!isPasswordValid) return alert("Password non valida");
    if (experience <= 0) return alert("Inserisci anni di esperienza validi");
    if (!isDescriptionValid) return alert("Descrizione non valida");
    if (!specialization) return alert("Scegli la tua specializzazione");

    // Se tutto valido
    console.log({
      fullName,
      userName,
      password,
      experience,
      devDescription,
      specialization,
    });

    alert("Form inviato correttamente!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome Completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {userName && (
        <p style={{ color: isUsernameValid ? "green" : "red" }}>
          {isUsernameValid
            ? "Username valido"
            : "Deve avere almeno 6 caratteri alfanumerici."}
        </p>
      )}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password && (
        <p style={{ color: isPasswordValid ? "green" : "red" }}>
          {isPasswordValid
            ? "Password valida"
            : "Almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo."}
        </p>
      )}

      <select
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
        onChange={(e) => setExperience(Number(e.target.value))}
      />

      <textarea
        placeholder="Breve descrizione"
        value={devDescription}
        onChange={(e) => setDevDescription(e.target.value)}
      />
      {devDescription && (
        <p style={{ color: isDescriptionValid ? "green" : "red" }}>
          {isDescriptionValid
            ? "Descrizione valida"
            : "Deve contenere tra 100 e 1000 caratteri."}
        </p>
      )}

      <button type="submit">Invia</button>
    </form>
  );
}
