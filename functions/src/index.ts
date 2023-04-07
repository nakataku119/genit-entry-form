import * as functions from "firebase-functions";
import axios from "axios";

exports.createEntry = functions
  .runWith({ secrets: ["SLACK_URL", "SEND_GRID_KEY"] })
  .firestore.document("entries/{entryId}")
  .onCreate((snap) => {
    const userInformation = snap.data();
    const messageArr = [
      "新しい応募を受け付けました。",
      `メールアドレス: ${userInformation.mail}`,
      `名前: ${userInformation.name}`,
      `年齢: ${userInformation.age}`,
      `希望職種: "${userInformation.job}`,
      `お住まい: ${userInformation.address}`,
      `出身高校: ${userInformation.highschool}`,
      `最終学歴: ${userInformation.academicBackground}`,
      `志望動機・音楽経験等、自己アピールを自由に記載してください。:`,
      `${userInformation.pr}`,
      `ご自身の作品のURLを入力してください:`,
      `${userInformation.url}`,
      `ご希望の勤務スタイルを記載してください:`,
      `${userInformation.workStyle}`,
      `その他なにかあれば:`,
      `${userInformation.other}`,
    ];
    axios
      .post(`${process.env.SLACK_URL}`, { text: messageArr.join("\n") })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    const mailData = JSON.stringify({
      personalizations: [{ to: [{ email: `${userInformation.mail}` }] }],
      from: { email: "info@genit.jp", name: "株式会社GENIT" },
      subject: "株式会社GENITへのご応募ありがとうございました",
      content: [
        {
          type: "text/plain",
          value: `${userInformation.name}様\nこの度は株式会社GENITへご応募いただきありがとうございました。\n追って担当者よりご連絡差し上げますので今しばらくお待ち下さい。\n\n株式会社GENIT 応募フォーム確認メール`,
        },
      ],
    });

    axios
      .post("https://api.sendgrid.com/v3/mail/send", mailData, {
        headers: {
          Authorization: `Bearer ${process.env.SEND_GRID_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  });
