function selectCard(selected) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.remove('selected'));
    selected.classList.add('selected');
  }
  