function validateForm(e){
    e.preventDefault()

    
    let balance = document.getElementById('b_alance').value
    let loan = document.getElementById('l_oan').value
    let history = document.getElementById('h_istory').value
    let deposit = document.getElementById('d_eposit').value
    let collection = document.getElementById('c_ollection').value
    let repayment = document.getElementById('r_epayment').value
    let type = document.getElementById('t_ype').value


    let b_err= document.getElementById('b_err')
    let l_err= document.getElementById('l_err')
    let c_err= document.getElementById('c_err')
    let d_err= document.getElementById('d_err')
    let  co_err= document.getElementById('co_err')
    let  r_err= document.getElementById('r_err')
    let t_err = document.getElementById('t_err')


    let loaner = document.getElementById('loaner')


    b_err.textContent = '';
    l_err.textContent = '';
    c_err.textContent = '';
    d_err.textContent = '';
    co_err.textContent = '';
    r_err.textContent = '';
    t_err.textContent = '';


    // console.log(FName)

    let isValid = true
    let points = 0


    if(balance === ''){
        b_err.textContent = "Account balance here"
        isValid = false
    }else if(balance >= loan){
        points += 10
    }else{
        points -= 10
    }

    if(loan === ''){
        l_err.textContent = "Put in loan amount"
        isValid = false
    }

    if(history === ''){
        c_err.textContent = "Enter duration of the last time of being credited in months"
        isValid = false
    }else (history <= 6);{
        points += 10
    }

    if(deposit === ''){
        d_err.textContent = "Enter duration from last deposit in months"
        isValid = false
    }else(deposit <= 1);{
        points += 5
    }

    if(collection === ''){
        co_err.textContent = "Enter duration from last loan collection in months"
        isValid = false
    }else(collection >= 7);{
        points += 10
    }

    if(repayment === ''){
        r_err.textContent = "Enter duration for loan repayment"
        isValid = false
    }else(repayment <= 5);{
        points += 5
    }

    if(type === ''){
        t_err.textContent = "Enter type of account operated"
        isValid = false
    }else if(type === "current"){
        points += 10
    }else(type === "savings");{
        points += 5
    }

    

    if(isValid && points >= 30){
        loaner.textContent="Congrats, your loan has been granted."
        console.log(points)
    }else{
        loaner.textContent = "Better luck next time"
    }
}