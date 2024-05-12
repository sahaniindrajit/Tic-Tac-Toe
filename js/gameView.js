export default class GameView{
    constructor(root){
        this.root = root;
        this.root.innerHTML=`
           <div class="header">
                <div class="header_turn">
                  x turn
                </div>
                <div class="header_status">
                  in progress

                </div>
                <button type="button" class="header__restart">
                    <i class="material-icons">
                        refresh
                    </i>
                </button>

           </div>
        `;
    }
}