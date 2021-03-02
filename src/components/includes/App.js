import './App.css';
import { Admin, Resource, fetchUtils, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {urlApi} from '../../config/url';


import { PostList, PostEdit, PostCreate } from '../pages/posts/posts';
import { CommentList } from '../pages/comment/comment';
import { UserList, UsersIcon } from '../pages/user/users';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider(urlApi, httpClient);

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
      <Resource name="comments" list={CommentList} edit={EditGuesser}/>
      <Resource name="users" list={UserList} icon={UsersIcon}/>
    </Admin>
  );
}

export default App;
