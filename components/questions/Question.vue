<template>
  <div>
    <div class="questionName">{{question.question}}</div>
  <div class="answers">
    <div v-for="answer in question.answers" :key="answer.id + question.id" class="answer">
      {{answer.answer}}
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name:'Question',
  props: {
    question: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  div {
    background: gray;
  }

  .answers {
    display: grid;
    grid-auto-flow: column;
    gap: 0.5rem 0;
  }

  .answer {
    border: solid 0.1rem var(--border-color);
    border-radius: 0.5rem;
    height: 1.5rem;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .questionName {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>