const form = document.querySelector('form');
const inputList = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  warningIndicator(inputList);
});

const warningIndicator = (inputList) => {
  inputList.forEach(function(input){
    const id = input.getAttribute('id');
    const warningIcon = input.parentElement.querySelector('.icon');
    const label = input.parentElement.querySelector('label');
    
    
    
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (id === 'email') {


      if (!validRegex.test(input.value)) {
        warningIcon.style.display = 'inline-block';
        if(input.value === ''){
            input.classList.remove('input-styling') 
            input.classList.add('border-warning')
            label.textContent = 'Email cannot be empty.';
        
        }else{
            label.textContent = 'Looks like this is not an email address.';
        }
        return;
      }
    }

    if (input.value === '') {
      input.classList.remove('input-styling') 
      input.classList.add('border-warning')
      warningIcon.style.display = 'inline-block';
      label.textContent = `${id[0].toUpperCase() + id.slice(1)} cannot be empty.`;
      
    } else {
      warningIcon.style.display = 'none';
      label.textContent = '';
    }
  });
};
