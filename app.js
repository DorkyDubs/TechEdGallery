const innerHeight = window.innerHeight;
const mobile = window.innerWidth <= 500;
console.log(mobile);
let images = [
  {
    name: "Cow",
    src: "./assets/Cow_large.jpg",
    srcSmall: "./assets/small_Img/Cow_mobile.jpg",
    srcThumbSmall: "./assets/thumbs/smallThumbs/CowThumbSmall.jpg",
    srcThumb: "./assets/thumbs/CowThumb.jpg",
    alt: "A Beautiful Bovine staring to the east.",
    altThumb: "Thumbnail of a cow image",
  },
  {
    name: "pig",
    src: "./assets/pig_large.jpg",
    srcSmall: "./assets/small_Img/pig_mobile.jpg",
    srcThumb: "./assets/thumbs/pigThumb.jpg",
    srcThumbSmall: "./assets/thumbs/smallThumbs/pigThumbSmall.jpg",
    alt: "A Hog having a lie down on the beach",
    altThumb: "Thumbnail of a hog image",
  },
  {
    name: "rhino",
    src: "./assets/rhino_large.jpg",
    srcSmall: "./assets/small_Img/rhino_mobile.jpg",
    srcThumb: `./assets/thumbs/rhinoThumb.jpg`,
    srcThumbSmall: "./assets/thumbs/smallThumbs/rhinoThumbSmall.jpg",
    alt: "A really cool looking Rhino enjoying the sun",
    altThumb: "Thumbnail of a rhino image",
  },
  {
    name: "dogs",
    src: "./assets/dogs_large2.jpg",
    srcSmall: "./assets/small_Img/dogs_mobile.jpg",
    srcThumb: `./assets/thumbs/dogsThumb.jpg`,
    srcThumbSmall: "./assets/thumbs/smallThumbs/dogsThumbSmall.jpg",
    alt: "Family of dogs exploring the coast",
    altThumb: "Thumbnail of an image of dogs",
  },
];

function rightButtonVisibilityCheck() {
  if (mobile !== true) {
    console.log(currentIndex);
    // Wasn't certain light coloured arrows would contrast well enough to be
    let rightButton = document.querySelector(".button-right"); // seen on rhino hide, so implemented this to
    if (currentIndex === 2) {
      // make it more visible. Having done so not sure if it's
      rightButton.style.color = "cyan"; //necessary, or if it would better to make it all arrows
      rightButton.style.borderColor = "cyan"; // in this layout a similar hue. However, not a huge fan of
    } else {
      // latter idea as it clashes with the style. In the end,
      rightButton.style.color = "azure"; //figured out how to achieve this, decided to leave it in
      rightButton.style.borderColor = "aliceblue"; // to prove to whomever it may concern I am at least able
    } // to both achieve and consider these things. Not a designer
  }
}

function imageForward(requiredButton) {
  //this 2nd parameter will be the variable containing the main image.
  requiredButton.addEventListener("click", function () {
    //full form anonymous function for the
    let newIndex = null; //clear it out just incase, maybe nulling is not needed      //practice
    if (currentIndex === 3) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }
    if (mobile === true) {
      backgroundImage.src = images[newIndex].src; //Small;
    } else {
      backgroundImage.src = images[newIndex].src;
    }
    backgroundImage.alt = images[newIndex].alt;
    currentIndex = newIndex;
    rightButtonVisibilityCheck();
  });
}

function imageBack(requiredButton) {
  requiredButton.addEventListener("click", () => {
    //fat arrow for the fun of it, shorthand style
    let newIndex;
    if (currentIndex === 0) {
      newIndex = 3;
      console.log(newIndex, currentIndex);
    } else {
      newIndex = currentIndex - 1;
    }
    if (mobile === true) {
      backgroundImage.src = images[newIndex].src; //Small;
    } else {
      backgroundImage.src = images[newIndex].src;
    }
    backgroundImage.alt = images[newIndex].alt;
    currentIndex = newIndex;
    rightButtonVisibilityCheck();
  });
}

// images[3].srcThumb = `./assets/thumbs/${images[3].name}Thumb.jpg`; //proof of concept for string literals. not implemented in the end.
/*stretch goal OPTIONAL (arrow and carousel)
globals variable to store current image index for main image
let cuurentIndex = 0;
let imageCache 
select Dom elemnts that contaain iimages witha doc method
select thumb container
select main container
*/
let mainContainer = document.querySelector("#main-image-container"); //was this even used?
let backgroundImage = document.querySelector("#background-Image");
backgroundImage.tabIndex = "1"; //doesn't work, see thumbnail code for more.
let thumbnailContainer = document.getElementById("thumbnail-container");
let currentIndex = 0; //for carousel tracking
let spacing = null;
const thumbnailArray = []; //to make easy changes across the thumbnail nav once initialised
function createThumbnails(myImageArray) {
  // loop to creat multiple images
  // if landscape thumbnailnav first button should be appended here? or slick on sides  image later?

  myImageArray.forEach((thumbnail, index) => {
    ///here the parameter (thumbnail) represents the part of the array currently being inspected/used/accessed
    //doc. method that creats a DOm element(img)
    let newThumb = document.createElement("img");
    newThumb.indexLocation = index;
    //assign a value to img attributes (e.g img.src = "images.src")

    if (mobile === true) {
      newThumb.src = thumbnail.srcThumbSmall;
    } else {
      newThumb.src = thumbnail.srcThumb;
    }

    newThumb.alt = thumbnail.altThumb;
    if (mobile === true) {
      let mobileThumbDimension = `${innerHeight / 12}px`; //want square thumbs to avoid stretching so use same
      newThumb.style.height = mobileThumbDimension; //measurement for both
      newThumb.style.width = mobileThumbDimension;
    }
    newThumb.className = "thumbImg";
    newThumb.tabIndex = `${index + 2}`; // don't know why these wouldn't tab in initially. This solves it
    console.log(newThumb.tabIndex); // but if anyone knows why it was an issue please share the knowledge.

    thumbnailContainer.appendChild(newThumb); //append the new elelment to the DOMusing a doc. method
    thumbnailArray.push(newThumb);
    //worth adding event listener here
    //thumbnail.addEventListener;
    newThumb.addEventListener("click", () => {
      backgroundImage.src = thumbnail.src;
      backgroundImage.alt = thumbnail.alt;
      thumbnailArray.forEach((arrayThumbnail, index) => {
        // restores original border to everyother Thumbnail/aside from the one clicked// no doubt a simpler and less slow method to achieve this but couldn't mnage with query selector, classes were just left empty
        arrayThumbnail.style.border = "0.5px solid rgb(190, 184, 184)";
      });
      newThumb.style.border = "2px solid cyan";
      currentIndex = index;
      console.log(currentIndex);
      rightButtonVisibilityCheck();
    });
  });
  if (mobile === true) {
    let buttonDiv = document.createElement("div");
    thumbnailContainer.appendChild(buttonDiv);
    buttonDiv.style.display = "flex";
    buttonDiv.style.flexDirection = "column";
    buttonDiv.style.alignItems = "center";
    buttonDiv.style.justifyContent = "space-around";
    buttonDiv.style.background = "transparent";
    buttonDiv.style.height = "70px";
    let buttonUp = document.createElement("button");
    buttonUp.textContent = "△"; //These won't center to the button. it's sort of ugly and not sure how
    buttonUp.className = "button-up"; //to fix it yet.
    buttonDiv.appendChild(buttonUp);
    imageBack(buttonUp);
    // click event here plz , can be done via a function maybe?
    let buttonDown = document.createElement("button");
    buttonDown.textContent = "▽";
    buttonDown.className = "button-down";
    buttonDiv.appendChild(buttonDown);
    imageForward(buttonDown);
    // click event here plz , can be via a function maybe?

    let leftOrRightHanded = Math.random();
    if (leftOrRightHanded < 0.1) {
      // 10% or 0-0.09999 of people would be more comfortable with this set up
      thumbnailContainer.style.left = "3px"; // in the future there may be a simple way to actually check
      console.log("RNG says you might be a southpaw.");
    } else {
      thumbnailContainer.style.right = "3px";
      console.log("RNG reckons you're a regular old right-hander.");
    }
  }
}

createThumbnails(images);

function createMainImage(gallery) {
  if (mobile !== true) {
    backgroundImage.src = gallery[0].src;
  } else {
    backgroundImage.src = gallery[0].srcSmall;
  }

  backgroundImage.alt = gallery[0].alt;
  if (innerHeight != backgroundImage.height) {
    spacing = (innerHeight - backgroundImage.height) / 2;
    backgroundImage.style.marginTop = `${spacing}px`;
    console.log(backgroundImage.style.marginTop);
  }
  console.log(window.innerHeight);
  console.log(backgroundImage.height);
}

createMainImage(images);

if (mobile !== true) {
  let browserButtonSize = innerHeight / 10;
  let browserButtonSizeString = `${browserButtonSize}px`; //long winded but easier if you want to change ratios
  let buttonRight = document.createElement("button");
  buttonRight.textContent = "▷"; /// Sadly these don't scale with element or font size, hope  something
  buttonRight.className = "button-right"; //better in the future.
  document.body.appendChild(buttonRight);
  imageForward(buttonRight);
  buttonRight.style.position = "fixed";
  buttonRight.style.right = "5px";
  buttonRight.style.top = `${innerHeight / 2 - browserButtonSize / 2}px`;
  buttonRight.style.height = browserButtonSizeString;
  buttonRight.style.width = browserButtonSizeString; //start with square, incase it's cool
  buttonRight.style.zIndex = "4";
  let buttonLeft = document.createElement("button");
  buttonLeft.textContent = "◁";
  buttonLeft.className = "button-left";
  document.body.appendChild(buttonLeft);
  buttonLeft.style.position = "fixed";
  buttonLeft.style.left = "5px";
  buttonLeft.style.top = `${innerHeight / 2 - browserButtonSize / 2}px`;
  buttonLeft.style.height = browserButtonSizeString;
  buttonLeft.style.width = browserButtonSizeString;
  buttonLeft.style.zIndex = "4"; // otherwise trapped behind
  imageBack(buttonLeft);
}

thumbnailContainer.style.bottom = `${spacing - 60}px`; // need to replace 60 with size of buttons

//issue -> the images appear one after the other (innerHTML="null") might help solve.
//creat img element
// newMainImg = document.createElement("img");
// newMainImg.className = ".mainImage";
// newMainImg.src = gallery[0].src;
// newMainImg.alt = gallery[0].alt;
// newMainImg.width = gallery[0].width;
// newMainImg.height = gallery[0].height;

// mainContainer.appendChild(newMainImg);
//opiotnal: add classname
//set the src value
//set the alt value
//append main image to the dom
