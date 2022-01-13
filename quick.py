# Create the alphabet because it's easier this way
def create_alphabet(num):
    alphabet = {}
    alphabet_words = "abcdefghijklmnopqrstuvwxyz"

    for i in range(len(alphabet_words)):
        value = 6
        if i > 0:
            value = alphabet[alphabet_words[i - 1]] + 6
        alphabet[alphabet_words[i]] = value
    return alphabet


# Take a word and add up the corresponding values in the alphabet
def word_value(word, alph):
    word = word.lower()
    total = 0
    for letter in word:
        total += alph[letter]
    return total


print(word_value("COMPUTER", create_alphabet(6)))