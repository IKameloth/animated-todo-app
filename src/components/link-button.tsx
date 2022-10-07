import React, { useCallback } from 'react'
import { IButtonProps, Button } from 'native-base'
import { Linking } from 'react-native'

interface Props extends IButtonProps {
  href: string
}

const LinkButton = ({ href, ...props }: Props) => {
  const handlePress = useCallback(() => {
    Linking.openURL(href)
  }, [href])

  return <Button {...props} onPress={handlePress} />
}

export default LinkButton
