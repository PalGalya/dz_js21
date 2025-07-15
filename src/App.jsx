import "./App.css";
import StatefulComponent from "./components/StatefulComponent";
import StatelessComponent from "./components/StatelessComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <h1>🏠 Компоненти React: Stateful проти Stateless</h1>

      {/* Stateful компонент - має власний стан */}
      <StatefulComponent />

      {/* Stateless компонент - отримує дані через пропси */}
      <StatelessComponent
        name="Галина Паламарчук"
        age={36}
        email="pal.galya@gmail.com"
        avatarEmoji="👩‍🎓"
        avatarColor="#FFD1DC"
      />

      <StatelessComponent
        name="Сергій Мельник"
        age={27}
        email="serhii.m@example.com"
        avatarEmoji="👨‍💻"
        avatarColor="#90EE90"
      />

      {/* ClassComponent - компонент на основі класу (опціонально) */}
      <ClassComponent />
    </div>
  );
}

export default App;
