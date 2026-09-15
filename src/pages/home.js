import StoryPic from '../assets/story-image.jpg'
import dishOnePic from '../assets/nigiri-and-maki-tuna-and-salmon-sushi.jpg'
import dishTwoPic from '../assets/pork-katsu-curry.jpg'
import dishThreePic from '../assets/tonkotsu-ramen.jpeg'

export function createHomePage (onBookTableClick) {

 const mainWrapper = document.createElement('div');
 mainWrapper.classList.add('content-wrapper')
 
// Our Story Glimpse Section
 const ourStory = document.createElement('section');
 ourStory.classList.add('story-section')
 mainWrapper.appendChild(ourStory);

 const storyIMG = document.createElement('img');
 storyIMG.src = StoryPic
 storyIMG.alt = 'Menya Kaze restaurant'
 ourStory.appendChild(storyIMG)

 const storyHeading = document.createElement('h2');
 storyHeading.classList.add('story-heading')
 storyHeading.textContent = 'Our Story';
 ourStory.appendChild(storyHeading);

 const storyGlimpse = document.createElement('p')
 storyGlimpse.classList.add('story-glimpse')
 storyGlimpse.textContent = 'Menya Kaze began with a single bowl, a small stove, and a promise: broth worth waiting for. Named after the wind that carried the scent of simmering pork bones through a quiet backstreet in Kyoto, Kaze was built on the idea that ramen should feel like coming home — warm, unhurried, honest. Every bowl we serve today still follows that first recipe, refined but never rushed.';
 ourStory.appendChild(storyGlimpse)


// menu best seller glimpse
const menuGlimpse = document.createElement('section');
menuGlimpse.classList.add('menu-section');
mainWrapper.appendChild(menuGlimpse);

const bestSellerTitle = document.createElement('h2');
bestSellerTitle.classList.add('menu-title');
bestSellerTitle.textContent = 'Best Sellers'
menuGlimpse.appendChild(bestSellerTitle)

// Dish One
const dish1 = document.createElement('div')
dish1.classList.add('dish-one')
menuGlimpse.appendChild(dish1)

const dishOneIMG = document.createElement('img') 
dishOneIMG.classList.add('dishPic')
dishOneIMG.alt = 'Nigiri and Maki sushi with salmon and tuna'
dishOneIMG.src = dishOnePic
dish1.appendChild(dishOneIMG)

const dishOneName = document.createElement('h4')
dishOneName.classList.add('dishOneName')
dishOneName.textContent = 'Salmon and Tuna Nigiri'
dish1.appendChild(dishOneName)

const dishOneDescription = document.createElement('p')
dishOneDescription.classList.add('dishOneDesc')
dishOneDescription.textContent = 'A High-quality, fresh slices of raw salmon and tuna over seasoned sushi rice. Offering an "Aburi" (torched) version with a light drizzle of spicy mayo or unagi sauce adds a modern, melt-in-your-mouth texture that drives massive sales.'
dish1.appendChild(dishOneDescription)

const dishOnePrice = document.createElement('h4')
dishOnePrice.classList.add('dishOnePrice')
dishOnePrice.textContent = '$9.50'
dish1.appendChild(dishOnePrice)

// Dish Two
const dish2 = document.createElement('div')
dish2.classList.add('dish-two')
menuGlimpse.appendChild(dish2)

const dishTwoIMG = document.createElement('img') 
dishTwoIMG.classList.add('dishtwoPic')
dishTwoIMG.alt = 'Tonkotsu Ramen'
dishTwoIMG.src = dishTwoPic
dish2.appendChild(dishTwoIMG)

const dishTwoName = document.createElement('h4')
dishTwoName.classList.add('dishOneName')
dishTwoName.textContent = 'Tonkotsu Ramen'
dish2.appendChild(dishTwoName)

const dishTwoDescription = document.createElement('p')
dishTwoDescription.classList.add('dishOneDesc')
dishTwoDescription.textContent = 'A rich, creamy pork bone broth boiled for hours, served with wheat noodles, tender chashu pork slices, a soft-boiled marinated egg (ajitama), nori, and scallions. It is a universal crowd favorite and a staple comfort food.'
dish2.appendChild(dishTwoDescription)

const dishTwoPrice = document.createElement('h4')
dishTwoPrice.classList.add('dishOnePrice')
dishTwoPrice.textContent = '$18.50'
dish2.appendChild(dishTwoPrice)

// Dish Three
const dish3 = document.createElement('div')
dish3.classList.add('dish-three')
menuGlimpse.appendChild(dish3)

const dishThreeIMG = document.createElement('img') 
dishThreeIMG.classList.add('dishthreePic')
dishThreeIMG.alt = 'Pork Katsu Curry'
dishThreeIMG.src = dishThreePic
dish3.appendChild(dishThreeIMG)

const dishThreeName = document.createElement('h4')
dishThreeName.classList.add('dishThreeName')
dishThreeName.textContent = 'Pork Katsu Curry'
dish3.appendChild(dishThreeName)

const dishThreeDescription = document.createElement('p')
dishThreeDescription.classList.add('dishThreeDesc')
dishThreeDescription.textContent = 'A crispy, panko-breaded cutlet served over a bed of steamed white rice, smothered in a thick, savory, and slightly sweet Japanese curry sauce.'
dish3.appendChild(dishThreeDescription)

const dishThreePrice = document.createElement('h4')
dishThreePrice.classList.add('dishThreePrice')
dishThreePrice.textContent = '$19.00'
dish3.appendChild(dishThreePrice)

// Contact Us button
const contactUsGlimpse = document.createElement('section');
contactUsGlimpse.classList.add('contactUs-section');
mainWrapper.appendChild(contactUsGlimpse);

const reserveBtn = document.createElement('button')
reserveBtn.classList.add('reserveNowBtm')
reserveBtn.textContent = 'Book a Table Now!'
reserveBtn.addEventListener('click',onBookTableClick)
contactUsGlimpse.appendChild(reserveBtn)
 return mainWrapper;
}