export function createAboutPage(){
    const aboutWrapper = document.createElement("main");
    aboutWrapper.classList.add("aboutStoryWrap");

    const ourStoryTitle = document.createElement("h2");
    ourStoryTitle.classList.add("ourStoryTitle");
    ourStoryTitle.textContent = "Our Story";
    aboutWrapper.appendChild(ourStoryTitle);

    // Where the Wind Began
    const storyOneContainer = document.createElement("section");
    storyOneContainer.classList.add("storyOneContainer");
    aboutWrapper.appendChild(storyOneContainer);

    const storyOneTitle = document.createElement("h4");
    storyOneTitle.classList.add("storyOneTitle");
    storyOneTitle.textContent = "Where the Wind Began";
    storyOneContainer.appendChild(storyOneTitle);

    const storyOneContent = document.createElement("p");
    storyOneContent.classList.add("storyOneContent");
    storyOneContent.textContent = "Menya Kaze began with a simple idea: a bowl of ramen should feel like coming home. \nOur story started with Kenji Sato, a young cook who grew up in a small coastal town in Japan. His earliest memories were of standing beside his grandmother in the kitchen, watching her prepare broth slowly and patiently, never measuring by the clock, but by taste.\n Years later, Kenji left home to work in ramen shops across Japan. He learned from different kitchens, different chefs, and different bowls of ramen. He learned that there was no single way to make a great bowl — only a commitment to doing every part of it with care.\nBut one thing always stayed with him: the feeling of those quiet evenings at home, when a warm bowl of noodles could make an ordinary day feel a little better.\nThat feeling became Menya Kaze.";
    storyOneContainer.appendChild(storyOneContent);


    // Why Kaze?
    const storyTwoContainer = document.createElement("section");
    storyTwoContainer.classList.add("storyTwoContainer");
    aboutWrapper.appendChild(storyTwoContainer);

    const storyTwoTitle = document.createElement("h4");
    storyTwoTitle.classList.add("storyTwoTitle");
    storyTwoTitle.textContent = `Why "Kaze"?`;
    storyTwoContainer.appendChild(storyTwoTitle);

    const storyTwoContent = document.createElement("p");
    storyTwoContent.classList.add("storyTwoContent");
    storyTwoContent.textContent = `Kaze means "wind" in Japanese.\nFor us, it represents movement.\nThe wind carries something from one place to another, changing along the way while never losing where it came from. Menya Kaze was built around the same idea — bringing together the traditions Kenji grew up with and the people, flavors, and experiences he discovered along the way.\nOur menu is rooted in Japanese ramen tradition, but it isn't meant to stand still.\nWe believe food should have room to evolve.`;
    storyTwoContainer.appendChild(storyTwoContent);


    // Our Ramen
    const storyThreeContainer = document.createElement("section");
    storyThreeContainer.classList.add("storyThreeContainer");
    aboutWrapper.appendChild(storyThreeContainer);

    const storyThreeTitle = document.createElement("h4");
    storyThreeTitle.classList.add("storyThreeTitle");
    storyThreeTitle.textContent = `Our Ramen`;
    storyThreeContainer.appendChild(storyThreeTitle);

    const storyThreeContent = document.createElement("p");
    storyThreeContent.classList.add("storyThreeContent");
    storyThreeContent.textContent = `Every bowl begins with the basics.\nOur broth is prepared slowly, our noodles are cooked to order, and every topping has a purpose. We focus on balance rather than excess — rich broth, springy noodles, carefully prepared proteins, and toppings that complement rather than overwhelm.\nWe don't believe you need to make ramen complicated to make it memorable.\nSometimes, the best bowl is simply the one you want to finish to the very last drop.`;
    storyThreeContainer.appendChild(storyThreeContent); 


    // More Than a Bowl
    const storyFourContainer = document.createElement("section");
    storyFourContainer.classList.add("storyFourContainer");
    aboutWrapper.appendChild(storyFourContainer);

    const storyFourTitle = document.createElement("h4");
    storyFourTitle.classList.add("storyFourTitle");
    storyFourTitle.textContent = `More Than a Bowl`;
    storyFourContainer.appendChild(storyFourTitle);

    const storyFourContent = document.createElement("p");
    storyFourContent.classList.add("storyFourContent");
    storyFourContent.textContent = `Menya Kaze was created to be more than a place to eat.\nIt's a place to slow down.\nA place for a quick bowl after a long day. A late-night conversation with friends. A quiet meal by yourself. A first date. A familiar table you return to again and again\n Whether you're here for your first bowl or your hundredth, we hope you leave feeling a little warmer than when you arrived.\nThat's the kind of ramen we set out to make.\nThat's Menya Kaze.`;
    storyFourContainer.appendChild(storyFourContent); 


    // slogan
    const storySlogan = document.createElement("strong");
    storySlogan.classList.add("storySlogan");
    storySlogan.textContent = `Good food. Good Company. Follow the wind`;
    storyFourContainer.appendChild(storySlogan);
    return aboutWrapper;
}