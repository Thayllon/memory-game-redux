import { select, put, delay, takeEvery } from "redux-saga/effects";
import { SELECT_CARD, LOCK, OPEN_CARD, SET_MATCH, CLOSE_CARDS } from "./actions";

function* selectCard(action) { //Função de selecionar a carta 
  const { key } = action;
  const cards = yield select(state => state.cards); //Pegando o valor de todas as cartas
  const isLocked = yield select(state => state.isLocked) //Para verificar se a carta esta bloqueada
  const index = cards.findIndex(c => c.key === key); //Pegando o indice da carta
  const otherCardIndex = cards.findIndex(c => c.isActive && !c.hasMatch); //Pegando o indice de outra carta

  if (!isLocked && index > -1 && !cards[index].isActive) { //Se a carta não esta bloqueada, se o indice ja existe e se a carta ja está aberta
    yield put({
      type: OPEN_CARD, index //Ação para abrir as cartas
    });

    if (otherCardIndex > -1) { //Verificando se outra carta ja foi aberta
      if (cards[index].id === cards[otherCardIndex].id) { //verificando o ID das 2 cartas abertas 
        yield put({ type: SET_MATCH, index1: index, index2: otherCardIndex }) //Ação para dar o match nas cartas 

      } else { //Se as cartas nao forem iguais elas teram um delay de 1,5s e iram fechar 
        yield put({ type: LOCK }) //Ação para disparar o bloqueo
        yield delay(1500); //Onde é determinado o tempo do delay
        yield put({
          type: CLOSE_CARDS, index1: index, index2: otherCardIndex //Ação para fechar as cartas diferentes com a verificação do indice
        });
      }
    }
  }
}

function* gameSaga() {
  yield takeEvery(SELECT_CARD, selectCard);
}

export default gameSaga;