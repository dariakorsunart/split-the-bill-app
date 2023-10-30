const button = document.querySelector("#calculate");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const numberOfPeople = document.querySelector("#number").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || numberOfPeople === "" || numberOfPeople < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please, enter ALL required information!',
            heightAuto: false
        })
    }

    let amountPerPerson = bill/numberOfPeople;
    let tipPerPerson = (bill*tip)/numberOfPeople;
    let totalSum = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#billPerPerson").textContent = amountPerPerson;
    document.querySelector("#tipPerPerson").textContent = tipPerPerson;
    document.querySelector("#totalPerPerson").textContent = totalSum;
}

function showTip(e){
    e.preventDefault();
    tip.style.display = "block";
}
