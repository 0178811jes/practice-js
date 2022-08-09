
let friendlist = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
    
function bestFriend(friendlist) {
    let bigFriend = '';
    for(let i = 0; i < friendlist.length; i++){
        let element = friendlist[i];
        if(element.length > bigFriend.length){
            bigFriend = element
        }
    }
    return bigFriend;
}   
//console.log(friendlist);
let bigFriend = bestFriend(friendlist);
console.log(bigFriend);