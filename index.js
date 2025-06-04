import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";
import express from "express";
import bodyParser from "body-parser";

// === CONFIGURATION ===
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const URL = process.env.URL; // <-- URL public hosting kamu (Railway/Render)

// === INISIALISASI BOT TANPA POLLING ===
const bots = new TelegramBot(BOT_TOKEN);

// === SETUP EXPRESS APP ===
const app = express();
app.use(bodyParser.json());

// === SET WEBHOOK ===
bots.setWebHook(`${URL}/bot${BOT_TOKEN}`);

// === ENDPOINT BUAT TERIMA UPDATE TELEGRAM ===
app.post(`/bot${BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// === ISI PESAN MULTILINE + FORMAT HTML ===
const MESSAGE_1 = `
<b>@Dayyzfh</b>  
Sexy, slim, chindo, mulus (no bulu kaki), fast respons, ngerti banyak fetish, asik, suka direndahin, suka dikeroyok mistress, fetish dikelitikin dan cum control.

<b>@arcyzc</b>  
Femboy, chubby dikit, bisa crossdressing, mulus banget, nurut, gak suka desah/moan (gak mau).

<b>@Aktsukiiiiii</b>  
Mulus, nurut, skinny ✅

<b>@jeanfryu</b>  
Skinny, mulus banget, manly, nurut.

<b>@mvvmvmvmvmv</b>  
Chubby dikit, bisa moan, nurut, agak mulus.

<b>@Rianboy12</b>  
Nurut, pemula, skinny, bawel, mulus.

<b>@vannboy1</b>  
Nurut, mulus, skinny.

<b>@emhhh99</b>  
Skinny, femboy, nurut, moan bagus banget, mulus banget, pengen jadi hewan, pengen di GB, pengen direndahin ✅

<b>@moamoa0909</b>  
Nurut, binal, bawel, agak chubby.

<b>@Bobmasub</b>  
Ms tapi binal dikit, nurut, bawel, skinny, fetish kaki.

<b>@vinchnnn</b>  
Femboy, nurut, bisa moan, agak chubby si Bian.

<b>@jawabencok</b>  
Agak chubby, nurut, mulus, fetish pet, bisa moan.

<b>@wkwkw12345y</b>  
Agak chubby, mulus, nurut, bawel.

<b>@Avocadopurf</b>  
Mulus, nurut, fetish pegging, imut, bisa moan, pet play.

<b>@laminejipar</b>  
Tengil, sexy, mulus aman no lecet panteq, nurut, cum control, skinny.

<b>@Petpetdick</b>  
Fetish digb, direndahin, dihina, disuruh cium pantat dan kentut, cuma bisa coli.

<b>@devilmightcrys</b>  
Cantik, pinggang ramping, putih, fast respons, penurut, royal sama fd-nya.

<b>@aishiterueh</b>  
Obedient msub here! More about me? Slim, skinny, sexy body with little abs and big D🙂‍↔️ More? Pick me!!!
`;

const MESSAGE_2 = MESSAGE_1; // Bisa duplicate atau buat isi beda

/// === FUNCTION KIRIM PESAN ===
function sendTwoMessagesWithDelay() {
  bots.sendMessage(CHAT_ID, MESSAGE_1, { parse_mode: "HTML" });

  setTimeout(() => {
    bots.sendMessage(CHAT_ID, MESSAGE_2, { parse_mode: "HTML" });
  }, 1 * 60 * 1000); // 1 menit
}

// === SCHEDULE KIRIM PESAN SETIAP 1 JAM ===
import schedule from "node-schedule";
schedule.scheduleJob("0 * * * *", () => {
  sendTwoMessagesWithDelay();
});

// === START SERVER ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
