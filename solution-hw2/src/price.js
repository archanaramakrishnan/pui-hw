
const glazingWithPrice = { 
    "Keep original" : 0.00,
    "Sugar milk" : 0.00,
    "Vanilla milk" : 0.50,
    "Double chocolate" : 1.50
};

const roll = { 
    "Original" : 2.49,
    "Apple" : 3.49,
    "Raisin" : 2.99,
    "Walnut" : 3.49,
    "Double-chocolate" : 3.99,
    "Strawberry" : 3.99
};

// type, price, glazing and packSize


function populateGlazingOptions() {
    let glazingDropDown = document.getElementsByClassName("glazing-options");

    console.log(glazingDropDown)

    for(const dropDown of glazingDropDown)
    {
        console.log(dropDown)

        for (const glazing in glazingWithPrice)
        {
            let option = document.createElement("option");
            dropDown.add(option);
            option.text = glazing;
        }
    }


    
}


// function populateGlazingOptions() {
//     let glazingDropDown = document.getElementsByClassName("glazing-options");
//     console.log(glazingDropDown)

//     for (const dropDown in glazingDropDown)
//     {
//         console.log(dropDown[0])
//         for (const glazing in glazingWithPrice)
//         {
//             let option = document.createElement("option");
//             dropDown.add(option);
//             option.text = glazing;
//         }
//     }
    
    
// }


function calculatePrice() {
    // (basePrice + glazingPrice) * packPrice
}

calculatePrice();
populateGlazingOptions();
