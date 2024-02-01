import styled from '@emotion/styled'


const Texto = styled.div`
    background-color: #B7322C;
    padding: 15px;
    color: #FFF;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-weight: 700;
    font-size: 22px;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
