<template>
  <form  v-if="showAnswer" class="answerContainer">
    <input class="answerInput" :value='answerprop' :placeholder='[answerprop=="" & "+"]'/>
    <div class="deleteAnswer" @click='changeShowAnswer()'><img src="@/assets/icons/deletemini.svg"/></div>
  </form>
</template>
<script>
export default {
  name: 'Answer',
  props: {
    answerprop: {
      type: String,
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
    left: calc(100% - 1rem);
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
    padding: 0 1rem 0 0;
    box-sizing: border-box;
        background: rgba(256,256,256,0.7);
  }
</style>