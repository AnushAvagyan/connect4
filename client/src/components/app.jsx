import Row from './rows.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      currentPlayer: 'red',
      winner: undefined,
      status: ''
    };
    this.onColClick = this.onColClick.bind(this);


    }


    createBoard() {

      for (var i = 0; i < 6; i++) {
        var row = [];
        for (let c = 0; c < 7; c++) {
          row.push(null);
        }
        this.state.board.push(row);
      }
    }


    onColClick(col) {
      if (!this.state.winner && this.checkSpace(col)) {

        for (let row = 5; row >= 0; row--) {
          if (this.state.board[row][col] === null) {
            this.state.board[row][col] = this.state.currentPlayer;
            break;
          }
        }

        this.setState({ currentPlayer: (this.state.currentPlayer === 'red') ? 'yellow' : 'red' });


        this.checkForWin(this.state.board);


      }
    }
    declareWin() {
      if (this.state.winner === 'red') {
        this.setState({ status: 'Congratulations!! Red player wins!' });
      } else if (this.state.winner === 'yellow') {
        this.setState({ status: 'Congratulations!! Yellow player wins!' });
      } else if (this.state.winner === 'tie') {
        this.setState({ status: 'Oh-oh no winner. It is a tie. Refresh the page to play again' });
      }
      if (this.state.winner) {
        $.ajax({
          url: 'http://localhost:3000/gameOver',
          type: 'POST',
          data: this.state.winner,
          success: function(data) {

            $('h1').append(data);
            console.log(data);
          },
          error: function (data) {
            console.error('Failed', data);
            }
          })

      }

    }

    checkRows(board) {

      for (var row = 3; row < 6; row++) {

        for (var col = 0; col < 7; col++) {
          if (board[row][col]) {

            if (board[row][col] === board[row - 1][col] && board[row][col] === board[row - 2][col] && board[row][col] === board[row - 3][col]) {

              this.state.winner = board[row][col];

            }
          }
        }
      }
    }

    checkColumns(board) {
      for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
          if (board[row][col]) {
            if (board[row][col] === board[row][col + 1] && board[row][col] === board[row][col + 2] && board[row][col] === board[row][col + 3]) {
              this.state.winner = board[row][col];

            }
          }
        }
      }
    }

    checkDiagonalRight(board) {

      for (var row = 3; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
          if (board[row][col]) {
            if (board[row][col] === board[row - 1][col + 1] && board[row][col] === board[row - 2][col + 2] && board[row][col] === board[row - 3][col + 3]) {
                  this.state.winner = board[row][col];

            }
          }
        }
      }
    }

    checkDiagonalLeft(board) {

      for (var row = 3; row < 6; row++) {
        for (var col = 3; col < 7; col++) {
          if (board[row][col]) {
            if (board[row][col] === board[row - 1][col - 1] && board[row][col] === board[row - 2][col - 2] && board[row][col] === board[row - 3][col - 3]) {
              this.state.winner = board[row][col];


            }
          }
        }
      }
    }

    checkSpace(col) {
      for (var row = 0; row < 6; row++) {
        if (this.state.board[row][col] === null) {
            return true;
        }
      }
      return false;
    }

    checkTie(board) {
      for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
          if (board[row][col] === null) {
            return null;
          }
        }
      }
      this.state.winner = 'tie';
    }

    checkForWin(board) {
      this.checkRows(board);
      this.checkColumns(board);
      this.checkDiagonalRight(board);
      this.checkDiagonalLeft(board);
      this.checkTie(board);
      this.declareWin();

    }

    componentWillMount() {
      this.createBoard();
    };

    render() {
      return (
        <div>
          <div className="status">{this.state.status}</div>
          <table>
            <tbody>
              {this.state.board.map((row, i) => (<Row key={i} row={row} onColClick={this.onColClick} />))}
            </tbody>
          </table>
        </div>
      );
    }
  }




  export default App;