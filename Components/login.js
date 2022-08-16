
const Login = ()=>{


    let templateSeries= 
    `
    <!-- Pills navs -->
    <div class="form-card">
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
          aria-controls="pills-login" aria-selected="true">Iniciar Sesion</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link " id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
          aria-controls="pills-register" aria-selected="false">Registrarse</a>
      </li>
    </ul>
    <!-- Pills navs -->
    
    <!-- Pills content -->
    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form >
          <div class="text-center mb-3">
            <p>Inicia sesión con:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>
    
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>
    
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>
    
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
    
          <p class="text-center">o:</p>
    
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="loginName" class="form-control" />
            <label class="form-label" for="loginName">Correo o usuario</label>
          </div>
    
          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="loginPassword" class="form-control" />
            <label class="form-label" for="loginPassword">Contraseña</label>
          </div>
    
          <!-- 2 column grid layout -->
          <div class="row mb-4">
            <div class="col-md-6 d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check mb-3 mb-md-0">
                <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                <label class="form-check-label" for="loginCheck"> Recordarme </label>
              </div>
            </div>
    
            <div class="col-md-6 d-flex justify-content-center">
              <!-- Simple link -->
              <a href="#!">Has olvidado tu contraseña?</a>
            </div>
          </div>
    
          <!-- Submit button -->
          <button type="submit" class="btn btn-dark btn-block mb-4 w-50 button-center mt-5">Registrarse</button>
    
          <!-- Register buttons -->
          <div class="text-center">
            <p>No eres miembro? <a href="#!">Registrarse</a></p>
          </div>
        </form>
      </div>
      <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form id="form-register">
          <div class="text-center mb-3">
            <p>Registrarse con:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>
    
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>
    
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>
    
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
    
          <p class="text-center">o:</p>
    
          <!-- Name input -->
          <div class="form-outline mb-4">
            <input type="text" id="registerName" name="nombre" class="form-control" />
            <label class="form-label" for="registerName">Nombre</label>
          </div>
    
          <!-- Username input -->
          <div class="form-outline mb-4">
            <input type="text" id="registerUsername" name="usuario" class="form-control" />
            <label class="form-label" for="registerUsername">Usuario</label>
          </div>
    
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="registerEmail" name="correo" class="form-control" />
            <label class="form-label" for="registerEmail">Email</label>
          </div>
    
          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="registerPassword" name="contraseña" class="form-control" />
            <label class="form-label" for="registerPassword">Contraseña</label>
          </div>
    
          <!-- Repeat Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" name="repetirContraseña" class="form-control" />
            <label class="form-label" for="registerRepeatPassword">Repita la contraseña</label>
          </div>

          <div id="alert-form" class="alert alert-danger" role="alert">
            
            </div>
    
          <!-- Checkbox -->
          <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
              aria-describedby="registerCheckHelpText" />
            <label class="form-check-label" for="registerCheck">
            He leído y acepto los términos
            </label>
          </div>
    
          <!-- Submit button -->
          <button type="submit" class="btn btn-dark btn-block mb-3 w-50 button-center">Registrarse</button>
        </form>
      </div>
    </div>
    <!-- Pills content -->
    </div>
    `

    let newDiv = document.createElement("div")
    newDiv = templateSeries;

    return newDiv
}

export default Login