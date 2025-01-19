import { CgProfile } from "react-icons/cg";

const MainPage = () => {
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

        <div className="mainpage__content">
          <div className="mainpage__principalwave wave"></div>
          <div className="mainpage__secondarywave wave"></div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
