import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const daysOfWeek = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

const MainPage = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [habits, setHabits] = useState([
    { id: 1, name: "Meditar", completed: Array(7).fill(false) },
    { id: 2, name: "Leer", completed: Array(7).fill(false) },
    { id: 3, name: "Tomar agua", completed: Array(7).fill(false) },
  ]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const getEmotion = (value) => {
    if (value < 20) return "Joyful";
    if (value < 40) return "Happy";
    if (value < 60) return "Neutral";
    if (value < 80) return "Sad";
    return "Angry";
  };

  const getSliderClass = (value) => {
    if (value < 20) return "slider-joyful";
    if (value < 40) return "slider-happy";
    if (value < 60) return "slider-neutral";
    if (value < 80) return "slider-sad";
    return "slider-angry";
  };

  const toggleHabitCompletion = (habitId, dayIndex) => {
    setHabits(
      habits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              completed: habit.completed.map((status, index) =>
                index === dayIndex ? !status : status
              ),
            }
          : habit
      )
    );
  };

  return (
    <>
      <main className="mainpage">
        <CgProfile className="mainpage__profile" />
        <div className="mainpage__container">
          <h1>Hola, [Nombre]</h1>
          <img
            className="mainpage__container--image"
            src="https://png.pngtree.com/png-clipart/20240318/original/pngtree-3d-render-of-turnip-chick-miniature-cute-character-png-image_14617717.png"
            alt="Pollo animado"
          />
        </div>

        <div className="mainpage__principalwave wave"></div>
        <div className="mainpage__secondarywave wave"></div>

        <div className="mainpage__content">
          <p>Emotion: {getEmotion(sliderValue)}</p>
          <input
            className={`mainpage__content--slider ${getSliderClass(
              sliderValue
            )}`}
            id="slider"
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
          />

          <div className="mainpage__content--tracker" id="habit-tracker">
            <h2>Hábitos</h2>
            <table>
              <thead>
                <tr>
                  <th>Hábito</th>
                  {daysOfWeek.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {habits.map((habit) => (
                  <tr key={habit.id}>
                    <td>{habit.name}</td>
                    {habit.completed.map((status, index) => (
                      <td key={index}>
                        <input
                          type="checkbox"
                          checked={status}
                          onChange={() =>
                            toggleHabitCompletion(habit.id, index)
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
