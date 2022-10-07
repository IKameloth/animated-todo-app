import React, { useCallback, useState } from 'react'
import {
  Center,
  VStack,
  useColorModeValue,
  Fab,
  Icon,
  Image
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import ThemeToggle from '../components/theme-toggle'
import TaskList from '../components/task-list'
import shortid from 'shortid'
import Masthead from '../components/masthead'
import NavBar from '../components/navbar'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for friday',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native app',
    done: false
  }
]

export default function MainScreen() {
  const [data, setData] =
    useState<Array<{ id: string; subject: string; done: boolean }>>(initialData)

  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }

      return newData
    })
  }, [])

  const handleChangeTaskItemSubject = useCallback(
    (item: any, newSubject: any) => {
      setData(prevData => {
        const newData = [...prevData]
        const index = prevData.indexOf(item)
        newData[index] = {
          ...item,
          subject: newSubject
        }

        return newData
      })
    },
    []
  )

  const handleFinishEditingTaskItem = useCallback((_item: any) => {
    setEditingItemId(null)
  }, [])

  const handlePressTaskItemLabel = useCallback((item: any) => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = prevData.filter(ele => ele !== item)
      return newData
    })
  }, [])

  return (
    <AnimatedColorBox
      flex={1}
      w={'full'}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
    >
      <Masthead title="Hola Danae!" image={require('../assets/masthead.png')}>
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRadius="20px"
        pt="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position={'absolute'}
        renderInPortal={false}
        size={'sm'}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
        icon={
          <Icon color={'white'} size={'sm'} as={<AntDesign name={'plus'} />} />
        }
      />
    </AnimatedColorBox>
  )
}
