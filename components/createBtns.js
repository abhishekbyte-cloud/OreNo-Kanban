const createBoardDialog = document.querySelector('#create-board-dialog')
const createBoardBtn = document.querySelector('#create-board-button')



createBoardBtn.addEventListener('click', createBoard)

function createBoard(){
    createBoardDialog.showModal()
}