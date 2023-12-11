const baseUrl = 'http://localhost:3333/'
const requestHeaders = {
  'Content-Type': 'application/json' 
}

async function loginRequest(loginBody){
  const tokenRequest = await fetch(`${baseUrl}login`, {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(loginBody)
  })
  .then(async res => {
    if(res.ok) {
      const responseJson = await res.json()
      const token = responseJson

      localStorage.setItem('@doit:token', JSON.stringify(token))
      console.log(responseJson)
      location.replace('src/pages/dashboard.html')
    }else{
      throw new Error ('Erro ao realizar login')
    }
  })
  .catch(() => {
    const errorPassword = document.querySelector('#erro_password')
    const password = document.querySelector('.password')
    errorPassword.classList.remove('hidden')
    password.classList.add('error')
  })
  return tokenRequest
}

function acessLogin(){
  const buttonLogin = document.querySelector('.button_access')
  buttonLogin.addEventListener('click', () =>{
    const login = document.querySelector('.login')
    const password = document.querySelector('.password')
    loginRequest({
      email: login.value,
      password: password.value
    })
  })
}
acessLogin()