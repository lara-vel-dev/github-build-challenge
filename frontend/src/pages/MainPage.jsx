import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import joyfulImage from "../assets/img/joyful.png";
import happyImage from "../assets/img/happy.png";
import neutralImage from "../assets/img/neutral.png";
import sadImage from "../assets/img/sad.png";
import angryImage from "../assets/img/angry.png";
import ModelViewer from "../components/ModelViewer";
import EggModel from "../assets/3d-models/Hen.glb";

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
    if (value < 20) return joyfulImage;
    if (value < 40) return happyImage;
    if (value < 60) return neutralImage;
    if (value < 80) return sadImage;
    return angryImage;
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
          <ModelViewer modelPath={EggModel} />
        </div>

        <div className="mainpage__principalwave wave"></div>
        <div className="mainpage__secondarywave wave"></div>

        <div className="mainpage__content">
          <img src={getEmotion(sliderValue)} />
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
            <table>
              <thead>
                <tr>
                  <th>Habito</th>
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
                        <label className="habit-checkbox">
                          <input
                            type="checkbox"
                            checked={status}
                            onChange={() =>
                              toggleHabitCompletion(habit.id, index)
                            }
                          />
                          <span className="custom-checkbox"></span>
                        </label>
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
