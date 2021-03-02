import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    EmailField,
    ReferenceField
} from 'react-admin';

export const CommentList = (props) => {
    return (
        <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="postId" reference="posts"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
    )
}

// export default CommentList;