/*
        7 kyu
        Likes Vs Dislikes
        681792% of 3271,282 of 2,231Mubashir Hassan
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Story
        YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

        Task
        Create a function that takes in a list of button inputs and returns the final state.

        Examples
        likeOrDislike([Dislike]) => Dislike
        likeOrDislike([Like,Like]) => Nothing
        likeOrDislike([Dislike,Like]) => Like
        likeOrDislike([Like,Dislike,Dislike]) => Nothing
        Notes
        If no button is currently active, return Nothing.
        If the list is empty, return Nothing.
*/
function likeOrDislike(buttons) {
  let state = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === "Like") {
      if (state === "Dislike") {
        state = "Like";
      } else if (state === "Like") {
        state = "Nothing";
      } else {
        state = "Like";
      }
    } else if (buttons[i] === "Dislike") {
      if (state === "Like") {
        state = "Dislike";
      } else if (state === "Dislike") {
        state = "Nothing";
      } else {
        state = "Dislike";
      }
    }
  }
  return state;
}
/*
TEST RESULTS:
    Time: 780ms Passed: 3Failed: 0
    Test Results:
    Likes vs. Dislikes
    description example tests
    more example tests
    random tests
    Completed in 4ms
    You have passed all of the tests! :)
*/