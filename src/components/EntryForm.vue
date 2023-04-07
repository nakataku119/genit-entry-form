<template>
  <v-text-field
    label="メールアドレス"
    variant="outlined"
    v-model="userInformation.mail"
    :rules="[rules]"
  ></v-text-field>
  <v-text-field
    label="氏名"
    variant="outlined"
    v-model="userInformation.name"
    :rules="[rules]"
  ></v-text-field>
  <v-text-field
    label="年齢"
    variant="outlined"
    v-model="userInformation.age"
    suffix="歳"
    type="number"
  ></v-text-field>
  <v-radio-group
    label="希望職種"
    v-model="userInformation.job"
    column
    :rules="[rules]"
  >
    <v-radio
      label="サウンドディレクター"
      value="サウンドディレクター"
    ></v-radio>
    <v-radio
      label="アプリ開発エンジニア"
      value="アプリ開発エンジニア"
    ></v-radio>
    <v-radio
      label="マーケター・PR・広報"
      value="マーケター・PR・広報"
    ></v-radio>
  </v-radio-group>
  <v-text-field
    label="お住まい（市・区まで）"
    variant="outlined"
    v-model="userInformation.address"
  ></v-text-field>
  <v-text-field
    label="出身高校"
    variant="outlined"
    v-model="userInformation.highschool"
  ></v-text-field>
  <v-text-field
    label="最終学歴"
    variant="outlined"
    v-model="userInformation.academicBackground"
  ></v-text-field>
  <v-textarea
    label="志望動機・音楽経験等、自己アピールを自由に記載してください。"
    variant="outlined"
    v-model="userInformation.pr"
  ></v-textarea>
  <v-textarea
    label="ご自身の作品のURLを入力してください(複数可)"
    variant="outlined"
    v-model="userInformation.url"
  ></v-textarea>
  <v-textarea
    label="ご希望の勤務スタイルを記載してください(週○日、1日○時間、社員希望等)"
    variant="outlined"
    v-model="userInformation.workStyle"
  ></v-textarea>
  <v-textarea
    label="その他なにかあればご記載ください"
    variant="outlined"
    v-model="userInformation.other"
  ></v-textarea>
  <v-row justify="center">
    <ConfirmationDialog
      :user-information="userInformation"
      class="ma-4"
      v-on:submitPressed="$emit('notification', userInformation)"
    />
  </v-row>
</template>

<script setup lang="ts">
import ConfirmationDialog from "./ConfirmationDialog.vue";
import { UserInformation } from "../classes/UserInformation";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const inline = ref(null);
const dialog = ref(false);
const route = useRoute();
const userInformation = ref(
  new UserInformation(route.query.job?.toString() || "")
);

const emits = defineEmits<{
  (e: "notification", value: UserInformation): void;
}>();
const components = { ConfirmationDialog };
const rules = (value: string) => {
  if (value) return true;
  return "必ず入力してください。";
};
</script>
