document.addEventListener('DOMContentLoaded', function() {
    const cardArray = [
        { letter: 'A', id: 1 },
        { letter: 'A', id: 2 },
        { letter: 'B', id: 3 },
        { letter: 'B', id: 4 },
        { letter: 'C', id: 5 },
        { letter: 'C', id: 6 },
        { letter: 'D', id: 7 },
        { letter: 'D', id: 8 },
        { letter: 'E', id: 9 },
        { letter: 'E', id: 10 },
        { letter: 'F', id: 11 },
        { letter: 'F', id: 12 },
        { letter: 'G', id: 13 },
        { letter: 'G', id: 14 },
        { letter: 'H', id: 15 },
        { letter: 'H', id: 16 }
    ];

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createBoard() {
        shuffle(cardArray);
        const grid = document.querySelector('.grid');
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-id', i);
            card.textContent = '?'; 
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].textContent = cardsChosen[0];
            cards[optionTwoId].textContent = cardsChosen[1];
            cardsWon.push(cardsChosen[0]);
        } else {
            cards[optionOneId].textContent = '?';
            cards[optionTwoId].textContent = '?';
        }
        cardsChosen = [];
        cardsChosenId = [];
        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found all the matches!');
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        if (cardsChosenId.length < 2 && !cardsChosenId.includes(cardId)) {
            this.textContent = cardArray[cardId].letter;
            cardsChosen.push(cardArray[cardId].letter);
            cardsChosenId.push(cardId);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500); 
            }
        }
    }

    createBoard();
});
