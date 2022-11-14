import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


function replaceCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}


//* Functional testing can have multiple assertions and elements then take elements through steps
test("button correctly intiaties and changes", () => {
    render(<App />);

    // find the button with text of 'Change to blue'
    const colorButton = screen.getByRole("button", { name: "Change to Medium Violet Red" });

    const checkbox = screen.getByRole("checkbox");

    // expect the button background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "Light Blue" });

    // expect the checkbox to not be checked
    expect(checkbox).not.toBeChecked();

    // click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "Medium Violet Red" });

    // expect the button text to be 'Change to red'
    expect(colorButton).toHaveTextContent("Change to Light Blue");
});

test("Checkbox disables button on first click and enables on second click", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    const colorButton = screen.getByRole("button", { name: "Change to Medium Violet Red" });

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
});

test("Disabled button has gray background and reverts to blue", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    const colorButton = screen.getByRole("button", { name: "Change to Medium Violet Red" });

    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle("background-color: gray");

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: LightBlue');
});

test("Clicked disabled button has gray background and reverts to blue", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    const colorButton = screen.getByRole("button", { name: "Change to Medium Violet Red" });

    // change button to red
    fireEvent.click(colorButton);

    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle("background-color: gray");

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle("background-color: MediumVioletRed");
  });

describe("spaces before camel-case capital letters", () => {

    test("Works for no inner capital letters", () => {
      
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("Works for one inner capital letter", () => {
      
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });

    test("Works for multiple inner capital letters", () => {

        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");  

    });
});

//* Unit testing generally has only one assertion per test
// test("button has correct initial color", () => {
//   render(<App />);
//   const button = screen.getByRole('button', {name: 'Change to blue'});

//   expect(button).toHaveStyle({backgroundColor: 'red'});
// });


// test("button correctly changes color and text when clicked", () => {
//   render(<App/>)
//   const button = screen.getByRole('button', {name: 'Change to blue'});

//   expect(button).toHaveStyle({backgroundColor: 'red'});

//   fireEvent.click(button);

//   // button has correct color after change
//   expect(button).toHaveStyle({backgroundColor: 'blue'});

//   // button has correct text after change
//   expect(button).toHaveTextContent("Change to red");
// });