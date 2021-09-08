import React from 'react'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Select,
  Input 
} from '@chakra-ui/react';

const Wapper = (props) => {
  return (
    <Center py={6} w="100vw" h="100vh">
      <Box
        maxW={'50vw'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            SELECT WORK SPACE
          </Text>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            py={5}>
            Send Message
          </Heading>
          <Input placeholder="Basic usage" />
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>I'm your ALOCADOS BOT!</Text>
            <Text fontWeight={600}>Send message to workspaces!</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Wapper;