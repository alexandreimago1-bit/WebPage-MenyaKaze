
export function createMenuPage (){
    const menuWrapper = document.createElement('main') 
    menuWrapper.classList.add('menu-wrap')
    
// Appetizers
const appetizersWrap = document.createElement('section')
appetizersWrap.classList.add('appetizersSection', 'menu-category')
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
    appetizerThreeName.textContent = 'Karaage Bites'
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
SushiAndRollsWrap.classList.add('SushiAndRollsSection', 'menu-category')
menuWrapper.appendChild(SushiAndRollsWrap)

const SushiTitle = document.createElement('h2');
SushiTitle.classList.add('sushi-and-rolls-title');
SushiTitle.textContent = 'Sushi & Rolls';
SushiAndRollsWrap.appendChild(SushiTitle);

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


            // Sushi2
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


           // Sushi3
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


    // Rice Dishes
const riceDishesWrap = document.createElement('section')
riceDishesWrap.classList.add('riceDishesSection', 'menu-category')
menuWrapper.appendChild(riceDishesWrap)

const riceDishesTitle = document.createElement('h2');
riceDishesTitle.classList.add('rice-dishes-title');
riceDishesTitle.textContent = 'Rice Dishes';
riceDishesWrap.appendChild(riceDishesTitle);

        // Rice Dish 1
    const riceDishOneWrap = document.createElement('div')
    riceDishOneWrap.classList.add('riceDishOneWrap')
    riceDishesWrap.appendChild(riceDishOneWrap)

    const riceDishOneName = document.createElement('h4')
    riceDishOneName.classList.add('riceDish1')
    riceDishOneName.textContent = 'Pork Katsu Curry'
    riceDishOneWrap.appendChild(riceDishOneName)

    const riceDishOneDescription = document.createElement('p')
    riceDishOneDescription.classList.add('riceDish1Desc')
    riceDishOneDescription.textContent = 'Crispy panko-breaded pork cutlet over steamed rice, smothered in savory Japanese curry.'
    riceDishOneWrap.appendChild(riceDishOneDescription)

    const riceDishOnePrice  = document.createElement('strong')
    riceDishOnePrice.classList.add('riceDish1Price')
    riceDishOnePrice.textContent = '$19.00'
    riceDishOneWrap.appendChild(riceDishOnePrice)


            // Rice Dish 2
    const riceDishTwoWrap = document.createElement('div')
    riceDishTwoWrap.classList.add('riceDishTwoWrap')
    riceDishesWrap.appendChild(riceDishTwoWrap)

    const riceDishTwoName = document.createElement('h4')
    riceDishTwoName.classList.add('riceDish2')
    riceDishTwoName.textContent = 'Gyudon'
    riceDishTwoWrap.appendChild(riceDishTwoName)

    const riceDishTwoDescription = document.createElement('p')
    riceDishTwoDescription.classList.add('riceDish2Desc')
    riceDishTwoDescription.textContent = 'Thinly sliced simmered beef and onions over rice in a sweet-savory soy broth, topped with a soft egg.'
    riceDishTwoWrap.appendChild(riceDishTwoDescription)

    const riceDishTwoPrice  = document.createElement('strong')
    riceDishTwoPrice.classList.add('riceDish2Price')
    riceDishTwoPrice.textContent = '$14.50'
    riceDishTwoWrap.appendChild(riceDishTwoPrice)


           // Rice Dish 3
    const riceDishThreeWrap = document.createElement('div')
    riceDishThreeWrap.classList.add('riceDishThreeWrap')
    riceDishesWrap.appendChild(riceDishThreeWrap)

    const riceDishThreeName = document.createElement('h4')
    riceDishThreeName.classList.add('riceDish3')
    riceDishThreeName.textContent = 'Chicken Teriyaki Don'
    riceDishThreeWrap.appendChild(riceDishThreeName)

    const riceDishThreeDescription = document.createElement('p')
    riceDishThreeDescription.classList.add('riceDish3Desc')
    riceDishThreeDescription.textContent = 'Grilled chicken thigh glazed in teriyaki sauce, served over rice with steamed vegetables.'
    riceDishThreeWrap.appendChild(riceDishThreeDescription)

    const riceDishThreePrice  = document.createElement('strong')
    riceDishThreePrice.classList.add('riceDish3Price')
    riceDishThreePrice.textContent = '$13.50'
    riceDishThreeWrap.appendChild(riceDishThreePrice)


    // Ramen
const ramenWrap = document.createElement('section')
ramenWrap.classList.add('ramenSection', 'menu-category')
menuWrapper.appendChild(ramenWrap)

const ramenTitle = document.createElement('h2');
ramenTitle.classList.add('ramen-title');
ramenTitle.textContent = 'Ramen';
ramenWrap.appendChild(ramenTitle);

        // Ramen 1
    const ramenOneWrap = document.createElement('div')
    ramenOneWrap.classList.add('ramenOneWrap')
    ramenWrap.appendChild(ramenOneWrap)

    const ramenOneName = document.createElement('h4')
    ramenOneName.classList.add('ramen1')
    ramenOneName.textContent = 'Tonkotsu Ramen'
    ramenOneWrap.appendChild(ramenOneName)

    const ramenOneDescription = document.createElement('p')
    ramenOneDescription.classList.add('ramen1Desc')
    ramenOneDescription.textContent = 'Rich, creamy pork bone broth, wheat noodles, chashu pork, ajitama egg, nori, and scallions.'
    ramenOneWrap.appendChild(ramenOneDescription)

    const ramenOnePrice  = document.createElement('strong')
    ramenOnePrice.classList.add('ramen1Price')
    ramenOnePrice.textContent = '$18.50'
    ramenOneWrap.appendChild(ramenOnePrice)


            // Ramen 2
    const ramenTwoWrap = document.createElement('div')
    ramenTwoWrap.classList.add('ramenTwoWrap')
    ramenWrap.appendChild(ramenTwoWrap)

    const ramenTwoName = document.createElement('h4')
    ramenTwoName.classList.add('ramen2')
    ramenTwoName.textContent = 'Shoyu Ramen'
    ramenTwoWrap.appendChild(ramenTwoName)

    const ramenTwoDescription = document.createElement('p')
    ramenTwoDescription.classList.add('ramen2Desc')
    ramenTwoDescription.textContent = 'Clear soy-based broth with wheat noodles, bamboo shoots, chashu, and a soft-boiled egg.'
    ramenTwoWrap.appendChild(ramenTwoDescription)

    const ramenTwoPrice  = document.createElement('strong')
    ramenTwoPrice.classList.add('ramen2Price')
    ramenTwoPrice.textContent = '$16.00'
    ramenTwoWrap.appendChild(ramenTwoPrice)


           // Ramen 3
    const ramenThreeWrap = document.createElement('div')
    ramenThreeWrap.classList.add('ramenThreeWrap')
    ramenWrap.appendChild(ramenThreeWrap)

    const ramenThreeName = document.createElement('h4')
    ramenThreeName.classList.add('ramen3')
    ramenThreeName.textContent = 'Miso Kaze Ramen'
    ramenThreeWrap.appendChild(ramenThreeName)

    const ramenThreeDescription = document.createElement('p')
    ramenThreeDescription.classList.add('ramen3Desc')
    ramenThreeDescription.textContent = "Miso-based broth with ground pork, corn, butter, and scallions — Menya Kaze's house specialty."
    ramenThreeWrap.appendChild(ramenThreeDescription)

    const ramenThreePrice  = document.createElement('strong')
    ramenThreePrice.classList.add('ramen3Price')
    ramenThreePrice.textContent = '$17.00'
    ramenThreeWrap.appendChild(ramenThreePrice)


    // Drinks
const drinksWrap = document.createElement('section')
drinksWrap.classList.add('drinksSection', 'menu-category')
menuWrapper.appendChild(drinksWrap)

const drinksTitle = document.createElement('h2');
drinksTitle.classList.add('drinks-title');
drinksTitle.textContent = 'Drinks';
drinksWrap.appendChild(drinksTitle);

        // Drink 1
    const drinkOneWrap = document.createElement('div')
    drinkOneWrap.classList.add('drinkOneWrap')
    drinksWrap.appendChild(drinkOneWrap)

    const drinkOneName = document.createElement('h4')
    drinkOneName.classList.add('drink1')
    drinkOneName.textContent = 'Iced Genmaicha'
    drinkOneWrap.appendChild(drinkOneName)

    const drinkOneDescription = document.createElement('p')
    drinkOneDescription.classList.add('drink1Desc')
    drinkOneDescription.textContent = 'Roasted brown rice green tea, served cold.'
    drinkOneWrap.appendChild(drinkOneDescription)

    const drinkOnePrice  = document.createElement('strong')
    drinkOnePrice.classList.add('drink1Price')
    drinkOnePrice.textContent = '$3.50'
    drinkOneWrap.appendChild(drinkOnePrice)


            // Drink 2
    const drinkTwoWrap = document.createElement('div')
    drinkTwoWrap.classList.add('drinkTwoWrap')
    drinksWrap.appendChild(drinkTwoWrap)

    const drinkTwoName = document.createElement('h4')
    drinkTwoName.classList.add('drink2')
    drinkTwoName.textContent = 'Ramune'
    drinkTwoWrap.appendChild(drinkTwoName)

    const drinkTwoDescription = document.createElement('p')
    drinkTwoDescription.classList.add('drink2Desc')
    drinkTwoDescription.textContent = 'Classic Japanese marble soda, choice of original or strawberry.'
    drinkTwoWrap.appendChild(drinkTwoDescription)

    const drinkTwoPrice  = document.createElement('strong')
    drinkTwoPrice.classList.add('drink2Price')
    drinkTwoPrice.textContent = '$4.00'
    drinkTwoWrap.appendChild(drinkTwoPrice)


           // Drink 3
    const drinkThreeWrap = document.createElement('div')
    drinkThreeWrap.classList.add('drinkThreeWrap')
    drinksWrap.appendChild(drinkThreeWrap)

    const drinkThreeName = document.createElement('h4')
    drinkThreeName.classList.add('drink3')
    drinkThreeName.textContent = 'Yuzu Lemonade'
    drinkThreeWrap.appendChild(drinkThreeName)

    const drinkThreeDescription = document.createElement('p')
    drinkThreeDescription.classList.add('drink3Desc')
    drinkThreeDescription.textContent = 'Citrusy yuzu blended with fresh lemonade, lightly sweetened.'
    drinkThreeWrap.appendChild(drinkThreeDescription)

    const drinkThreePrice  = document.createElement('strong')
    drinkThreePrice.classList.add('drink3Price')
    drinkThreePrice.textContent = '$4.50'
    drinkThreeWrap.appendChild(drinkThreePrice)


    // Desserts
const dessertsWrap = document.createElement('section')
dessertsWrap.classList.add('dessertsSection', 'menu-category')
menuWrapper.appendChild(dessertsWrap)

const dessertsTitle = document.createElement('h2');
dessertsTitle.classList.add('desserts-title');
dessertsTitle.textContent = 'Desserts';
dessertsWrap.appendChild(dessertsTitle);

        // Dessert 1
    const dessertOneWrap = document.createElement('div')
    dessertOneWrap.classList.add('dessertOneWrap')
    dessertsWrap.appendChild(dessertOneWrap)

    const dessertOneName = document.createElement('h4')
    dessertOneName.classList.add('dessert1')
    dessertOneName.textContent = 'Matcha Tiramisu'
    dessertOneWrap.appendChild(dessertOneName)

    const dessertOneDescription = document.createElement('p')
    dessertOneDescription.classList.add('dessert1Desc')
    dessertOneDescription.textContent = 'Layers of matcha-soaked ladyfingers and mascarpone cream, dusted with cocoa and matcha powder.'
    dessertOneWrap.appendChild(dessertOneDescription)

    const dessertOnePrice  = document.createElement('strong')
    dessertOnePrice.classList.add('dessert1Price')
    dessertOnePrice.textContent = '$6.50'
    dessertOneWrap.appendChild(dessertOnePrice)


            // Dessert 2
    const dessertTwoWrap = document.createElement('div')
    dessertTwoWrap.classList.add('dessertTwoWrap')
    dessertsWrap.appendChild(dessertTwoWrap)

    const dessertTwoName = document.createElement('h4')
    dessertTwoName.classList.add('dessert2')
    dessertTwoName.textContent = 'Mochi Trio'
    dessertTwoWrap.appendChild(dessertTwoName)

    const dessertTwoDescription = document.createElement('p')
    dessertTwoDescription.classList.add('dessert2Desc')
    dessertTwoDescription.textContent = 'Three chewy rice cakes filled with red bean, matcha, and black sesame.'
    dessertTwoWrap.appendChild(dessertTwoDescription)

    const dessertTwoPrice  = document.createElement('strong')
    dessertTwoPrice.classList.add('dessert2Price')
    dessertTwoPrice.textContent = '$5.50'
    dessertTwoWrap.appendChild(dessertTwoPrice)


           // Dessert 3
    const dessertThreeWrap = document.createElement('div')
    dessertThreeWrap.classList.add('dessertThreeWrap')
    dessertsWrap.appendChild(dessertThreeWrap)

    const dessertThreeName = document.createElement('h4')
    dessertThreeName.classList.add('dessert3')
    dessertThreeName.textContent = 'Dorayaki'
    dessertThreeWrap.appendChild(dessertThreeName)

    const dessertThreeDescription = document.createElement('p')
    dessertThreeDescription.classList.add('dessert3Desc')
    dessertThreeDescription.textContent = 'Fluffy pancake sandwich filled with sweet red bean paste.'
    dessertThreeWrap.appendChild(dessertThreeDescription)

    const dessertThreePrice  = document.createElement('strong')
    dessertThreePrice.classList.add('dessert3Price')
    dessertThreePrice.textContent = '$4.00'
    dessertThreeWrap.appendChild(dessertThreePrice)

    return menuWrapper;
}