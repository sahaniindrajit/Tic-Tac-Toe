export default class GameView{
    constructor(root){
        this.root = root;
        this.root.innerHTML=`
           <div class="header">
                <div class="header_turn">
                  
                </div>
                <div class="header_status">
                  

                </div>
                <button type="button" class="header__restart">
                    <i class="material-icons">
                        refresh
                    </i>
                </button>
           </div>

           <div class="board">
                <div class="board__tile" data-index="0"></div>
                <div class="board__tile" data-index="1"></div>
                <div class="board__tile" data-index="2"></div>
                <div class="board__tile" data-index="3"></div>
                <div class="board__tile" data-index="4"></div>
                <div class="board__tile" data-index="5"></div>
                <div class="board__tile" data-index="6"></div>
                <div class="board__tile" data-index="7"></div>
                <div class="board__tile" data-index="8"></div>
            </div>
        `;

        this.onTileClick=undefined;
        this.onRestartClick=undefined;

        this.root.querySelectorAll(".board__tile").forEach(tile => {
            tile.addEventListener("click", ()=>{
                if(this.onTileClick){
                    this.onTileClick(tile.dataset.index);
                }
            });
                       
        });

        this.root.querySelector(".header__restart").addEventListener("click",()=>{
            if(this.onRestartClick){
                this.onRestartClick();
            }
        });
        
    }

    update(game){
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }

    updateStatus(game){
        let status="In Progress";

        if(game.findWinningCombs()){
            status=`${game.turn} is the Winner!!!`; 
        }
        else if(!game.inProgress()){
            status="Draw!!!";
        }

        this.root.querySelector(".header_status").textContent=status;
    }

    updateTurn(game){
        this.root.querySelector(".header_turn").textContent=`${game.turn}'s Turn`;
    }

    updateBoard(game){
        const winningComb= game.findWinningCombs();

        for(let i=0;i<game.board.length;i++){
            const tile=this.root.querySelector(`.board__tile[data-index="${i}"]`);

            tile.classList.remove("board__tile__winner");
            tile.textContent=game.board[i];

            if(winningComb &&  winningComb.includes(i)){
                tile.classList.add("board__tile__winner");
            }
        }
    }
}