//https://www.youtube.com/watch?v=3yMsepvhLls

//eg s=7, e=10, a=4, o=12, m=3, n=3, aa=[2,3,-4], ao=[3,-2,-4]

//1   2   3   4   5   6   7   8   9   10   11   12
//            a            h           h        o
//           apples       H  O  U   S  E        oranges

//m = 3 apples and n = 3 oranges
//apples throws [2, 3, -4] from a
//[2+4, 3+4, -4+4] = [6, 7, 0] --> 1 apple in range
//oranges throws [3, -2, -4]
//[3+12, -2+12, -4+12] = [15, 10, 8] --> 2 oranges
//in 7-10 range ans is 1 apple and 2 oranges

//s=7, e=11, a=5, o=15, m=3, n=2, aa=[-2,2,1], ao=[5,-6]

const applesOranges = (s, e, a, o, m, n, aa, ao) => {
  const applesDistance =  distanceFall(aa, a); //[3, 7, 6] --> 1
  const orangesDistance = distanceFall(ao, o);  //[20, 9] ---> 1

  console.log(inRange(applesDistance, s, e).length)
  console.log(inRange(orangesDistance, s, e).length);
}

const distanceFall = (array, whereTreeIs) => {
  return array.map((fallenFruit) => {
    return fallenFruit + whereTreeIs;
  })
}

const inRange = (distanceArr, start, end) => {
  let howMany = [];
  distanceArr.map((relativeDistance) => {
    if (relativeDistance >= start && relativeDistance <= end) {
       return howMany.push(relativeDistance);
    }
  })
  return howMany;
}

console.log(applesOranges(7, 11, 5, 15, 3, 2, [-2,2,1], [5,-6]));
