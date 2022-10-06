import React from 'react'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

interface Props {
  checked?: boolean
  highlightColor: string
  checkmarkColor: string
  boxOutlineColor: string
}

const CheckboxAnimated = ({
  checked,
  highlightColor,
  checkmarkColor,
  boxOutlineColor
}: Props) => {
  return (
    <AnimatedCheckbox
      checked={checked}
      highlightColor={highlightColor}
      checkmarkColor={checkmarkColor}
      boxOutlineColor={boxOutlineColor}
    />
  )
}

export default CheckboxAnimated
