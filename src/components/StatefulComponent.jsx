import { useState } from "react";
import "./StatefulComponent.css";

// Stateful компонент - використовує useState для управління станом
function StatefulComponent() {
  const [count, setCount] = useState(0);
  const [mood, setMood] = useState("😊");

  // Функції для зміни лічильника
  const increment = () => {
    setCount(count + 1);
    updateMood(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    updateMood(count - 1);
  };

  const reset = () => {
    setCount(0);
    setMood("😊");
  };

  // Функція для оновлення настрою залежно від значення лічильника
  const updateMood = (value) => {
    if (value >= 5) setMood("😁");
    else if (value > 0) setMood("😊");
    else if (value === 0) setMood("😐");
    else if (value > -5) setMood("😕");
    else setMood("😢");
  };

  // Визначаємо CSS клас залежно від значення лічильника
  const getBackgroundClass = () => {
    if (count > 5) return "bg-very-positive";
    if (count > 0) return "bg-positive";
    if (count === 0) return "bg-neutral";
    if (count > -5) return "bg-negative";
    return "bg-very-negative";
  };

  return (
    <div className={`stateful-container ${getBackgroundClass()}`}>
      <h2>Stateful компонент - Лічильник настрою</h2>

      <div className="mood-emoji">{mood}</div>

      <div className="counter-value">Значення: {count}</div>

      <div>
        <button onClick={decrement} className="btn btn-decrement">
          -
        </button>
        <button onClick={reset} className="btn btn-reset">
          Скинути
        </button>
        <button onClick={increment} className="btn btn-increment">
          +
        </button>
      </div>
    </div>
  );
}

export default StatefulComponent;
