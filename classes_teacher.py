class Deck:
    def __init__(self, suit, face_value, actual_value):
        self.suit = suit
        self.face_value = face_value
        self.actual_value = actual_value
    
    def print_card(self):
        print(f"suit: {self.suit}")
        print(f"face value: {self.face_value}")
        print(f"actual_value: {self.actual_value}")
        return self

ace_of_spades = Card('spades', 'Ace', '1')
king_of_spades = Card('spades', 'King', '10')
print(ace_of_spades.print_card())
print(king_of_spades.print_card())

    def show_cards(self):
        for card in self.cards:
            card.card_info()

deck = [
    {'face_value': 'Ace'}
]

list_of_cards = []
for dict in deck:
    card = Deck(dict['face_value'], dict['actual_value'], dict['suit'])
    list_of_cards.append(card)