<template>
  <section v-if="currentPath" class="form-wrapper">
    <h3 class="form-title">Quiz</h3>
    <form @submit.prevent="handleSubmit" class="form">
      <ul class="questions-list">
        <li v-for="question in formQuestions" :key="question.questionId" class="form__item">
          <span class="question-title">{{ question.title }}</span>
          <ul v-if="guestsArray?.length > 1 && question.personal" class="personal-list">
            <li v-for="guestName in guestsArray" :key="guestName">
              <h4 class="question-guestName">{{ guestNames[guestName] }}:</h4>
              <ul class="choices">
                <li v-for="(choiceText, choiceId) in question.choices" :key="choiceId" class="choices__item">
                  <input type="radio" :id="`${guestName}-${choiceId}`" :value="choiceText" v-model="form[guestName]" />
                  <label :for="`${guestName}-${choiceId}`">{{ choiceText }}</label>
                </li>
              </ul>
            </li>
          </ul>
          
          <ul class="choices" v-else>
            <li v-for="(choiceText, choiceId) in question.choices" :key="choiceId" class="choices__item">
              <input type="radio" :id="`${question.questionId}-${choiceId}`" :value="choiceText" v-model="form[question.questionId]" />
              <label :for="`${question.questionId}-${choiceId}`">{{ choiceText }}</label>
            </li>
          </ul>
        </li>
      </ul>

      <div v-if="!isFetchSuccessed" class="form__item">
        <div v-if="!isValidated" class="validation-text">Пожалуйста, дайте ответы на все вопросы&#128155;</div>
        <button type="submit" class="submit-btn">
          <span v-if="isFetchLoading">Отправляем...</span>
          <span v-else>Отправить</span>
        </button>
      </div>
      <div v-if="isFetchSuccessed" class="fetch-result-test">Спасибо, мы получили ваши ответы!</div>
      <div v-if="isFetchErrored" class="fetch-result-test error">К сожалению, произошла ошибка при отправке формы, и мы не получили ваши ответы.<br>Попробуйте еще раз или дайте нам знать об этой ситуации!</div>
    </form>

    <img src="../assets/lemon2.png" class="lemon-right">
    <img src="../assets/lemon3.png" class="lemon-left">
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { guestNames } from '../data/guestNames'

const route = useRoute()
const currentPath = computed(() => route.params.userId as string)

const guestsArray = computed(() => currentPath.value?.split('&'))

const isValidated = ref(true)
const isFetchLoading = ref(false)
const isFetchSuccessed = ref(false)
const isFetchErrored = ref(false)

const WEB3FORMS_ACCESS_KEY = "c6615736-a2db-4026-b0cd-be0f2a4040f1"

const formQuestions = [
  {
    title: 'Сможете ли присутствовать на нашей свадьбе?',
    questionId: 'attending',
    choices: {
      yes: 'С удовольствием!',
      no: 'К сожалению, не получится'
    }
  },
  {
    title: 'В каком формате хотели бы поздравить нас?',
    questionId: 'congratulate',
    choices: {
      yes: 'Публично в микрофон',
      no: 'Предпочли бы поздравить лично в перерыве'
    }
  },
  {
    personal: true,
    title: 'Выберите напитки:',
    questionId: 'drinking',
    choices: {
      white: 'Вино белое сухое',
      red: 'Вино белое полусладкое',
      nonAlcoholic: 'Безалкогольные напитки'
    }
  }
]

const form: any = reactive({
  attending: null,
  congratulate: null,
  drinking: null,
})

const formValidation = () => {
  if (
    (!form.attending || !form.congratulate)
    || (guestsArray.value.length < 2 && !form.drinking) 
    || (guestsArray.value.length > 1 && Object.keys(form).length < (3 + guestsArray.value.length))
  ) { 
    isValidated.value = false
    return false
  }
  return true
}

const handleSubmit = async () => {
  const isSuccessValidation = formValidation()
  if (!isSuccessValidation) return
  isValidated.value = true
  isFetchLoading.value = true

  try {
    await fetch("https://api.web3forms.com/submit", {
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
    })

    isFetchSuccessed.value = true
  } catch(error) {
    console.log(error)
    isFetchErrored.value = true
  } finally {
    isFetchLoading.value = false
  }
}

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');

.form-wrapper {
  position: relative;
}

.form-title {
  margin-top: 40px;
  text-align: center;
  font-family: 'Dancing Script';
  font-size: 8vw;
  color: #023a6d;
  margin-bottom: 5vw;

  @media (max-width: 1000px) {
    font-size: 9vw;
  }
  @media (max-width: 600px) {
    font-size: 12vw;
  }
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

  @media (max-width: 1000px) {
    font-size: 2.7vw;
    width: 90%;
  }
  @media (max-width: 800px) {
    font-size: 3vw;
  }
  @media (max-width: 600px) {
    gap: 3vw;
    width: 97%;
    font-size: 4.9vw;
  }
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.question-title {
  color: #023a6d;
  text-align: start;

  @media (max-width: 800px) {
    line-height: 3.6vw;
  }
  @media (max-width: 600px) {
    line-height: 6.5vw;
  }
}

.question-guestName {
  text-align: start;
  margin: 8px 20px;
  font-family: "Caveat", cursive;
  font-size: 3vw;

  @media (max-width: 1000px) {
    font-size: 4vw;
    width: 73%;
  }
  @media (max-width: 800px) {
    font-size: 4.5vw;
  }
  @media (max-width: 600px) {
    font-size: 7.5vw;
  }
}

.form__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.personal-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.choices {
  display: flex;
  gap: 2vw;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 600px) {
    gap: 5vw;
    padding-left: 14px;
  }

  &__item {
    display: flex;
    gap: 8px;
    text-align: start;

    @media (max-width: 800px) {
      line-height: 3.6vw;
    }
    @media (max-width: 600px) {
      line-height: 6.5vw;
    }

    label {
      cursor: pointer;
    }
  }
}

input[type="radio"] {
  cursor: pointer;
  position: relative;
  margin: auto 0;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    background-color: transparent;
    display: block;
    border-radius: 50%;
    transition: background-color 0.3s;
    margin: auto;
  }

  &:checked::after {
    min-width: 28px;
    min-height: 28px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><text y="20" font-size="20">🍋</text></svg>');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}

.submit-btn {
  font-family: "Comfortaa", sans-serif;
  margin: 30px auto;
  width: 20vw;
  height: 5vw;
  border: none;
  color: #023a6d;
  background-color: #c2d7eb;
  cursor: pointer;
  font-size: 2vw;

  @media (max-width: 1000px) {
    width: 27vw;
    height: 6.5vw;
    font-size: 2.7vw;
  }
  @media (max-width: 800px) {
    width: 29vw;
    height: 7.3vw;
    font-size: 3vw;
  }
  @media (max-width: 600px) {
    width: 40vw;
    height: 7vh;
    font-size: 4vw;
  }
  
  span {
    font-weight: 700;
  }
}

.validation-text {
  margin-top: 20px;
  font-size: 20px;
}

.fetch-result-test {
  margin: 30px auto;
  color: #023a6d;
  font-weight: 600;

  &.error {
    color: rgb(243, 24, 24);
    margin-top: 0;
  }
}

.lemon-right {
  position: absolute;
  right: -200px;
  top: 10%;

  @media (max-width: 1000px) {
    width: 50%;
    top: 20%;
    right: -250px;
  }
  @media (max-width: 800px) {
    width: 50%;
    top: 30%;
    right: -150px;
  }
  @media (max-width: 600px) {
    top: 35%;
    right: -200px;
  }
  @media (max-width: 500px) {
    right: -150px;
  }
  @media (max-width: 400px) {
    right: -100px;
  }
}

.lemon-left {
  position: absolute;
  bottom: -330px;
  left: -300px;

  @media (max-width: 1750px) {
    left: -400px;
  }
  @media (max-width: 1200px) {
    left: -500px;
  }
  @media (max-width: 1000px) {
    width: 40%;
    left: -250px;
    bottom: -220px;
  }
  @media (max-width: 800px) {
    bottom: -180px;
    left: -200px;
  }
  @media (max-width: 600px) {
    bottom: -150px;
    left: -160px;
  }
  @media (max-width: 500px) {
    bottom: -140px;
    left: -100px;
  }
  @media (max-width: 400px) {
    bottom: -100px;
    left: -80px;
  }
}
</style>
