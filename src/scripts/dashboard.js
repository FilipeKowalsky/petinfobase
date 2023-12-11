function handleModal(){
  const button = document.querySelector('.create_post')
  const modalContainer = document.querySelector('#modalController')

  button.addEventListener('click', () =>{
    modalContainer.showModal()

    closeModal()
  })
}

function closeModal() {
  const buttons = document.querySelectorAll('.close_modal');
  const modalContainer = document.querySelector('#modalController');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      modalContainer.close();
    });
  });
}

handleModal();