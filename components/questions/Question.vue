<template>
  <form :class="classContainer">
    <ConfirmModal v-if="showModal" @clickDelete="deleteQuestion()" @click='changeShowModal()'/>
    <div v-if="!showModal" class="questionButtons" @click='changeShowModal()'>
      <img src="@/assets/icons/delete.svg"/>
    </div>
    <input class="questionName" :value="question.question"/>
  <div class="answers">
    <div v-for="answer in localAnswers" :key="answer.answer + question.question" class="answer">
      <Answer :answerprop='answer.answer'/>
    </div>
    <AddButton type='mini' @click='addNewAnswer()'/>
  </div>
  </form>
</template>

<script>
import ConfirmModal from '@/components/questions/tools/ConfirmModal.vue'
import Answer from '@/components/questions/Answer.vue'
import AddButton from './tools/AddButton.vue'
export default {
  name:'Question',
  components: {
    ConfirmModal,
    Answer,
    AddButton
  },
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data:  () => ({
    classContainer: 'questionContainer',
    showModal: false,
    localAnswers: [],
  }),
  mounted() {
    this.localAnswers= this.question.answers
  },
  methods: {
    changeShowModal() {
      this.showModal =! this.showModal
    },
    deleteQuestion() {
      this.classContainer = "deletedQuestion"
    },
    addNewAnswer(){
     this.localAnswers.push({answer:''})
    }
  }
}
</script>

<style scoped>
  .deletedQuestion {
    display:none;
  }
  .questionContainer {
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    background: #e1e7e9;
  }

  .questionContainer:nth-child(2) {
    background:#c5caff;
  }


  .answers {
    display: grid;
    grid-auto-flow: row;
    gap: 0.5rem 0;
    padding-bottom: 0.5rem;
    width: 100%;
  }

  .questionName {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .questionButtons {
    position:absolute;
    top:-1.5rem;
    left: calc(100% - 50px);
    opacity: 0;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }

  .questionButtons img {
    width: 100%;
    height: 100%;
  }

  .questionButtons:hover {
   opacity:1;
  }

  .questionContainer:hover .questionButtons{
    opacity:1;
  }

</style>