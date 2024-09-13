
# import random
# def choose_word():
#   words = ["apple", "banana", "orange", "grape", "pear"]
#   return random.choice(words)
# def initialize_game(word):
#   return ["-" for _ in range(len(word))]
# def get_guess():
#   return input("Enter a letter: ")
# def check_guess(word, guess, game_state):
#   for i, letter in enumerate(word):
#     if letter == guess:
#       game_state[i] = guess
# def update_game_state(game_state, word):
#   if "".join(game_state) == word:
#     return True
#   return False
# def play_game():
#   word = choose_word()
#   game_state = initialize_game(word)
#   attempts = 6
#   while attempts > 0:
#     print("".join(game_state))
#     guess = get_guess()
#     check_guess(word, guess, game_state)
#     if update_game_state(game_state, word):
#       print("Congratulations! You guessed the word:", word)
#       return
#     else:
#       attempts -= 1
#       print("Incorrect guess. You have", attempts, "attempts left.")
#   print("Sorry, you ran out of attempts. The word was:", word)
# play_game()

