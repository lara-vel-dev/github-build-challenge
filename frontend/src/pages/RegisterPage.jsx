
const RegisterPage = () => {
    return (
      <>
        <main className="loginpage">
          <div className="loginpage__container">
            <form className="loginpageForm">
              <h1>Regístrate</h1>

                <label htmlFor="name">Nombre</label><br/>
                <input type="text" id="name" name="name" required /><br/>
          
                <label htmlFor="apellido" >Apellido</label><br/>
                <input type="apellido" id="apellido" name="apellido" required /><br/>
                
                <label htmlFor="email" >Correo electrónico</label><br/>
                <input type="email" id="email" name="email" required /><br/>

                <label htmlFor="email" >Contraseña</label><br/>
                <input type="password" id="password" name="password" required /><br/>
                 
              <div className="btnLogin">
              <button type="submit">Registrate</button>
              <p>¿Tienes cuenta? <a>Inicia seción</a></p>
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

export default RegisterPage;