import React from 'react'
import {
  Box,
  Text,
  VStack,
  ScrollView,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.500', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.png')}
      >
        <NavBar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'warmGray.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems={'center'}>
            <Image
              source={require('../assets/danae.jpg')}
              borderRadius="full"
              resizeMode="cover"
              width={120}
              height={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a React Native app for Todo list
          </Text>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.youtube.com/devaslife"
            leftIcon={
              <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
            }
          >
            Go to youtube channel
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://www.twitter.com/inkdrop_app"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            @inkdrop_app
          </LinkButton>
          <Text fontSize="md" w="full">
            Are you looking for a markdown note-taking app? Checkout my called
            InkDrop
          </Text>
          <LinkButton
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            href="https://www.inkdrop.app"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            inkdrop.app
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
