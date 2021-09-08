import React, {useState,useEffect} from 'react'
import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import { Avatar, Button, Input, Select, useColorModeValue } from '@chakra-ui/react';
import Wrapper from '../component/Wrapper'

import {baseURL} from '../const'


const HomePage = (props) =>{

    const [workSpaces, setWorkSpaces] = useState([]);
    const [workSpaceId, setWorkSpaceId] = useState(undefined);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(undefined);
    const [message, setMessage] = useState('');

    useEffect(()=>{
        fetch(baseURL+'/api/v1/workspaces',{
            method:'GET',
            'Content-Type':'application/json'
        })
        .then(res => res.json())
        .then(data => {
          setWorkSpaces(data.list)  
        })
    },[])

    useEffect(()=>{
        if(workSpaceId !== undefined){
            fetch(baseURL+'/api/v1/users',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({team_id:'T01ABNQ56F4'})  
            })
            .then(res => res.json())
            .then(data => {
              setUsers(data.list)  
            })
        }
    },[workSpaceId])

    return (
        <Wrapper>
               <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
            py={3}>
            SELECT WORK SPACE
          </Text>
          <Select placeholder="Workspace select" onChange={(e)=>setWorkSpaceId(e.target.value)}>
              {workSpaces.map(workspace => (<option key={workspace.id} value={workspace.id}>{workspace.name}</option>))}
          </Select>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
            py={3}>
            SELECT USER
          </Text>
          <Select onChange={(e)=>setUserId(e.target.value)}>
            <option value="all" defaultValue>전체</option>
            {users.map(user => (<option key={user.id} value={user.id}>{user.name}</option>))}
          </Select>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            py={5}>
            Message
          </Heading>
          <Input placeholder="Write your message" onChange={(e)=>setMessage(e.target.value)}/>
        </Stack>
        <Box py={5} >
        <Button colorScheme="teal" size="sm" w="100%">
            Send Message
        </Button>
        </Box>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>I'm your ALOCADOS BOT!</Text>
            <Text fontWeight={600}>Send message to users!</Text>
          </Stack>
        </Stack>
        </Wrapper>
    )
}

export default HomePage;