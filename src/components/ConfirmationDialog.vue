<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" block v-bind="props"> 送信 </v-btn>
      </template>
      <!-- 必須項目入力時のダイアログ -->
      <v-card
        v-if="userInformation!.mail && userInformation!.name && userInformation!.job"
      >
        <v-card-item>
          <v-card-title>入力内容に間違いはないですか？</v-card-title>
          <v-card-text>
            <v-table height="300px">
              <tbody>
                <tr>
                  <td>希望職種</td>
                  <td>{{ userInformation?.job }}</td>
                </tr>
                <tr>
                  <td>メールアドレス</td>
                  <td>{{ userInformation?.mail }}</td>
                </tr>
                <tr>
                  <td>氏名</td>
                  <td>{{ userInformation?.name }}</td>
                </tr>
                <tr>
                  <td>年齢</td>
                  <td>{{ userInformation?.age }}</td>
                </tr>
                <tr>
                  <td>お住まい</td>
                  <td>{{ userInformation?.address }}</td>
                </tr>
                <tr>
                  <td>出身高校</td>
                  <td>{{ userInformation?.highschool }}</td>
                </tr>
                <tr>
                  <td>最終学歴</td>
                  <td>{{ userInformation?.academicBackground }}</td>
                </tr>
                <tr>
                  <td>
                    志望動機・音楽経験等、<br />
                    自己アピールを自由に記載してください。
                  </td>
                  <td>
                    {{ userInformation?.pr }}
                  </td>
                </tr>
                <tr>
                  <td>ご自身の作品のURLを入力してください</td>
                  <td>{{ userInformation?.url }}</td>
                </tr>
                <tr>
                  <td>ご希望の勤務スタイルを記載してください</td>
                  <td>{{ userInformation?.workStyle }}</td>
                </tr>
                <tr>
                  <td>その他なにかあれば</td>
                  <td>{{ userInformation?.other }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="error" @click="dialog = false" class="ma-4"
              >修正</v-btn
            >
            <v-btn color="primary" @click="$emit('submitPressed')" class="ma-4"
              >送信</v-btn
            >
          </v-card-actions>
        </v-card-item>
      </v-card>
      <!-- 必須項目未入力時のダイアログ -->
      <v-card v-else>
        <v-card-item>
          <v-card-text>
            <p>必須項目を入力してください。</p>
            <ul>
              <li v-if="!userInformation?.mail">メールアドレス</li>
              <li v-if="!userInformation?.name">氏名</li>
              <li v-if="!userInformation?.job">希望職種</li>
            </ul>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="error" @click="dialog = false">修正</v-btn>
          </v-card-actions>
        </v-card-item>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<script setup lang="ts">
import { UserInformation } from "@/classes/UserInformation";
const props = defineProps({
  userInformation: UserInformation,
});
</script>
