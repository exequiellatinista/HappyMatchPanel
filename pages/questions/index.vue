<template lang="">
  <div class="indexQuestionContainer">
    <div class='owner'>Administre las preguntas y respuestas que se veran en sus locales<br> Las preguntas tildadas como Active, son las que se muestran en el dia actual.</div>
    <div class='locals'>
      <div v-for="local in locals" :key="local.localId" class='local'>
        <Locals :localprop='{local, localSelected}' @click="setLocalSelected(local)"/>
      </div>
    </div>
    <div class='questions'>
      <div v-if="localSelected.lenght!=0" class="questionsSelected">
        <div v-for="(question, index) in localSelected.questions" :key="localSelected.localId + index" class="question">
          <Question :question='question' />
        </div>
             <div class="newQuestion">  
        <AddButton type='normal' @click='addNewQuestion()'/>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import Locals from '@/components/questions/Locals.vue'
import Question from '@/components/questions/Question.vue'
import AddButton from '@/components/questions/tools/AddButton.vue'
export default {
  name: 'QuestionsIndex',
  components: { Locals, Question, AddButton },
  // props: {
  //   owner: {
  //     type: Object,
  //     required: true,
  //   }
  // },
  data: () => ({
    dataApi: {},
    localSelected: [],
    locals: [
      {
        clientId: '1234',
        localId: '0',
        name: 'Sable Santa Fe',
        questions: [
          {
            question: 'Te gusta el mc?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gusta el burguer?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gusta el mostaza?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gusta el mostaza?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gusta el mostaza?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gusta el mostaza?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gusta el mostaza?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
        ],
      },

      {
        clientId: '566565',
        localId: '1',
        name: 'Sable Callao',
        questions: [
          {
            question: 'Te gusta capucchino',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gustan las medialunas?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gustan las tostadas?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
        ],
      },

      {
        clientId: '4579765',
        localId: '3434321',
        name: 'Sable Callao',
        questions: [
          {
            question: 'Te gusta capucchino',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gustan las medialunas?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gustan las tostadas?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
        ],
      },

      {
        clientId: '54656',
        localId: '4341',
        name: 'Sable Callao',
        questions: [
          {
            question: 'Te gusta capucchino',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gustan las medialunas?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gustan las tostadas?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
        ],
      },

      {
        clientId: '13257',
        localId: '133',
        name: 'Sable Callao',
        questions: [
          {
            question: 'Te gusta capucchino',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gustan las medialunas?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
          {
            question: 'Te gustan las tostadas?',
            answers: [{ answer: 'Si' }, { answer: 'No' }, { answer: 'Nose' }],
          },
        ],
      },
    ],
  }),
  async mounted() {
    this.localSelected = this.locals.find((l) => l)
    const res = await fetch(
      'http://primeraprueba1.herokuapp.com/api/respuestas'
    )
    const data = await res.json()
    this.dataApi = data
  },
  methods: {
    setLocalSelected(local) {
      this.localSelected = this.locals.find((l) => l.localId === local.localId)
    },
    addNewQuestion() {
      this.localSelected.questions.push({
        question: '',
        answers: [],
      })
    },
  },
}
</script>

<style>
.indexQuestionContainer {
  width: 100%;
}
.locals {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 0 0.5rem;
  border-bottom: solid 1px var(--border-color);
}
.questions {
  margin: 1rem auto auto auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}
.owner {
  font-size: 1rem;
}
.newQuestion {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.3rem;
  background: transparent;
  max-width: 30rem;
  min-width: 20rem;
  min-height: 12rem;
  overflow: hidden;
  border: dashed rgba(0, 0, 0, 0.1) 2px;
}
.local {
  max-width: 100%;
  margin: auto;
  display: grid;
  box-sizing: border-box;
}

.questionsSelected {
  padding: 1rem;
  display: grid;
  width: calc(100% - 2rem);
  grid-gap: 1.3rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
</style>