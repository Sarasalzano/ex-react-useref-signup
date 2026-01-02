import { useMemo, useState, useRef } from "react";

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function FormComponent() {
  //campi controllati
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //campi non controllati
  const experienceRef = useRef();
  const descriptionRef = useRef();
  const specializationRef = useRef();

  //validazione username
  const isUsernameValid = useMemo(() => {
    if (userName.trim().length < 6) return false;
    return userName
      .split("")
      .every((char) => letters.includes(char) || numbers.includes(char));
  }, [userName]);

  //validazione password
  const isPasswordValid = useMemo(() => {
    const hasLetter = password.split("").some((char) => letters.includes(char));
    const hasNumber = password.split("").some((char) => numbers.includes(char));
    const hasSymbol = password.split("").some((char) => symbols.includes(char));
    return password.trim().length >= 8 && hasLetter && hasNumber && hasSymbol;
  }, [password]);

  function handleSubmit(e) {
    e.preventDefault();

    const experience = Number(experienceRef.current.value);
    const specialization = specializationRef.current.value;
    const devDescription = descriptionRef.current.value;

    if (!fullName.trim()) return alert("Inserisci il tuo nome e cognome");
    if (!isUsernameValid) return alert("Username non valido");
    if (!isPasswordValid) return alert("Password non valida");
    if (experience <= 0) return alert("Inserisci anni di esperienza validi");
    if (
      devDescription.trim().length < 100 ||
      devDescription.trim().length > 1000
    )
      return alert("Descrizione non valida");
    if (!specialization) return alert("Scegli la tua specializzazione");

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
      {/* Nome completo */}
      <input
        type="text"
        placeholder="Nome Completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      {/* Username */}
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

      {/* Password */}
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

      {/* Specializzazione (non controllata) */}
      <select ref={specializationRef}>
        <option value="">Scegli un'opzione</option>
        <option value="full-stack">Full Stack</option>
        <option value="front-end">Front End</option>
        <option value="back-end">Back End</option>
      </select>

      {/* Anni di esperienza (non controllata) */}
      <input
        type="number"
        placeholder="Years of Experience"
        ref={experienceRef}
      />

      {/* Descrizione (non controllata) */}
      <textarea placeholder="Breve descrizione" ref={descriptionRef} />

      <button type="submit">Invia</button>
    </form>
  );
}
