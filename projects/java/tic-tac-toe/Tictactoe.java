import java.util.Scanner;

public class Tictactoe {

    // Step 1: Board Data Structure
    static char[][] board = {
            { '_', '_', '_' },
            { '_', '_', '_' },
            { '_', '_', '_' }
    };

    static Scanner scan = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.print("\nLet's play tic tac toe!");

        // Step 2: Print the board
        printBoard();

        // Step 3: Take turns
        takeTurns();
    }

    /**
     * function - printBoard
     * function logic:
     * 1. Write a nested for loop - i, j
     * 2. Print a new line
     * 3. Separate each row by two lines
     * 4. Add a tab space before each line
     * 5. Each char should have a space
     */
    public static void printBoard() {
        System.out.print("\n");
        for (int i = 0; i < board.length; i++) {
            System.out.print("\n\t");
            for (int j = 0; j < board[i].length; j++) {
                System.out.print(board[i][j] + "  ");
            }
        }
    }

    /**
     * function - takeTurns
     * function logic:
     * 1. Run a loop for 9 iterations
     * 2. If i is even its x's turn
     * 3. If i is odd its o's turn
     */
    public static void takeTurns() {
        for (int i = 0; i < 9; i++) {
            if (i % 2 == 0) {
                turn('x');
            } else {
                turn('o');
            }

            // Step 5: Update the board
            printBoard();

            // Step 6: Check winner
            char winner = checkWinner();

            if (winner == 'x') {
                System.out.print("\n\nx wins!" + "\n");
                break;
            } else if (winner == 'o') {
                System.out.print("\n\no wins!" + "\n");
                break;
            } else if (winner == '?' && i == 8) {
                System.out.print("\n\nGame tied!" + "\n");
                break;
            }
        }
    }

    public static void turn(char player) {
        System.out.print("\n\n" + player + "'s turn:");
        // Step 4: Ask user to pick a spot
        int[] spot = askUser();
        board[spot[0]][spot[1]] = player;
    }

    /**
     * function - askUser
     * function logic:
     * 1. Ask user to pick a row and column
     * 2. Check if the spot is already taken
     * 3. Return the row and column values
     * 
     * @return spot int[]
     */
    public static int[] askUser() {
        System.out.print("\nPick a spot e.g. 0 0: ");
        int row = scan.nextInt();
        int col = scan.nextInt();

        while (board[row][col] != '_') {
            System.out.print("\nSpot taken, try again: ");
            row = scan.nextInt();
            col = scan.nextInt();
        }

        return new int[] { row, col };
    }

    /**
     * function - checkWinner
     * function logic:
     * 1. Check for rows
     * 2. Check for colums
     * 3. Check for left diagonal
     * 4. Check for right diagonal
     * 
     * @return winner char
     */

    public static char checkWinner() {
        char winner = '?';
        switch (0) {
            case 0:
                winner = checkRows();
                if (winner == 'x' || winner == 'o')
                    break;
            case 1:
                winner = checkColumns();
                if (winner == 'x' || winner == 'o')
                    break;
            case 2:
                winner = checkLeftDiagonal();
                if (winner == 'x' || winner == 'o')
                    break;
            case 3:
                winner = checkRightDiagonal();
                if (winner == 'x' || winner == 'o')
                    break;
        }

        return winner;
    }

    /**
     * function - checkRows
     * function logic:
     * 1. Run an outer loop for all the rows
     * 2. Run an inner loop for each colum in a picked row
     * 3. Declare winner variable with empty value
     * 4. Keep concatenating the x's or o's to winner variable
     * 5. Check for xxx's, return x as winner
     * 6. Check for ooo's, return o as winner
     * 7. Else return ? as a winner
     * 
     * @return winner char
     */
    public static char checkRows() {
        String winner;
        for (int i = 0; i < board.length; i++) {
            winner = "";
            for (int j = 0; j < board.length; j++) {
                winner += board[i][j];
            }
            if (winner.equals("xxx")) {
                return 'x';
            } else if (winner.equals("ooo")) {
                return 'o';
            }
        }
        return '?';
    }

    /**
     * function - checkColumns
     * function logic:
     * 1. Run an outer loop for all the colums
     * 2. Run an inner loop for each row in a picked column
     * 3. Declare winner variable with empty value
     * 4. Keep concatenating the x's or o's to winner variable
     * 5. Check for xxx's, return x as winner
     * 6. Check for ooo's, return o as winner
     * 7. Else return ? as a winner
     * 
     * @return winner char
     */
    public static char checkColumns() {
        String winner;

        for (int i = 0; i < board.length; i++) {
            winner = "";
            for (int j = 0; j < board.length; j++) {
                winner += board[j][i];
            }
            if (winner.equals("xxx")) {
                return 'x';
            } else if (winner.equals("ooo")) {
                return 'o';
            }
        }

        return '?';
    }

    /**
     * function - checkLeftDiagonal
     * function logic:
     * 1. Run a loop for checking diagonals
     * 3. Declare winner variable with empty value
     * 4. Keep concatenating the x's or o's to winner variable
     * 5. Check for xxx's, return x as winner
     * 6. Check for ooo's, return o as winner
     * 7. Else return ? as a winner
     * 
     * @return winner char
     */
    public static char checkLeftDiagonal() {
        String winner = "";
        for (int i = 0; i < board.length; i++) {
            winner += board[i][i];
        }
        if (winner.equals("xxx")) {
            return 'x';
        } else if (winner.equals("ooo")) {
            return 'o';
        }
        return '?';
    }

    /**
     * function - checkRightDiagonal
     * function logic:
     * 1. Run a loop for checking diagonals
     * 3. Declare winner variable with empty value
     * 4. Keep concatenating the x's or o's to winner variable
     * 5. Check for xxx's, return x as winner
     * 6. Check for ooo's, return o as winner
     * 7. Else return ? as a winner
     * 
     * @return winner char
     */
    public static char checkRightDiagonal() {
        String winner = "";
        int count = 2;

        for (int i = 0; i < board.length; i++) {
            winner += board[i][count];
            count--;
        }
        if (winner.equals("xxx")) {
            return 'x';
        } else if (winner.equals("ooo")) {
            return 'o';
        }
        return '?';
    }
}