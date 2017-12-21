# Effenti's React Native Boilerplate
> This is our very own React Native recipe for success! 

In this repo you'll find an empty react-native project, with all the essential packages. This boilerplate offers the following:

* Navigation
* Carousel
* Various components
* Icons

## Getting started

### Step 1

Clone the react-native project:
```git clone https://github.com/Effenti/react-native-boilerplate.git```

### Step 2

Install the react-native project:
```npm install```

### Step 3

Build the react-native project:
```react-native run-ios```

## Basic project structure

```
.
├── README.md                      # README file
├── __tests__                      # Tests folder
├── android                        # All the android-relative code goes here
├── app.json                       # Our app name and display name
├── index.js                       # This is the entry point of our application
├── ios                            # All the ios-relative code goes here 
├── node_modules                   # Packages
├── package-lock.json              # https://docs.npmjs.com/files/package-lock.json
├── package.json                   # https://docs.npmjs.com/files/package.json
└── src                            # The code of our app
    ├── App.js                     # This is where we declare our navigation
    ├── assets                     # The assets folder contains images, icons and fonts
    │   ├── fonts                  # Special fonts of our app
    │   └── images                 # All the images and icons go here
    ├── components                 # All our custom components go here
    ├── screens                    # All our screens (views) go here
    │   ├── HomeScreen.js          # The home screen for when we're logged in
    │   ├── LoginScreen.js         # The very first screen we see upon opening the app
    │   └── SignUpScreen.js        # Sign up screen to create an account
    └── theme                      # All reusable stylesheets go here
        ├── colors.js              # All the colors we need for our project 
        ├── fonts.js               # Here we declare special font-style, font-weight and font-size 
        ├── index.js               # Main stylesheet that we import / export
        └── sizes.js               # Useful screen sizes variables
```

## Components

For the various components of our app, we use react-native-elements:
https://github.com/react-native-training/react-native-elements

This package is great, because it provides lots of different components that can be easily styled. Here are the available components:

- [x] [Buttons](https://react-native-training.github.io/react-native-elements/API/buttons/)
- [x] [Social Icons / Social Icon Buttons](https://react-native-training.github.io/react-native-elements/API/social_icons/)
- [x] [Icons](https://react-native-training.github.io/react-native-elements/API/icons/)
- [x] [Form Elements](https://react-native-training.github.io/react-native-elements/API/forms/)
- [x] [Search Bar](https://react-native-training.github.io/react-native-elements/API/searchbar/)
- [x] [ButtonGroup](https://react-native-training.github.io/react-native-elements/API/button_group/)
- [x] [Checkboxes](https://react-native-training.github.io/react-native-elements/API/checkbox/)
- [x] [List Element](https://react-native-training.github.io/react-native-elements/API/lists/)
- [x] [Badge](https://react-native-training.github.io/react-native-elements/API/badge/)
- [x] [HTML style headings](https://react-native-training.github.io/react-native-elements/API/HTML_style_headings/)
- [x] [Card component](https://react-native-training.github.io/react-native-elements/API/card/)
- [x] [Pricing Component](https://react-native-training.github.io/react-native-elements/API/pricing/)
- [x] [Slider Component](https://react-native-training.github.io/react-native-elements/API/slider/)
- [x] [Tile Component](https://react-native-training.github.io/react-native-elements/API/tile/)
- [x] [Avatar Component](https://react-native-training.github.io/react-native-elements/API/avatar/)
- [x] [Rating Component](https://react-native-training.github.io/react-native-elements/API/rating/)

## Creating the app icons

We use MakeAppIcon for this:

https://makeappicon.com/

Please have your app icon in the PNG format at a 1536x1536 resolution for best results.

## Navigation

The package for the navigation is React Navigation:

https://reactnavigation.org/docs/intro/quick-start

## Carousel

We recommend using react-native-swipeable-parallax-carousel:

https://www.npmjs.com/package/react-native-swipeable-parallax-carousel

## Icons

We recommend using react-native-vector-icons which supports a lot of different icons:

https://github.com/oblador/react-native-vector-icons

## Credits

Cohan Carpentier - ccarpentier@effenti.ca
