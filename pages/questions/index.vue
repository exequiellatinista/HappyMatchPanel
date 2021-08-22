<template lang="">
  <div class="indexQuestionContainer">
    <div class='owner'>Administre las preguntas y respuestas que se veran en sus locales<br> Las preguntas tildadas como Active, son las que se muestran en el dia actual.</div>
    <div class='locals'>
      <div v-for="local in locals" :key="local.localId" class='local'>
        <Locals :localprop='{local, localSelected}' @click="setLocalSelected(local)"/>
      </div>
    </div>
    <div class="localContainer">
    <div class='questions'>
      <div v-if="localSelected.lenght!=0" class="questionsSelected">
        <div v-for="(question, index) in localSelected.questions" :key="localSelected.localId + index" class="question">
          <Question :info='{question, index}' />
        </div>
             <div class="newQuestion">  
        <AddButton type='normal' @click='addNewQuestion()'/>
      </div>
      </div>
    </div>
    <div class="users">
      <div class="filterContainer">
        <form>
          <input placeholder="Buscar..">
        </form>
      </div>
      <div v-for="table in localSelected.tables" :key="localSelected.localId + table.id" class="user">
        <Client :info="table"/>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Locals from '@/components/questions/Locals.vue'
import Question from '@/components/questions/Question.vue'
import Client from '@/components/clients/Client.vue'
import AddButton from '@/components/questions/tools/AddButton.vue'
export default {
  name: 'QuestionsIndex',
  components: { Locals, Question, AddButton, Client },
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
        tables: [
          {
            id: '1',
            mainUser: {
              name: 'José',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 1',
            reports: 0,
          },
          {
            id: '2',
            mainUser: {
              name: 'Brian',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 2',
            reports: 3,
          },
          {
            id: '3',
            mainUser: {
              name: 'Sofia',
              banned: false,
            },
           img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 3',
            reports: 0,
          },
          {
            id: '4',
            mainUser: {
              name: 'Emanuel',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 4',
            reports: 0,
          },
          {
            id: '5',
            mainUser: {
              name: 'Roberto',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 5',
            reports: 0,
          },
          {
            id: '6',
            mainUser: {
              name: 'Maria',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 6',
            reports: 0,
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
        tables: [
          {
            id: '1',
            mainUser: {
              name: 'Tiago',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 1',
            reports: 0,
          },
          {
            id: '2',
            mainUser: {
              name: 'Leandro',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 2',
            reports: 3,
          },
          {
            id: '3',
            mainUser: {
              name: 'Maria',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 3',
            reports: 0,
          },
          {
            id: '4',
            mainUser: {
              name: 'Carlos',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 4',
            reports: 0,
          },
          {
            id: '5',
            mainUser: {
              name: 'Luka',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 5',
            reports: 0,
          },
          {
            id: '6',
            mainUser: {
              name: 'John',
              banned: false,
            },
            img: '@/assets/images/perfiles.jpg',
            tableName: 'Mesa 6',
            reports: 0,
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
  user-select: none;
}
.localContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0 1rem;
  box-sizing: border-box;
  padding: 1rem 1rem 0 1rem;
}
.questions {
  display: grid;
     align-items: start;
    justify-items: center;
  width: 100%;
  box-sizing: border-box;
  border: solid 1px var(--border-color);
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
   box-sizing: border-box;
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
   box-sizing: border-box;
}

.users {
  width: 100%;
  border: solid 1px var(--border-color);
  display: grid;
  padding: 1rem;
  box-sizing: border-box;
  align-items: start;
  justify-items: center;
  gap: 1rem 0;
  padding-top: 5rem;
  position: relative;
}
.filterContainer {
  position: absolute;
  top:0;
  height: 2rem;
  width: 100%;
  background: #f3f3f4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filterContainer form {
  width: 100%;
    display: flex;
  align-items: center;
  justify-content: center;
}
.filterContainer input {
  position: relative;
  top: 1rem;
  height: 2rem;
  width: 80%;
  border: none;
      box-shadow: 0 8px 20px rgb(0 0 0 / 6%);
    border-radius: 8px;
}
</style>