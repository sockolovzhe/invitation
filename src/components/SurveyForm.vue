<template>
  <h3 class="form-title">Quiz</h3>
  <form @submit.prevent="handleSubmit" class="form">
    <ul class="questions-list">
      <li v-for="question in formQuestions" :key="question.questionId" class="form__item">
        <span class="question-title">{{ question.title }}</span>
        <ul v-if="guestsArray?.length > 1 && question.personal">
          <li v-for="(guestName, index) in guestsArray" :key="index">
            <h4 class="question-guestName">{{ guestNames[guestName] }}:</h4>
            <ul class="choices">
              <li v-for="(choiceText, choiceId) in question.choices" :key="choiceId" class="choices__item">
                <input type="radio" :id="choiceId" :value="choiceText" v-model="form[guestName]" />
                <label :for="choiceId">{{ choiceText }}</label>
              </li>
            </ul>
          </li>
        </ul>
        
        <ul class="choices" v-else>
          <li v-for="(choiceText, choiceId) in question.choices" :key="choiceId" class="choices__item">
            <input type="radio" :id="choiceId" :value="choiceText" v-model="form[question.questionId]" />
            <label :for="choiceId">{{ choiceText }}</label>
          </li>
        </ul>
      </li>
    </ul>

    <div class="form__item">
      <button type="submit" class="submit-btn">Отправить</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { guestNames } from '../data/guestNames'

const route = useRoute()
const currentPath = computed(() => route.params.userId)

const guestsArray = computed(() => currentPath.value?.split('&'))

const WEB3FORMS_ACCESS_KEY = "c6615736-a2db-4026-b0cd-be0f2a4040f1"

const formQuestions = [
  {
    title: 'Сможете ли присутствовать на нашей свадьбе?',
    questionId: 'attending',
    choices: {
      yes: 'С удовольствием придем!',
      no: 'К сожалению, не получится'
    }
  },
  {
    title: 'Хотели бы поздравить нас публично?',
    questionId: 'congratulate',
    choices: {
      yes: 'Публично',
      no: 'Предпочли бы поздравить лично'
    }
  },
  {
    personal: true,
    title: 'Выберите напитки:',
    questionId: 'drinking',
    choices: {
      white: 'Вино белое сухое',
      red: 'Вино белое полусладкое',
      brandy: 'Коньяк',
      nonAlcoholic: 'Безалкогольные напитки'
    }
  }
]

const form = reactive({
  attending: null,
  congratulate: null,
  drinking: null,
})

const handleSubmit = async () => {  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      guestName: currentPath.value,
      ...form
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
}

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');

.form-title {
  margin-top: 50px;
  text-align: center;
  font-family: 'Dancing Script';
  font-size: 8vw;
  color: #023a6d;
  margin-bottom: 5vw;
}

.form {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
  font-family: "Comfortaa", sans-serif;
  font-size: 2vw;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 600px) {
    gap: 3vw;
    width: 90%;
    font-size: 4vw;
  }
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.question-title {
  color: #023a6d;
}

.question-guestName {
  text-align: start;
  margin: 8px 20px;
  font-family: "Caveat", cursive;
  font-size: 3vw;

  @media (max-width: 600px) {
    font-size: 6vw;
  }
}

.form__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.choices {
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-top: 16px;

  &__item {
    display: flex;
    gap: 8px;
    text-align: start;

  }
}

.submit-btn {
  margin-top: 30px;
}
</style>
