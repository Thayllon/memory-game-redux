import React from 'react';
import { connect } from "react-redux";

import { Board, Card, VictoryDialog } from "../../components";
import { selectCard, closeVictoryDialog, startGame } from "../../store/actions";

const GamePage = ({ cards, onCardClick, isVictoryDialogOpen, onCloseVictoryDialog, onStartGame }) => (
  <>
    <Board>
      {cards.map(card => (
        <Card
          key={card.key}
          name={card.name}
          isActive={card.isActive}
          onClick={() => {
            onCardClick(card.key);
          }}
        />
      ))}
    </Board>
    <VictoryDialog isOpen={isVictoryDialogOpen} onClose={onCloseVictoryDialog} onGameRestart={onStartGame} />
  </>
);

//função para mapear o estado para a propriedade do component
//recebe o estado como parâmetro
const mapStateToProps = state => ({
  cards: state.cards,
  isVictoryDialogOpen: state.isVictoryDialogOpen
});


//função para mapear o disparo da ação para a propriedade do component
const mapDispatchToProps = {
  onCardClick: selectCard,
  onCloseVictoryDialog: closeVictoryDialog,
  onStartGame: startGame
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);