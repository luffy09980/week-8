import { useState, useEffect } from "react";

// Weather data: each weather has an emoji and a short mood message
const weatherInfo = {
  Sunny: { icon: "☀️", message: "Feeling happy and bright!" },
  Rainy: { icon: "🌧️", message: "Feeling calm and a bit sleepy." },
  Cloudy: { icon: "☁️", message: "Feeling quiet and thoughtful." },
};

// The weather prop decides which emoji and message to show
function WeatherMoodWidget({ weather }) {
  const [icon, setIcon] = useState(weatherInfo.Sunny.icon);
  const [message, setMessage] = useState(weatherInfo.Sunny.message);
  const [count, setCount] = useState(0);

  // Runs when the component loads and again whenever the weather prop changes
  useEffect(() => {
    const info = weatherInfo[weather] || weatherInfo.Sunny;
    setIcon(info.icon);
    setMessage(info.message);
  }, [weather]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <h2>My Mood Weather Widget</h2>
      <p>
        {weather} {icon}
      </p>
      <p>{message}</p>
      <button type="button" onClick={handleClick}>
        This weather makes me feel something: {count}
      </button>
      <p>&nbsp;</p>
    </div>
  );
}

export default WeatherMoodWidget;
