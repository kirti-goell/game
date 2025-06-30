 
 export function generateGrid(length,breadth,s){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let grid = [];
    for (let i = 0; i < length; i++) {
      let row = [];
      for (let j = 0; j < breadth; j++) {
        const randomChar = letters[Math.floor(Math.random() * letters.length)];
        row.push(randomChar);
      }
      grid.push(row);
    }
    for(let i=0;i<s.length;i++){
      let val=Math.floor(Math.random()*(breadth-s[i].length))
      // console.log(val)
      for(let j=0;j<s[i].length;j++){
        grid[i][j+val]=s[i][j];
      }
    }
    return grid;
  };
  export function generateGridWithLogic(length,breadth,s){
    let grid=[];
    for(let i=0;i<length;i++){
        let row=[];
        for(let j=0;j<breadth;j++){
            row.push("");
        }
        grid.push(row);
    }
    // APPROACH 1 for eg word has a length of 5 then we can use any grid element from 0 to length-5 and 0 to breadth-5
    let cnt = 0;
    for(let i=0;i<s.length;i++){
       // if(cnt>100) break;
        //cnt++;
        let row = randomValue(length);
        let col = randomValue(breadth);
        if(Math.random()>0.5){
            // for horizontal
            
            if(!checkHorizontal(row,col,grid,s[i].length)){
                i--;    
            }else{
                grid = horizontalFun(row,col,grid,s[i]);
            }
           
        }else{
            // for vertical
            if(!checkVertical(row,col,grid,s[i].length)) {
                i--;    
            }else{
                 grid = verticalFun(row,col,grid,s[i]);
            }
           
        }
        console.log(grid)
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
    for (let i = 0; i < length; i++) {
    
      for (let j = 0; j < breadth; j++) {
        if(grid[i][j]==""){
            grid[i][j]=letters[Math.floor(Math.random() * letters.length)];
        }
      }
      
    }
    return grid;
  };
  export function randomValue(n){
    return Math.floor(Math.random()*n);
  }
  export function horizontalFun(row,col,grid,word){
    for(let i=0;i<word.length;i++){
        grid[row][col+i]=word[i];
    }

    return grid;
  }

  function checkHorizontal(row,col,grid,n){
    if(col+n >grid[0].length) return false;
    for(let i=0;i<n;i++){
        if(grid[row][col+i]!=""){
            return false;
        }
    }
    return true;
  }

  export function verticalFun(row,col,grid,word){
    for(let i=0;i<word.length;i++){
        grid[row+i][col]=word[i];
    }

    return grid;
  }

  function checkVertical(row,col,grid,n){
    if(row+n >grid.length) return false;
    for(let i=0;i<n;i++){
        if(grid[row+i][col]!=""){
            return false;
        }
    }
    return true;
  }

export function splitByComma(inputString) {
    return inputString.split(",").map((str) => str.trim());
  }