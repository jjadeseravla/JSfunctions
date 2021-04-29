//given a string return the lengh of the longest substring without repeated characters

const solution = (s) => {

  let max = 0;
  let current_s = '';

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i); //charAt index of letter in string
    console.log('char', char);
    let pos = current_s.indexOf(char);//pos is -1 cos that letter doesnt exist (till theres a dupliacte) in first round
    console.log('pos', pos);
    if (pos !== -1) { //if pos is not empty
       // cut "dv" to "v" when you see another "d"
      current_s = current_s.substr(pos + 1);
      console.log(1);
    }
    current_s += char;
    console.log('current_s', current_s);
    max = Math.max(max, current_s.length);
    console.log('max', max);
  }
  console.log('res', max);
  return max;
}

//console.log(solution('nndNdfdfd')); //4 cos 'nndN'
console.log(solution('dvdf'));
//The value of current_s in each round is "", "d", "dv", "vd", "vdf".
