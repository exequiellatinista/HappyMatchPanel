<template lang="">
  <p v-if="$fetchState.pending">Fetching locals...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else class="indexQuestionContainer" @>
    <div class='owner'>Administre las preguntas y respuestas que se veran en sus locales<br> Las preguntas tildadas como Active, son las que se estan mostrando en el dia de hoy.</div>
    <div class='locals'>
      <div v-for="local in locals" :key="local.id" class='local'>
        <Locals :localprop='{local, localSelected}' @click="setLocalSelected(local)"/>
      </div>
    </div>
    <div class="localContainer">
    <div class='questions'>
      <p class="titleBoxs">Preguntas y respuestas</p>
      <div class="questionsSelected">
        <div v-for="(question, index) in questionsSelected" :key="question.question" class="question">
          <Question :info='{question, index}' @delete:question='deleteQuestion' @update:question='updateLocalQuestion'/>
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
        <form @submit.prevent>
          <input v-model="searchValue" placeholder="Buscar.." @keyup="searchFilter()" @keyup.prevent="searchFilter()" >
        </form>
        </div>
      </div>
      <div v-for="table in localSelected.tables" :key="localSelected.id + table.id" class="user">
        <Client :info="table" @ban:client="banClient"/>
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
    questionsSelected: [],
    searchValue: '',
    emptyQuestions: [],
    clientId: '1234',
    locals: [],
    // locals: [
    //   {
    //     id: '',
    //     name: '',
    //     tables: [
    //       {
    //         tableid: '',
    //         name: '',
    //         userMainId: '',
    //         userCount: '',
    //         picture: '',
    //         arrayResp: [],
    //       },
    //     ],
    //     questions: [
    //       {
    //         answers: ['azúl', 'verde', 'rojo'],
    //         question: 'Color favorito',
    //       },
    //     ],
    //   },
    // ],
  }),

  async fetch() {
    await this.$axios
      .$get('/api/getUser')
      .then((response) => {
        this.locals = response.locals
        this.clientId = response.id
        console.log(this.locals)
      })
      .catch((e) => {
        console.log(e)
      })

    this.locals.length > 0 &&
      (await this.$axios
        .$get(`/api/getGroupTables/${this.locals[0].id}`)
        .then((res) => {
          this.locals[0].tables = res.groupTables
        })
        .catch((e) => console.log(e)))
    this.locals.length > 0 &&
      (await this.$axios
        .$get(`/api/getQuestions/${this.locals[0].id}`)
        .then((res) => {
          this.locals[0].questions = res.questions
        })
        .catch((e) => console.log(e)))
    console.log('hora fetch', Date.now())
    await this.setLocalSelected(this.locals[0])
    console.log(this.locals[0])
  },

  methods: {
    setLocalSelected(local) {
      this.localSelected = this.locals.find((l) => l.id === local.id)
      this.questionsSelected = this.localSelected.questions
    },
    addNewQuestion() {
    
      this.questionsSelected.push({
          answers: [ '','' ],
        question: '',
      
      })
        console.log(this.localSelected.questions)
    },

    confirmChangeQuestion(){
      const localId =  this.localSelected.id
      const questions = this.questionsSelected
      const body = {localId, questions}
     
      this.$axios.$post('/api/updateQuestions',body)
      .then( res => console.log(res))
     .catch((e) => {
          console.log(e)
        })
    
    },

    deleteQuestion(index) {

      this.questionsSelected = this.questionsSelected.filter(
        (q) => q.question !== this.questionsSelected[index].question
      )
      this.confirmChangeQuestion()
    },
    updateLocalQuestion(questionP, index, answersP){
      this.questionsSelected[index].question = questionP
      this.questionsSelected[index].answers = answersP
      this.confirmChangeQuestion()
     
    },
    searchFilter() {
      this.localSelected.tables = this.localSelected.tables.filter((t) =>
        t.name.toLowerCase().includes(this.searchValue.toLowerCase())
      )
    },

    getLocals() {
      this.$axios
        .$get('/api/getUser')
        .then((response) => {
          this.locals = response.locals
          this.clientId = response.id
          this.locals.map(async (l) => {
            ;(l.tables = await this.getGroupTables(l.id))(
              (l.questions = await this.getQuestions(l.id))
            )
          })
        })
        .catch((e) => {
          console.log(e)
        })
      this.localSelected = this.locals.find((l) => l)
    },

    getGroupTables(id) {
      return this.$axios
        .$get(`/api/getGroupTables/${id}`)
        .then((response) => response.groupTables)
        .catch((e) => {
          console.log(e)
        })
    },

    getQuestions(id) {
      return this.$axios
        .$get(`/api/getQuestions/${id}`)
        .then((response) => response.questions)
        .catch((e) => {
          console.log(e)
        })
    },

    searchEmptyQuestion() {
      this.emptyQuestions = this.questionsSelected.filter(
        (q) => q.question === ''
      )
      this.emptyQuestions.length === 0
        && this.addNewQuestion()
    },
    banClient(idGroup, reason){
      this.$axios.$post(`/api/banGroupTable/${idGroup}`, {reason})
      .then(res => console.log('Mesa baneada ', res))
      .catch((e) => {
        console.log(e)
      })
    },
    unBanClient(idGroup){
      this.$axios.$post(`/api/unBanGroupTable/${idGroup}`)
        .then(res => console.log('Mesa desbaneada ', res))
      .catch((e) => {
        console.log(e)
      })
    }
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