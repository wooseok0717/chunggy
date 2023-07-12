function translate (input,faction,action) {
  if (faction === 'asmo' && action === 'write') {
    let firstletter = true;
    let result = '';
    for (let x = 0; x < input.length; x++) {
      if (firstletter) {
        if (first[faction][action][input[x]]) {
          result += first[faction][action][input[x]]
          firstletter = false;
        } else {
          result += input[x];
        }
      } else {
        if (second[faction][action][input[x]]) {
          result += second[faction][action][input[x]]
        } else {
          result += input[x];
          firstletter = true;
        }
      }
    }
    return result;
  }
}

const first = {
  asmo: {
    write: {
      a:'j',b:'k',c:'h',d:'i',e:'n',f:'o',g:'l',h:'m',i:'r',j:'s',k:'p',l:'q',m:'v',n:'w',o:'t',p:'u',q:'z',r:'G',s:'b',t:'c',u:'J',v:'a',w:'f',x:'g',y:'d',z:'e'
    }
  }
}

const second = {
  asmo: {
    write: {
      a:'e',b:'f',c:'c',d:'d',e:'j',f:'j',g:'g',h:'h',i:'m',j:'n',k:'k',l:'l',m:'q',n:'r',o:'o',p:'p',q:'u',r:'v',s:'s',t:'t',u:'y',v:'z',w:'a',x:'c',y:'J',z:'b'
    }
  }
}


export default translate