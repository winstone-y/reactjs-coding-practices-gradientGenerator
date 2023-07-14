import {Component} from 'react'
import {
  Container,
  MainHeading,
  Paragraph,
  DirectionList,
  DirectionItem,
  ColorInput,
  Button,
  Form,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    FirstColor: '#8ae323',
    SecondColor: '#014f7b',
    backgroundColors: {FirstColor: '#8ae323', SecondColor: '#014f7b'},
    gradientDirection: `to ${gradientDirectionsList[0].value}`,
  }

  onColorChange = event => {
    switch (event.target.id) {
      case 'color1':
        this.setState({FirstColor: event.target.value})
        break
      case 'color2':
        this.setState({SecondColor: event.target.value})
        break

      default:
        break
    }
  }

  onGenerateGradient = event => {
    event.preventDefault()
    const {FirstColor, SecondColor} = this.state
    this.setState({
      backgroundColors: {FirstColor, SecondColor},
    })
  }

  onChangeGradientDirection = event => {
    this.setState({gradientDirection: `to ${event.currentTarget.id}`})
  }

  render() {
    const {
      FirstColor,
      SecondColor,
      backgroundColors,
      gradientDirection,
    } = this.state
    const acitveDirection = gradientDirection.split(' ')[1]
    // console.log(acitveDirection)

    return (
      <Container
        main
        backgroundColors={backgroundColors}
        gradientDirection={gradientDirection}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Paragraph>Choose Direction</Paragraph>
        <DirectionList>
          {gradientDirectionsList.map(item => (
            <DirectionItem
              onClick={this.onChangeGradientDirection}
              key={item.directionId}
              id={item.value}
            >
              <Button
                type="button"
                item
                activeItem={item.value === acitveDirection}
              >
                {item.displayText}
              </Button>
            </DirectionItem>
          ))}
        </DirectionList>
        <Paragraph>Pick the Colors</Paragraph>
        <Form onSubmit={this.onGenerateGradient}>
          <Container input>
            <Paragraph htmlFor="color1">{FirstColor}</Paragraph>
            <ColorInput
              onChange={this.onColorChange}
              id="color1"
              type="color"
              value={FirstColor}
            />
          </Container>
          <Container input>
            <Paragraph htmlFor="color2">{SecondColor}</Paragraph>
            <ColorInput
              onChange={this.onColorChange}
              id="color2"
              type="color"
              value={SecondColor}
            />
          </Container>
          <Button activeItem type="Submit">
            Generate
          </Button>
        </Form>
      </Container>
    )
  }
}
export default GradientGenerator
