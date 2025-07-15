import { Component } from "react";
import "./ClassComponent.css";

// ClassComponent - компонент на основі класу (опціонально)
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // Початковий стан
    this.state = {
      theme: "світла",
      clicks: 0,
      lastClicked: null,
    };
  }

  // Метод життєвого циклу
  componentDidMount() {
    console.log("ClassComponent змонтовано");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicks !== this.state.clicks) {
      console.log(`Кількість кліків змінена на ${this.state.clicks}`);
    }
  }

  // Обробник кліку
  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1,
      lastClicked: new Date().toLocaleTimeString(),
    });
  };

  // Зміна теми
  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "світла" ? "темна" : "світла",
    }));
  };

  render() {
    // Визначаємо класи на основі стану теми
    const isDarkTheme = this.state.theme === "темна";
    const themeClass = isDarkTheme ? "dark-theme" : "light-theme";
    const buttonClass = isDarkTheme ? "dark-button" : "light-button";

    return (
      <div className={`class-container ${themeClass}`}>
        <h2>Class компонент (опціонально)</h2>

        <p>Поточна тема: {this.state.theme}</p>
        <p>Кліків: {this.state.clicks}</p>

        {this.state.lastClicked && (
          <p>Останній клік: {this.state.lastClicked}</p>
        )}

        <div>
          <button
            onClick={this.handleClick}
            className={`class-button ${buttonClass}`}
          >
            Клікни мене!
          </button>

          <button
            onClick={this.toggleTheme}
            className={`class-button ${buttonClass}`}
          >
            {isDarkTheme ? "Світла тема" : "Темна тема"}
          </button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
