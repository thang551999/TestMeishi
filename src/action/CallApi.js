import axios from 'axios';
import { loginurl } from '../common/Config';
export async function login(username, password) {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  let body = 'userName=' + username + '&password=' + password;

  try {
    let res = await axios.post(
      loginurl,
      body,
      config,
    );
    return res.data;
  } catch (error) {
    return error;
  }
 
}

export function GetListCard (){
let res =await axios.get()
}