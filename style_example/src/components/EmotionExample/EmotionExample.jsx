/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const color = 'orange'

const Button = styled.button`
    padding: 32px;
    background-color: blueviolet;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
    }
`
const style = css`
    color: black;
`

const SomeComponent = ({ children }) => (
    <div css={style}>
        Some hotpink text.
        {children}
    </div>
)

const anotherStyle = css({
    textDecoration: 'underline'
})

const AnotherComponent = () => (
    <div css={[anotherStyle,style]}>Some text with an underline.</div>
)

const P = props => (
    <p
    css={{
        margin: 0,
        fontSize: 25,
        lineHeight: '1.5',
        fontFamily: 'Sans-Serif',
        color: 'green'
    }}
    {...props} // <- props contains the `className` prop
    />
)

const ArticleText = props => (
    <P
    css={{
        fontSize: 40,
        fontFamily: 'Georgia, serif',
        color: 'darkgray'
    }}
    {...props} // <- props contains the `className` prop
    />
)

const danger = css`
    color: #5349ba;
`
const base = css`
    background-color: #c71f84;
    color: #318271;
    height: 100;
    fontSize: 30;
    
`
export default function EmotionExample() {
    return (
        <>
            <div
                css={css`
                padding: 32px;
                background-color: greenyellow;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                    color: ${color};
                }
                `}
            >
                Hover to change color.
            </div>
            <br/>
            <div>
                <Button>This my button component.</Button>
            </div>
            <br/>
            <div>
                <SomeComponent>
                    <AnotherComponent />
                </SomeComponent>
            </div>
            <br/>    
            <P>PPPPPPPPPPPPPPPPPPPPP</P>
            <ArticleText>ArticleText</ArticleText>
            <br/>
            <div>
                <div css={base}>This will be turquoise</div>
                <div css={[danger, base]}>
                This will be also be turquoise since the base styles overwrite the danger
                styles.
                </div>
                <div css={[base, danger]}>This will be red</div>
            </div>
        </>
    )
}
