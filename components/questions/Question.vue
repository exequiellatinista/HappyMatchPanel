<template>
  <form :class="classContainer">
    <ConfirmModal v-if="showModal" @clickDelete="deleteQuestion()" @click='changeShowModal()'/>
    <div class="questionHeader">
      <div class="active">
        <div class="activeColor"></div>
        <p class="activeText">Active</p>
      </div>
      <div class="editContainer" @click='changeShowModal()'>
        <img class="editImg" src="@/assets/icons/delete.svg"/>
      </div>
    </div>
    <input class="questionName" :value="question.question"/>
  <div class="answers">
    <div v-for="answer in localAnswers" :key="answer.answer + question.question" class="answer">
      <Answer :answerprop='answer.answer'/>
    </div>
    <div class="footerQuestion">
      <input placeholder="+">
    </div>
  </div>
  <!-- <AddButton type='mini' @click='addNewAnswer()'/> -->
  </form>
</template>

<script>
import ConfirmModal from '@/components/questions/tools/ConfirmModal.vue'
import Answer from '@/components/questions/Answer.vue'
// import AddButton from './tools/AddButton.vue'
export default {
  name:'Question',
  components: {
    ConfirmModal,
    Answer,
    // AddButton
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
    border-radius: 0.3rem;
    background: #e1e7e9;
    max-width: 30rem;
    min-width:20rem;
     overflow: hidden;
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
    width: calc(100% - 1rem);
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    z-index: 2;
    border:none;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
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

  .questionHeader {
    height: 20%;
    width: 100%;
     display: grid;
    justify-content: space-between;
    align-items: center;
    grid-auto-flow: column;
    position: relative;
  }

  .active {
    display: grid;
    justify-content: start;
    align-items: center;
    grid-auto-flow: column;
    gap: 0.5rem;
    width: 50%;
    margin-bottom: 1rem;
  }
  .activeColor {
  width: 1rem;
    height:1rem;
    background: black;
    border-radius: 1rem;
  }
  .activeText {
    text-align: center;
    font-size: 0.7rem;
  }
  .editContainer {
    position: absolute;
  left: calc(100% - 2.5rem);
    top: -2rem;
    display: flex;
    align-items:center;
    justify-content: center;
      width: 5rem;
    height:5rem;
    background: rgba(0,0,0,0.1);
    border-radius: 5rem;
    z-index: 1;
  }
  .editImg {
    width: 2rem;
    height: 2rem;
  }
  .footerQuestion {
  width: 100%;
  }
  .footerQuestion input {
      border: dashed rgba(0,0,0,0.1) 1px;
      background: rgba(256,256,256,0.1);;
      width:100%;
      font-size: 1.5rem;
      text-align: center;
  }
</style>