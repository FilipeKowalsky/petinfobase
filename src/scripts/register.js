const baseUrl = 'http://localhost:3333/'
const requestHeaders = {
  'Content-Type': 'application/json' 
}

async function createProfile(register){
  try {
    const response = await fetch(`${baseUrl}users/create`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(register)
    })

    if(response.ok) {
      const responseJson = await response.json()
      const user = responseJson.username
      const email = responseJson.email
      const id = responseJson.id
      const avatar = responseJson.avatar

      localStorage.setItem('@doit:user', JSON.stringify(user))
      localStorage.setItem('@doit:email', JSON.stringify(email))
      localStorage.setItem('@doit:id', JSON.stringify(id))
      localStorage.setItem('@doit:avatar', JSON.stringify(avatar))
      
      document.getElementById("alert-div").classList.add("move-left");
      document.getElementById("alert-div").classList.remove("move-right");
      setTimeout(() => {
      document.getElementById("alert-div").classList.remove("move-left");
      document.getElementById("alert-div").classList.add("move-right");
      }, 5000);
    } else {
      const error = await response.text()
      throw new Error(error)
    }
  } catch (error) {
    console.error(error)
    alert('Não foi possível criar o perfil. Verifique os dados e tente novamente.')
  }
}

const registerProfile = document.querySelector('.button_register')
registerProfile.addEventListener('click', event => {
  event.preventDefault()
  
  const username = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const avatar = document.querySelector('#image').value
  
  const register = {
    username,
    email,
    password,
    avatar
  }

  createProfile(register)
})