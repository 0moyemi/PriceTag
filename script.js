window.addEventListener('keydown', (event) => {
    if(event.code === 'Enter') {
        signUp()
    }
})

const detailsArray = JSON.parse(localStorage.getItem('storageDetails')) || []

const signUp = () => {
    myBtn.textContent = "loading..."
    if(username.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '') {
        alert("Enter a valid input");
        myBtn.textContent = "Sign Up"
    } else {
        const userName = username.value;
        const eMail = email.value;
        const passWord = password.value;
        const userDetails = {userName, eMail, passWord}

        const existingUser = detailsArray.find(user => user.eMail === email.value);

        if(existingUser == undefined) {
            detailsArray.push(userDetails)
            localStorage.storageDetails = JSON.stringify(detailsArray);
            setTimeout(() => {
                window.location.href = 'signin.html'
            }, 2000);
            return;
        } else {
            alert("User already exists!")
            myBtn.textContent = "Sign Up"
        }
    }
}