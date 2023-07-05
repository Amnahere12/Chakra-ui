import {CalendarIcon, EditIcon, AtSignIcon} from '@chakra-ui/icons'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function sidebar() {
  return (
    <div>
      <List color={'white'} fontSize={'1em'} spacing={4}>
        <ListItem> 
            <NavLink to={'/'}>
              <ListIcon as={CalendarIcon} color={'white'}/>
                Dashboard
            </NavLink>
        </ListItem>
        <ListItem> 
            <NavLink to={'/create'}>
            <ListIcon as={EditIcon} color={'white'}/>
                create
            </NavLink>
        </ListItem>
        <ListItem> 
            <NavLink to={'/profile'}>
            <ListIcon as={AtSignIcon} color={'white'}/>
                profile
            </NavLink>
        </ListItem>
      </List>
    </div>
  )
}
