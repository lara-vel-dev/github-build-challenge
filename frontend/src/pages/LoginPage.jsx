
const LoginPage = () => {
    return (
      <>
        <main className="loginpage">
          <div className="loginpage__container">
            <form className="loginpageForm">
              <h1>Iniciar seción</h1>

                <label htmlFor="email">Correo electroníco</label><br/>
                <input type="email" id="email" name="email" required /><br/>
          
                <label htmlFor="password" >Contraseña</label><br/>
                <input type="password" id="password" name="password" required /><br/>
                <a>¿Olvidaste tu contraseña?</a><br/>
                 
              <div className="btnLogin">
              <button type="submit">Iniciar sesión</button>
              <p>¿No tienes una cuenta? <a>Registrate</a></p>
              </div>

            </form>
          </div>
          <div className="loginpage__principalwave wave"></div>
          <div className="loginpage__secondarywave wave"></div>
          <div className="loginpage__huevito loginpage__huevito1"></div>
          <div className="loginpage__huevito loginpage__huevito2"></div>
        </main>
      </>
    );
};

export default LoginPage;