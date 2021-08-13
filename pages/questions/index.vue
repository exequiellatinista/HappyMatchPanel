<template lang="">
  <div>
    <div class='owner'>Hola Dueño1!</div>
    <div class='locals'>
      <div v-for="local in locals" :key="local.id" class='local'>
        <Locals :localname='local.name' @click="setLocalSelected(local)"/>
      </div>
    </div>
    <div class='questions'>
      <div v-if="localSelected.lenght!=0" class='local'>
        <div v-for="question in localSelected.questions" :key="question.id + localSelected.id" class="question">
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
    localSelected: [],
    locals: [
      {id:'0',
      name:'Sable Santa Fe',
      questions:
        [
          {id:1,
          question:'Te gusta el mc?',
          answers:[
            {id:1,answer:'Si'},
            {id:2,answer:'No'},
            {id:3,answer:'Nose'},
          ]},
          {id:2,
          question:'Te gusta el burguer?',
          answers:[
            {id:1,answer:'Si'},
            {id:2,answer:'No'},
            {id:3,answer:'Nose'},
          ]},
          {id:3,
          question:'Te gusta el mostaza?',
          answers:[
            {id:1,answer:'Si'},
            {id:2,answer:'No'},
            {id:3,answer:'Nose'},
          ]},
        ]
      },
    
      {id:'1',
      name:'Sable Callao',
      questions:
        [
          {id:1,
          question:'Te gusta capucchino',
          answers:[
            {id:1,answer:'Si'},
            {id:2,answer:'No'},
            {id:3,answer:'Nose'},
          ]},
          {id:2,
          question:'Te gustan las medialunas?',
          answers:[
            {id:1,answer:'Si'},
            {id:2,answer:'No'},
            {id:3,answer:'Nose'},
          ]},
          {id:3,
          question:'Te gustan las tostadas?',
          answers:[
            {id:1,answer:'Si'},
            {id:2,answer:'No'},
            {id:3,answer:'Nose'},
          ]},
        ]
      },]
  }),
  methods: {
    setLocalSelected(idLocal){
      this.localSelected = this.locals.find(l => l.id === idLocal.id)
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
</style>