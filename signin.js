window.addEventListener('keydown', (event) => {
    if(event.code === 'Enter') {
        signIn()
    }
})

const detailsArray = JSON.parse(localStorage.getItem('storageDetails'));

function signIn() {
    myBtn.textContent = "Loading..."
    if(email.value.trim() === '' || password.value.trim() === ''){
        alert("Enter a valud input!");
        myBtn.textContent = "Sign In"
    } else {
        const foundUser = detailsArray.find(user => user.eMail === email.value && user.passWord === password.value);

        if (foundUser) {
            localStorage.signedInUser = JSON.stringify(foundUser)
            setTimeout(() => {
                window.location.href = 'home.html'
            }, 2000);

        } else {
            alert("Invalid details!")
            myBtn.textContent = "Sign In"
        }
    }
}