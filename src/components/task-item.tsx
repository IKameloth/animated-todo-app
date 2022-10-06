import React from 'react'
import { Pressable } from 'react-native'
import {
  Box,
  HStack,
  Text,
  useTheme,
  themeTools,
  useColorModeValue,
  Icon
} from 'native-base'
import CheckboxAnimated from './checkbox-animate'
import AnimatedTaskLabel from './animated-task-label'
import { Feather } from '@expo/vector-icons'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
import SwipableView from './swipable-view'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isDone: boolean
  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  subject: string
}

const TaskItem = ({
  isDone,
  onToggleCheckbox,
  subject,
  onPressLabel,
  onRemove,
  simultaneousHandlers
}: Props) => {
  const theme = useTheme()
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.300', 'blue.400')
  )

  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500')
  )

  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('white', 'white')
  )

  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText')
  )

  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600')
  )

  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          bg="red.500"
          alignItems="flex-end"
          justifyContent="center"
          pr={4}
        >
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack
        alignItems={'center'}
        w={'full'}
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <CheckboxAnimated
              highlightColor={highlightColor}
              checkmarkColor={checkmarkColor}
              boxOutlineColor={boxStroke}
              checked={isDone}
            />
          </Pressable>
        </Box>
        <AnimatedTaskLabel
          strikethrough={isDone}
          textColor={activeTextColor}
          inactiveTextColor={doneTextColor}
          onPress={onPressLabel}
        >
          {subject}
        </AnimatedTaskLabel>
      </HStack>
    </SwipableView>
  )
}

export default TaskItem
