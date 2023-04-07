<template>
  <v-card class="text-left" variant="tonal" color="info">
    <v-card-text>
      当社の採用ページをご覧いただきありがとうございます。<br />
      下記フォームに必要事項をご記入の上、ご応募ください。<br />
      書類選考に通過した方のみ、5営業日以内に担当者よりご連絡させていただきます。<br />
      ご提供いただいた個人情報は、選考以外の目的での利用はいたしません。<br />
      <br />
      <a href="https://www.genit.jp/recruit" target="_blank"
        >採用情報・応募要項はこちら</a
      >
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  data() {
    return {
      column: null,
      inline: null,
    };
  },
};
</script>
