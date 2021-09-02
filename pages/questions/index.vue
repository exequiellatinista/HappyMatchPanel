<template lang="">
  <div class="indexQuestionContainer">
    <div class='owner'>Administre las preguntas y respuestas que se veran en sus locales<br> Las preguntas tildadas como Active, son las que se estan mostrando en el dia de hoy.</div>
    <div class='locals'>
      <div v-for="local in localsState" :key="local.localId" class='local'>
        <Locals :localprop='{local, localSelected}' @click="setLocalSelected(local)"/>
      </div>
    </div>
    <div class="localContainer">
    <div class='questions'>
      <p class="titleBoxs">Preguntas y respuestas</p>
      <div v-if="localSelected.length!==0" class="questionsSelected">
        <div v-for="(question, index) in localSelected.questions" :key="question.id" class="question">
          <Question :info='{question, index}' @clickDeleteQuestion='deleteQuestion(question.id)'/>
        </div>
             <div class="newQuestion">  
        <AddButton type='normal' @click='searchEmptyQuestion()'/>
      </div>
      </div>
    </div>
    <div class="users">
    <p class="titleBoxs">Mesas actuales</p>
      <div class="filterContainer">
        <div class="inputWrapper">
            <img class="searchIcon" src="@/assets/icons/search.svg">
            <img v-if="searchValue!=''" class="clearIcon" src="@/assets/icons/clearInput.svg" @click="searchValue='';searchFilter()">
        <form>
          <input v-model="searchValue" placeholder="Buscar.." @keyup="searchFilter()" >
        </form>
        </div>
      </div>
      <div v-for="table in clientsSelected" :key="localSelected.localId + table.id" class="user">
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
    searchValue: '',
    clientsSelected: [],
    emptyQuestions: [],
    locals: [
      {
        clientId: '1234',
        localId: '0',
        name: 'Peñon del Aguila',
        questions: [
          {
            id: 1,
            question: 'Birra..¿Ipa o Honey?',
            active: true,
            answers: [
              { id: 1, answer: 'Ipa' },
              { id: 2, answer: 'Honey' },
            ],
          },
          {
            id: 2,
            active: true,
            question: '¿Fernet o Gin?',
            answers: [
              { id: 1, answer: 'Fernet' },
              { id: 2, answer: 'Gin' },
            ],
          },
          {
            id: 3,
            question: 'Ciudad dividida..¿Central o NOB?',
            active: false,
            answers: [
              { id: 1, answer: 'Central' },
              { id: 2, answer: 'NOB' },
              { id: 3, answer: 'Ninguno' },
            ],
          },
          {
            id: 4,
            question: '¿Team invierno o team verano?',
            active: true,
            answers: [
              { id: 1, answer: 'Invierno' },
              { id: 2, answer: 'Verano' },
            ],
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
        localId: 1,
        name: 'Sable Callao',
        questions: [
          {
            id: 1,
            question: 'Birra..¿Ipa o Honey?',
            active: true,
            answers: [
              { id: 1, answer: 'Ipa' },
              { id: 2, answer: 'Honey' },
            ],
          },
          {
            id: 2,
            active: true,
            question: '¿Fernet o Gin?',
            answers: [
              { id: 1, answer: 'Fernet' },
              { id: 2, answer: 'Gin' },
            ],
          },
          {
            id: 3,
            question: 'Ciudad dividida..¿Central o NOB?',
            active: false,
            answers: [
              { id: 1, answer: 'Central' },
              { id: 2, answer: 'NOB' },
              { id: 3, answer: 'Ninguno' },
            ],
          },
          {
            id: 4,
            question: '¿Team invierno o team verano?',
            active: true,
            answers: [
              { id: 1, answer: 'Invierno' },
              { id: 2, answer: 'Verano' },
            ],
          },
          {
            id: 5,
            question: '¿Pregunta?',
            active: false,
            answers: [
              { id: 1, answer: 'Respuesta1' },
              { id: 2, answer: 'Respuesta2' },
            ],
          },
          {
            id: 6,
            question: '¿Pregunta?',
            active: false,
            answers: [
              { id: 1, answer: 'Respuesta1' },
              { id: 2, answer: 'Respuesta2' },
            ],
          },
          {
            id: 7,
            question: '¿Pregunta?',
            active: false,
            answers: [
              { id: 1, answer: 'Respuesta1' },
              { id: 2, answer: 'Respuesta2' },
            ],
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
  computed: {
   
  },
  async mounted() {
    this.localSelected = this.locals.find((l) => l)
    this.clientsSelected = this.localSelected.tables
    const res = await fetch(
      'http://primeraprueba1.herokuapp.com/api/respuestas'
    )
    const data = await res.json()
    this.dataApi = data
    this.localsState()
  },

  methods: {
    setLocalSelected(local) {
      this.localSelected = this.locals.find((l) => l.localId === local.localId)
    },
    addNewQuestion() {
      this.localSelected.questions.push({
        id: Date.now(),
        question: '',
        answers: [{ answer: '' }, { answer: '' }],
      })
    },
    deleteQuestion(questionDeleted) {
      this.localSelected.questions = this.localSelected.questions.filter(
        (q) => q.id !== questionDeleted
      )
      console.log(this.localSelected.questions)
    },
    searchFilter() {
      this.clientsSelected = this.localSelected.tables.filter((t) =>
        t.tableName.toLowerCase().includes(this.searchValue.toLowerCase())
      )
    },

     localsState() {
      return this.$axios.$get('/getLocals').then(response => console.log('mensaje local state ',response))
    },

    searchEmptyQuestion() {
      this.emptyQuestions = this.localSelected.questions.filter(
        (q) => q.question === ''
      )
      this.emptyQuestions.length === 0
        ? this.addNewQuestion()
        : this.addNewQuestion()
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
  margin-bottom: 3rem;
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
  position: relative;
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
  padding: 2rem 1rem;
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
  padding-top: 8rem;
  position: relative;
}
.filterContainer {
  position: absolute;
  top: 0;
  height: 4rem;
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
  position: relative;
}
.filterContainer input {
  width: 100%;
  border: none;
  box-shadow: 0 8px 20px rgb(0 0 0 / 6%);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 1.5rem 4rem;
  outline: none;
  height: 100%;
}

.searchIcon {
  position: absolute;
  top: 1.4rem;
  left: 1rem;
  z-index: 1;
}
.clearIcon {
  position: absolute;
  top: 1.4rem;
  left: calc(100% - 4rem);
  z-index: 1;
  cursor: pointer;
}

.inputWrapper {
  width: 80%;
  position: relative;
  top: 1rem;
  height: 2rem;
  border: none;
  box-sizing: border-box;
}

.titleBoxs {
  position: absolute;
  top: -2rem;
  left: 1rem;
  font-size: 14px;
  font-weight: 500;
  color: #5f6368;
}
</style>