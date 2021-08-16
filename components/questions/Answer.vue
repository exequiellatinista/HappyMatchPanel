<template>
  <form  v-if="showAnswer" class="answerContainer">
    <input class="answerInput" :value='answerprop' />
    <div class="deleteAnswer" @click='changeShowAnswer()'><img src="@/assets/icons/deletemini.svg"/></div>
  </form>
</template>
<script>
export default {
  name: 'Answer',
  props: {
    answerprop: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showAnswer: true
  }),
  methods: {
    changeShowAnswer() {
      this.showAnswer =! this.showAnswer
    }
  }
}
</script>
<style scoped>
  .answerContainer {
    position: relative;
    width:100%;
    height: 100%;
  }

  .deleteAnswer {
    position: absolute;
    top: 0;
    left: 100%;
    fill:black;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .deleteAnswer img {
  width: 1rem;
    height: 1rem;
  }

   .answerInput {
      border: solid 0.1rem var(--border-color);
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
  }
</style>