const glazingPriceList = { 
    "Keep original" : 0.00,
    "Sugar milk" : 0.00,
    "Vanilla milk" : 0.50,
    "Double chocolate" : 1.50
};

const rollPriceList = { 
    "original" : 2.49,
    "apple" : 3.49,
    "raisin" : 2.99,
    "walnut" : 3.49,
    "chocolate" : 3.99,
    "strawberry" : 3.99
};

let cart = [];


class Roll {
    // type, price, glazing and packSize
    constructor(type, glazing, packSize) {
        this.type = type;
        this.glazing = glazing;
        this.packSize = packSize;
        this.price = this.calculatePrice(type, glazing, packSize);
    }

    setPackSize(size) {
        this.packSize = size;
        //recalculate price 
        this.price = this.calculatePrice(this.type, this.glazing, this.packSize);
        console.log(this.price)
    }

    getPrice() {
        return this.price;
    }

    calculatePrice(type, glazing, packSize) {
        console.log("type", type)
        console.log("glazing", glazing)
        let rollPrice = rollPriceList[type];
        let glazePrice = glazingPriceList[glazing];
        
        let packPrice = Number(packSize);
        if(packPrice === 6 ) 
            packPrice = 5;
        else if(packPrice === 12)
            packPrice = 10;
    
        console.log("calculating")
        console.log(rollPrice, glazePrice, packPrice);
        console.log((rollPrice + glazePrice) * packPrice);
        return (rollPrice + glazePrice) * packPrice;
    }
}

function populateGlazingOptions() {
    let glazingDropDown = document.getElementsByClassName("glazing-options");

    for(const dropDown of glazingDropDown)
    {
        for (const glazing in glazingPriceList)
        {
            let option = document.createElement("option");
            dropDown.add(option);
            option.text = glazing;
        }
    } 
}
populateGlazingOptions();

function glazingChange(glazing) {
    const rollType = glazing.parentNode.parentNode.id;
    let size = 1;
    const roll = new Roll(rollType, glazing.value, size);

    document.body.addEventListener('change', function (e) {
        let target = e.target;
        switch (target.id) {
            case `size1-${rollType}`:
                size = 1;
                break;
            case `size3-${rollType}`:
                size = 3;
                break;
            case `size6-${rollType}`:
                size = 6;
                break;
            case `size12-${rollType}`:
                size = 12;
                break;
        }
        console.log(size);
        console.log("ROLLTYPE", rollType)
        console.log("GLAZING", glazing.value)
        roll.setPackSize(size);
        console.log(roll)
        cart = cart + roll;
        console.log("PRICE", roll.getPrice())

        const priceTag = document.getElementById(`${rollType}-price`);
        const roundedPrice = Number(roll.getPrice()).toFixed(2);
        priceTag.innerHTML = `$${roundedPrice}`;
        console.log(priceTag.innerHTML)
    });

    const addToCartButton = document.getElementById(`add-${rollType}`);
        console.log(addToCartButton);
        addToCartButton.addEventListener("click", addToCart(roll));
}

function addToCart(roll) {
    cart = cart + roll;
    console.log("added to cart!")
    console.log(cart.size)
}