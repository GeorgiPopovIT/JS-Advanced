function solve(num = 5){

    for (let i = 0; i < num; i++) {

        if (i == 0) {
          console.log('* '.repeat(num));
          continue;
        }
        console.log('* '.repeat(num));
      
    }
}

solve(2);
solve(1);
solve(5);
solve();