# React Calculator

I wrote this late at night after being inspired by a medium post explaining that all new programmers should learn to write a calculator. I was learning React at the time of this post and decided utilise it for this project to take advantage of the instant DOM updates.\
[View Demo](https://moms-spaghetti-reactcalculator.netlify.app/)
<br/><br/>

## Details

Using React for this project meant I could take advantage of instant DOM updates without having to refresh the page and states allowed me to store numbers and operations easily without implementing classes.
The components are fairly light and all state and functionality is contained in the app component passed down to children components. I designed the UI, inspired based on the standard Apple iOS calculator colour pallet and utilised flexbox for structuring. I utilise React hook useEffect to call a function when the state of the second number changes to better replicate the standard display functionality of a standard calculator. Two functions, captureSum and sumNumbers handle the arithmetic and display functions. Display is conveniently a state.
<br/><br/>

## Built With

- HTML
- CSS
- Javascript
- Create React App
- JSX
- uuid
  <br/><br/>

## Getting Started

Clone the repo as instructed below and download npm modules.
<br/><br/>

## Prerequisites

Download and install npm modules
<br/><br/>

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/react_panel_things.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. Start the applicataion
   ```sh
   npm start
   ```
   <br/><br/>

## Usage

Use like a normal calculator. I've limited divisions to two decimal places to prevent numbers running off the display until I can refactor the display element of certain calculations.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
