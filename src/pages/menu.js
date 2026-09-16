
export function createMenuPage (){
    const menuWrapper = document.createElement('main') 
    menuWrapper.classList.add('menu-wrap')
    
// Appetizers
const appetizersWrap = document.createElement('section')
appetizersWrap.classList.add('appetizersSection')
menuWrapper.appendChild(appetizersWrap)

const appetizersTitle = document.createElement('h2');
appetizersTitle.classList.add('appetizer-title');
appetizersTitle.textContent = 'Appetizers';
appetizersWrap.appendChild(appetizersTitle);

        // Appetizer1
    const appetizerOneWrap = document.createElement('div')
    appetizerOneWrap.classList.add('AppDishOneWrap')
    appetizersWrap.appendChild(appetizerOneWrap)

    const appetizerOneName = document.createElement('h4')
    appetizerOneName.classList.add('appDish1')
    appetizerOneName.textContent = 'Gyoza Yaki'
    appetizerOneWrap.appendChild(appetizerOneName)

    const appetizerOneDescription = document.createElement('p')
    appetizerOneDescription.classList.add('appDish1Desc')
    appetizerOneDescription.textContent = 'Pan-seared pork and cabbage dumplings, crisp on the bottom, served with a soy-vinegar dip.'
    appetizerOneWrap.appendChild(appetizerOneDescription)

    const appetizerOnePrice  = document.createElement('strong')
    appetizerOnePrice.classList.add('appDish1Price')
    appetizerOnePrice.textContent = '$6.50'
    appetizerOneWrap.appendChild(appetizerOnePrice)


            // Appetizer2
    const appetizerTwoWrap = document.createElement('div')
    appetizerTwoWrap.classList.add('AppDishTwoWrap')
    appetizersWrap.appendChild(appetizerTwoWrap)

    const appetizerTwoName = document.createElement('h4')
    appetizerTwoName.classList.add('appDish2')
    appetizerTwoName.textContent = 'Age Tofu'
    appetizerTwoWrap.appendChild(appetizerTwoName)

    const appetizerTwoDescription = document.createElement('p')
    appetizerTwoDescription.classList.add('appDish2Desc')
    appetizerTwoDescription.textContent = 'Lightly fried silken tofu in a warm dashi broth, topped with grated daikon and scallions.'
    appetizerTwoWrap.appendChild(appetizerTwoDescription)

    const appetizerTwoPrice  = document.createElement('strong')
    appetizerTwoPrice.classList.add('appDish2Price')
    appetizerTwoPrice.textContent = '$5.00'
    appetizerTwoWrap.appendChild(appetizerTwoPrice)


           // Appetizer3
    const appetizerThreeWrap = document.createElement('div')
    appetizerThreeWrap.classList.add('AppDishThreeWrap')
    appetizersWrap.appendChild(appetizerThreeWrap)

    const appetizerThreeName = document.createElement('h4')
    appetizerThreeName.classList.add('appDish3')
    appetizerThreeName.textContent = 'Kaarage Bites'
    appetizerThreeWrap.appendChild(appetizerThreeName)

    const appetizerThreeDescription = document.createElement('p')
    appetizerThreeDescription.classList.add('appDish3Desc')
    appetizerThreeDescription.textContent = 'Japanese fried chicken thigh, marinated in soy and ginger, served with Kewpie mayo.'
    appetizerThreeWrap.appendChild(appetizerThreeDescription)

    const appetizerThreePrice  = document.createElement('strong')
    appetizerThreePrice.classList.add('appDish3Price')
    appetizerThreePrice.textContent = '$7.50'
    appetizerThreeWrap.appendChild(appetizerThreePrice)


    // Sushi And Rolls
const SushiAndRollsWrap = document.createElement('section')
SushiAndRollsWrap.classList.add('SushiAndRollsSection')
menuWrapper.appendChild(SushiAndRollsWrap)

const SushiTitle = document.createElement('h2');
SushiTitle.classList.add('sushi-and-rolls-title');
SushiTitle.textContent = 'Sushi & Rolls';
SushiAndRollsWrap.appendChild(SushiTitleTitle);

        // Sushi1
    const sushiOneWrap = document.createElement('div')
    sushiOneWrap.classList.add('susDishOneWrap')
    SushiAndRollsWrap.appendChild(sushiOneWrap)

    const sushiOneName = document.createElement('h4')
    sushiOneName.classList.add('susDish1')
    sushiOneName.textContent = 'Salmon and Tuna Nigiri'
    sushiOneWrap.appendChild(sushiOneName)

    const sushiOneDescription = document.createElement('p')
    sushiOneDescription.classList.add('susDish1Desc')
    sushiOneDescription.textContent = 'Fresh slices of salmon and tuna over seasoned sushi rice, with an optional torched "Aburi" style.'
    sushiOneWrap.appendChild(sushiOneDescription)

    const sushiOnePrice  = document.createElement('strong')
    sushiOnePrice.classList.add('susDish1Price')
    sushiOnePrice.textContent = '$9.50'
    sushiOneWrap.appendChild(sushiOnePrice)


            // Appetizer2
    const sushiTwoWrap = document.createElement('div')
    sushiTwoWrap.classList.add('susDishTwoWrap')
    SushiAndRollsWrap.appendChild(sushiTwoWrap)

    const sushiTwoName = document.createElement('h4')
    sushiTwoName.classList.add('susDish2')
    sushiTwoName.textContent = 'Kaze Roll'
    sushiTwoWrap.appendChild(sushiTwoName)

    const sushiTwoDescription = document.createElement('p')
    sushiTwoDescription.classList.add('susDish2Desc')
    sushiTwoDescription.textContent = 'Shrimp tempura, avocado, and cucumber, topped with spicy tuna and a drizzle of eel sauce.'
    sushiTwoWrap.appendChild(sushiTwoDescription )

    const sushiTwoPrice  = document.createElement('strong')
    sushiTwoPrice.classList.add('susDish2Price')
    sushiTwoPrice.textContent = '$11.00'
    sushiTwoWrap.appendChild(sushiTwoPrice)


           // Appetizer3
    const sushiThreeWrap = document.createElement('div')
    sushiThreeWrap.classList.add('susDishThreeWrap')
    SushiAndRollsWrap.appendChild(sushiThreeWrap)

    const sushiThreeName = document.createElement('h4')
    sushiThreeName.classList.add('susDish3')
    sushiThreeName.textContent = 'Vegetable Maki'
    sushiThreeWrap.appendChild(sushiThreeName)

    const sushiThreeDescription = document.createElement('p')
    sushiThreeDescription.classList.add('susDish3Desc')
    sushiThreeDescription.textContent = 'Cucumber, avocado, and pickled radish rolled in nori and sushi rice.'
    sushiThreeWrap.appendChild(sushiThreeDescription)

    const sushiThreePrice  = document.createElement('strong')
    sushiThreePrice.classList.add('susDish3Price')
    sushiThreePrice.textContent = '$7.00'
    sushiThreeWrap.appendChild(sushiThreePrice)

    return menuWrapper;
}