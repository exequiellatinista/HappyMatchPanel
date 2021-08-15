<template>
  <form class="questionContainer">
    <ConfirmModal v-if="showModal"/>
    <div class="questionButtons" @click='changeShowModal()'>
      <img src="@/assets/icons/delete.svg"/>
    </div>
    <input class="questionName" :value="question.question"/>
  <div class="answers">
    <input v-for="answer in question.answers" :key="answer.answer + question.question" class="answer" :value="answer.answer" />
  </div>
  </form>
</template>

<script>
import ConfirmModal from '@/components/questions/tools/ConfirmModal.vue'
export default {
  name:'Question',
  components: {
    ConfirmModal
  },
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data:  () => ({
    showModal: false
  }),
  methods: {
    changeShowModal() {
      this.showModal =! this.showModal
    }
  }
}
</script>

<style scoped>
  .questionContainer {
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 1px 4px 9px -1px rgba(0,0,0,0.58);
    border-radius: 0.5rem;
  }


  .answers {
    display: grid;
    grid-auto-flow: row;
    gap: 0.5rem 0;
    padding-bottom: 0.5rem;
    border-bottom: solid 0.1rem var(--border-color);
    width: 100%;
  }

  .answer {
    border: solid 0.1rem var(--border-color);
    border-radius: 0.2rem;
    height: 1.5rem;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: text;
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
    z-index:99;
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