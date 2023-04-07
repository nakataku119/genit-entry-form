<template>
  <Header />
  <div style="height: 2em"></div>
  <EntryForm v-on:notification="handleEvent" />
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import EntryForm from "@/components/EntryForm.vue";
import { PostUserInformation } from "@/firebase/firestore";
import { UserInformation } from "@/classes/UserInformation";
import router from "@/router";
const handleEvent = (value: UserInformation) => {
  PostUserInformation.postUserInformation(value);
  router.push("/end");
};
</script>
