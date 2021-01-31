//find / findIndex
//findUserByUsername
function findUserByUsername(arr, username) {
    arr.find(function(val) {
        return val.username === username;
    })
}

function removeUser(arr, username) {
    let foundUserName = arr.findIndex(function(val) {
       return val.username === username;
    }) 
    if(foundUserName !== -1) {
        return arr.splice(foundUserName, 1)[0];
    }
    else return undefined;
}

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

console.log(removeUser(users, 'akagen'))