import * as React from 'react';

import {
    List, Datagrid, TextField, EmailField, UrlField
} from 'react-admin';
import { MyUrlField } from './MyUrlField'
import { AccountCircle } from '@material-ui/icons';
export const UsersIcon = AccountCircle;

export const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="address.street" />
                <TextField source="address.city" />
                <TextField source="phone" />
                <MyUrlField source="website" />
            </Datagrid>
        </List>
    )
}