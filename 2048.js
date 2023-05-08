let score = 0;
let rows = 4;
let columns = 4;

let board = [
    [2, 2, 0 ,0],
    [0, 0, 0 ,0],
    [0, 0, 0 ,0],
    [0, 0, 0 ,0]
];

window.onload = function(){
    setGame();
}

function addNumber()
{
    let a = Math.random();
    if(a <= 0.5)a = 2;
    else a = 4;
    let add = false;

    for(let k = 0; k < rows; k++)
    {
        for(let i = 0; i < columns; i++)
        {
            if(board[k][i] == 0)
            {
                board[k][i] = 2;
                add = true;
                break;
            }
        }
        if(add)break;
    }
}


function setGame() 
{

    for(let r = 0; r < rows; r++)
    {
        for(let c = 0; c < columns; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    } 
    
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = "";
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 4096) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x8192");
        }                
    }
}

document.addEventListener("keyup", (e) => {
    if(e.code == "ArrowLeft"){
        slideLeft();
        slideLeft();
        addNumber();
    }
    else if(e.code == "ArrowRight"){
        slideRight();
        slideRight();
        addNumber();
    }
    else if(e.code == "ArrowDown"){
        slideDown();
        slideDown();
        addNumber();
        
    }
    else if(e.code == "ArrowUp")
    {
        slideUp();
        slideUp();
        addNumber();
    }

    document.getElementById("score").innerText = score;
})

function slideLeft(){
    for(let r= 0; r < rows; r++) {
        
        for(let c = columns-1; c > 0; c--)
        {
            if(board[r][c-1] == board[r][c])
            {
                board[r][c-1] *= 2;
                score+= board[r][c-1];
                board[r][c] = 0;

            }
        }
        for(let c = columns-1; c > 0; c--)
        {
            if(board[r][c-1] == 0)
            {
                board[r][c-1] = board[r][c];
                board[r][c] = 0;
            }
        }
    }
    for(let r= 0; r < rows; r++) {
           
        for(let c = 0; c < columns; c++)
        {
                  
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile,num);
        }
    }
 
}

function slideRight(){
    
    for(let r= 0; r < rows; r++) {
        
        for(let c = 0; c < columns-1; c++)
        {
            if(board[r][c+1] == board[r][c])
            {
                board[r][c+1] *= 2;
                score+= board[r][c+1];
                board[r][c] = 0;
            }
        }
        for(let c = 0; c < columns-1; c++)
        {
            if(board[r][c+1] == 0)
            {
                board[r][c+1] = board[r][c];
                board[r][c] = 0;
            }
        }
         
    }
    for(let r= 0; r < rows; r++) {
           
        for(let c = 0; c < columns; c++)
        {
                  
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile,num);
        }
    }

    
  
}

function slideDown(){
    
    for(let r= 0; r < rows-1; r++) {
        
        for(let c = 0; c < columns; c++)
        {
            if(board[r+1][c] == board[r][c])
            {
                board[r+1][c] *= 2;
                score+= board[r+1][c];
                board[r][c] = 0;
            }
        }
        for(let c = 0; c < columns; c++)
        {
            if(board[r+1][c] == 0)
            {
                board[r+1][c] = board[r][c];
                board[r][c] = 0;
            }
        }
         
    }
    for(let r= 0; r < rows; r++) {
           
        for(let c = 0; c < columns; c++)
        {
                  
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile,num);
        }
    }

    
  
}

function slideUp(){
    
    for(let r= rows-1; r > 0; r--) {
        
        for(let c = 0; c < columns; c++)
        {
            if(board[r-1][c] == board[r][c])
            {
                board[r-1][c] *= 2;
                score+= board[r-1][c];
                console.log(score);
                board[r][c] = 0;
            }
        }
        for(let c = 0; c < columns; c++)
        {
            if(board[r-1][c] == 0)
            {
                board[r-1][c] = board[r][c];
                board[r][c] = 0;
            }
        }
         
    }
    for(let r= 0; r < rows; r++) {
           
        for(let c = 0; c < columns; c++)
        {         
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile,num);
        }
    }  
  
}

