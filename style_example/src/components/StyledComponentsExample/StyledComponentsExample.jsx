
import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider,createGlobalStyle } from 'styled-components';

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: palevioletred;
// `;

// const Wrapper = styled.section`
//     padding: 4em;
//     background: papayawhip;
// `;

// const Title2 = () => {
//     return <div>HELLO,FUCK,WORLD</div>;
// };

// const Button = styled.button`
//     /* Adapt the colors based on primary prop */
//     background: ${props => props.primary ? "palevioletred" : "white"};
//     color: ${props => props.primary ? "white" : "palevioletred"};

//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border: 2px solid palevioletred;
//     border-radius: 3px;
// `;

// const TomatoButton = styled(Button)`
//     color: tomato;
//     border-color: tomato;
// `;

// const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

// const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
//   color: blue;

//   &:hover {
//     color: red; // <Thing> when hovered
//   }

//   & ~ & {
//     background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
//   }

//   & + & {
//     background: lime; // <Thing> next to <Thing>
//   }

//   &.something {
//     background: orange; // <Thing> tagged with an additional CSS class ".something"
//   }

//   .something-else & {
//     border: 1px solid; // <Thing> inside another element labeled ".something-else"
//   }
// `
// const Input = styled.input.attrs(props => ({
//     type: "text",
//     size: props.size || "1em",
//   }))`
//     border: 2px solid palevioletred;
//     margin: ${props => props.size};
//     padding: ${props => props.size};
//   `;
  
// // Input's attrs will be applied first, and then this attrs obj
// const PasswordInput = styled(Input).attrs({
// type: "password",
// })`
// // similarly, border will override Input's border
// border: 2px solid aqua;
// `;

// // Create the keyframes
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 20ms linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* Color the border and text with theme.main */
    color: ${props => props.theme.color};
    border: 2px solid ${props => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
    theme: {
        main: "red",
        borderColor: "pink"
    },
};

// Define what props.theme will look like
const theme = {
    main: "green",
    borderColor: "yellow"
};

const defaultTheme = {
    main: "black",
    borderColor: "blue"
};

const blackTheme ={
    main: "black",
    borderColor: "black"
};

const redTheme ={
    main: "red",
    borderColor: "red"
};

const GlobalStyle = createGlobalStyle`
    button{
        background-color: aqua;
    }
`
export default function StyledComponentsExample() {
    const [theme, setTheme] = useState (defaultTheme);
    return (
    <>
        <div>
            <GlobalStyle/>
            <button onClick={()=> setTheme(blackTheme)}>Green</button>
            <button onClick={()=> setTheme(redTheme)}>red</button>
            <ThemeProvider theme={theme}>
                <Button>Normal</Button>
                <Button>Themed</Button>
            </ThemeProvider>
        </div>

        <div>
            <button>other</button>
        </div>

        {/* <Rotate>&lt; 💅🏾 &gt;</Rotate> */}
        {/* <>
            <div>
                <Input placeholder="A bigger text input" size="2em" />
                <br />
                <PasswordInput placeholder="A bigger password input" size="2em" />
            </div>
            <Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
            <div className="something-else">
            <Thing>Splendid.</Thing>
            </div>
        </>*/}
        {/* <Wrapper>
            <Title>
                Hello World!
            </Title>
            <Title2 />
        </Wrapper>
        <Button onClick={()=> alert("normal")}>NORMAL</Button>
        <Button primary onClick={()=> alert("primary")}>PRIMARY</Button>
        <TomatoButton>TOMATO</TomatoButton>
        <br/>
        <Button as="a" href="#">Link with Button styles</Button>
        <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
        <br/>
        <Button as={ReversedButton}>Custom Button with Normal Button styles</Button> */}
    </>
    );
}
