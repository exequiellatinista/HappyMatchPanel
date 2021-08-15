<template lang="">
  <div>
    <div class='owner'>Hola Dueño1!</div>
    <div class='locals'>
      <div v-for="local in locals" :key="local.localId" class='local'>
        <Locals :localname='local.name' @click="setLocalSelected(local)"/>
      </div>
    </div>
    <div class='questions'>
      <div v-if="localSelected.lenght!=0" class='local'>
        <div v-for="(question, index) in localSelected.questions" :key="localSelected.localId + index" class="question">
          <Question :question='question' />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Locals from '@/components/questions/Locals.vue'
import Question from '@/components/questions/Question.vue'
export default {
  name: 'QuestionsIndex',
  components: {Locals, Question},
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
      {clientId: '1234',
      localId:'0',
      name:'Sable Santa Fe',
      questions:
        [
          {
          question:'Te gusta el mc?',
          answers:[
            {answer:'Si'},
            {answer:'No'},
            {answer:'Nose'},
          ]},
          {
          question:'Te gusta el burguer?',
          answers:[
            {answer:'Si'},
            {answer:'No'},
            {answer:'Nose'},
          ]},
          {
          question:'Te gusta el mostaza?',
          answers:[
            {answer:'Si'},
            {answer:'No'},
            {answer:'Nose'},
          ]},
        ]
      },
    
      {clientId: '566565',
      localId:'1',
      name:'Sable Callao',
      questions:
        [
          {
          question:'Te gusta capucchino',
          answers:[
            {answer:'Si'},
            {answer:'No'},
            {answer:'Nose'},
          ]},
          {
          question:'Te gustan las medialunas?',
          answers:[
            {answer:'Si'},
            {answer:'No'},
            {answer:'Nose'},
          ]},
          {
          question:'Te gustan las tostadas?',
          answers:[
            {answer:'Si'},
            {answer:'No'},
            {answer:'Nose'},
          ]},
        ]
      },]
  }),
  async mounted() {
    const res = await fetch('http://primeraprueba1.herokuapp.com/api/respuestas')
      const data = await res.json()
      this.dataApi = data
  },
  methods: {
    setLocalSelected(local){
      this.localSelected = this.locals.find(l => l.localId === local.localId)
    }
  }
}
</script>

<style scoped>
  .locals {
    display: grid;
     grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    gap: 0 0.5rem;
  }
  .questions {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>