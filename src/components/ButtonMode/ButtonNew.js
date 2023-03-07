import React from 'react';
import { Button } from './styles';


const ButtonNew = ({onClick, children}) => {

  return (
    <Button onClick={onClick}>{children}</Button>
  )
}

export default ButtonNew