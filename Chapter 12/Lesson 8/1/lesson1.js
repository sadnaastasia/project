async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let user = await response.json();
    return user;
  } else {
    throw new Error(response.status);
  }
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
