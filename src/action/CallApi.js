import axios from 'axios';
export async function login(username, password) {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  let body = 'userName=' + username + '&password=' + password;

  try {
    let res = await axios.post(
      'https://nsmp-meishi.com/api/login',
      body,
      config,
    );
    return res.data;
  } catch (error) {
    return error;
  }
  // let a = await fetch('https://nsmp-meishi.com/api/login', {
  // method: 'POST',
  // headers: {
  // 'Content-Type': 'application/x-www-form-urlencoded',
  // },
  // body: 'userName=' + username + '&password=' + password,
  // });

  // return await a.json();
}

// export async function test() {
//   return Promise()
//   let a = 0;
//   setTimeout(() => {
//     console.log(3000);
//     return '1';
//   }, 3000);
//   setTimeout(() => {
//     console.log(2000);
//     return '2';
//   }, 2000);

//   return 1;
// }
