This is a field goal kicking football game.
Press the space bar to randomly spawn a ball.
Use the arrow keys to aim the ball.
Press enter to shoot.
When the game ends, click the button to enter your name and save your score.
Press A to retry.

All of these controls use a keypressed function; when a certain key is pressed, the game does what you tell it to do.
The score is a variable called "points". When the ball crosses over the goal post, 3 is added to "points".
Localstorage is used to save each score. When the score at the end of the game is higher than the high score displayed on the screen, it becomes the new high score.
Each round lasts 30 seconds. The time is kept through something called "framecount". There are 60 frames in a second. If the framecount is greater than 1,800, the game ends.
Everything is drawn through the draw function. 

To play the game, create a new folder on your computer. Copy these index.html and sketch.js folders into that folder. Once that is done, double click on the index.html in the folder, and it should open the game in your browser. Open sketch.js in atom to edit the code.
