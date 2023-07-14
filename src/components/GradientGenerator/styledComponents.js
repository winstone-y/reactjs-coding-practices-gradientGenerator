// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: ${props => (props.main ? '100vh' : '50px')};
  color: white;
  display: flex;
  flex-direction: ${props => (props.main ? 'column' : 'row')};
  justify-content: ${props => (props.main ? 'center' : 'space-around')};
  align-items: center;
  width: ${props => (props.input ? '20vw' : '100vw')};
  background-image: linear-gradient(
    ${props => props.main && props.gradientDirection},
    ${props => props.main && props.backgroundColors.FirstColor},
    ${props => props.main && props.backgroundColors.SecondColor}
  );
`

export const MainHeading = styled.h1`
  color: #ededed;
`

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 20px;
`

export const Form = styled.form``

export const ColorInput = styled.input``

export const DirectionList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
`

export const DirectionItem = styled.li`
  cursor: pointer;
`

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  width: ${props => (props.item ? '90px' : '350px')};
  margin: 50px;
  color: ${props => (props.item ? '#1e293b' : 'white')};
  font-weight: bold;
  font-size: 20px;
  opacity: ${props => (props.activeItem ? 1 : 0.5)};
  background-color: ${props => (props.item ? '#ffffff' : '#00c9b7')};
`
