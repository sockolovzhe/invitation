<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="form__item">
      <span>Сможете ли вы присутствовать на нашей свадьбе?</span>
      <div>
        <input type="radio" id="yes" value="да" v-model="form.attending" />
        <label for="yes">С удовольствием придем!</label>

        <input type="radio" id="no" value="нет" v-model="form.attending" />
        <label for="no">К сожалению, не получится</label>
      </div>
    </div>

    <div class="form__item">
      <span>Будете ли пить алкоголь?</span>
      <div>
        <input type="radio" id="yes-drink" value="да" v-model="form.drinking" />
        <label for="yes-drink">Да</label>

        <input type="radio" id="no-drink" value="нет" v-model="form.drinking" />
        <label for="no-drink">Нет</label>
      </div>
    </div>

    <div v-if="form.drinking === 'да'" class="form__item">
      <span>Какие вино будете пить: сухое или полусладкое?</span>
      <select v-model="form.wineType">
        <option value="">Выберите тип вина</option>
        <option value="сухое">Сухое</option>
        <option value="полусладкое">Полусладкое</option>
      </select>
    </div>

    <div class="form__item">
      <button type="submit" class="submit-btn">Отправить</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const currentPath = computed(() => route.params.userId)

const WEB3FORMS_ACCESS_KEY = "c6615736-a2db-4026-b0cd-be0f2a4040f1"

const attending = ref('')
const drinking = ref('')
const wine = ref('')

const form = reactive({
  attending: null,
  drinking: null,
  wineType: null
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
.form {
  margin-top: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Comfortaa", sans-serif;
  font-size: 30px;
}

.form__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.submit-btn {

}
</style>
