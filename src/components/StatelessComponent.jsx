import "./StatelessComponent.css";

// Stateless компонент - не має власного стану, тільки отримує пропси
function StatelessComponent({ name, age, email, avatarEmoji, avatarColor }) {
  // Отримуємо ініціали для аватара
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="stateless-container">
      <h2>Stateless компонент - Картка користувача</h2>
      <div className="stateless-content">
        {/* Аватар із емодзі та ініціалами */}
        <div
          className={`avatar-container ${
            avatarEmoji ? "avatar-emoji" : "avatar-initials"
          }`}
          style={{ backgroundColor: avatarColor || "#e0e0e0" }}
        >
          {avatarEmoji || initials}
        </div>
        <h3 className="user-name">{name}</h3>
        <p className="user-info">
          <strong>Вік:</strong> {age} років
        </p>
        <p className="user-info">
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}

export default StatelessComponent;
