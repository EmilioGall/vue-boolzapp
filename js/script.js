/////Luxon///////////////////////////////////

const dt = luxon.DateTime;

const now1 = dt.now()

// console.log(now);

// console.log(now.setLocale('it').toLocaleString(dt.DATE_HUGE));

// console.log(now.setLocale('it').toLocaleString(dt.TIME_SIMPLE));

// console.log(now.setLocale('it').toLocaleString(dt.DATE_SHORT));

// console.log(now.setLocale('it').toLocaleString(dt.TIME_WITH_SECONDS));

// console.log(`${now1.setLocale('it').toLocaleString(dt.DATE_SHORT)} ${now1.setLocale('it').toLocaleString(dt.TIME_WITH_SECONDS)}`);

// const dateString = "10/01/2020 15:30:55";

// const dateLuxon = dt.fromFormat(dateString, "dd/MM/yyyy TT")

// console.log("data Luxon", dateLuxon);


/////VueJS///////////////////////////////////
const { createApp } = Vue;

createApp({

   data() {

      return {

         activeIndex: 0,

         newMessageText: "",

         newMessageBox: {},

         autoResponse: null,

         profileSearchText: "",

         showSendButton: false,

         optionsDropdown: false,

         contacts: [

            {
               name: 'Michele',

               avatar: '_1',

               visible: true,

               messages: [

                  {
                     date: '10/01/2020 15:30:55',

                     message: 'Hai portato a spasso il cane?',

                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Ricordati di stendere i panni',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 16:15:22',

                     message: 'Tutto fatto!',

                     status: 'received'
                  }

               ],
            },
            {
               name: 'Fabio',
               avatar: '_2',
               visible: true,
               messages: [
                  {
                     date: '20/03/2020 16:30:00',
                     message: 'Ciao come stai?',
                     status: 'sent'
                  },
                  {
                     date: '20/03/2020 16:30:55',
                     message: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received'
                  },
                  {
                     date: '20/03/2020 16:35:00',
                     message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'sent'
                  }
               ],
            },
            {
               name: 'Samuele',
               avatar: '_3',
               visible: true,
               messages: [
                  {
                     date: '28/03/2020 10:10:40',
                     message: 'La Marianna va in campagna',
                     status: 'received'
                  },
                  {
                     date: '28/03/2020 10:20:10',
                     message: 'Sicuro di non aver sbagliato chat?',
                     status: 'sent'
                  },
                  {
                     date: '28/03/2020 16:15:22',
                     message: 'Ah scusa!',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Alessandro B.',
               avatar: '_4',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Lo sai che ha aperto una nuova pizzeria?',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Si, ma preferirei andare al cinema',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Alessandro L.',
               avatar: '_5',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ricordati di chiamare la nonna',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Va bene, stasera la sento',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Claudia',
               avatar: '_6',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ciao Claudia, hai novità?',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Non ancora',
                     status: 'received'
                  },
                  {
                     date: '10/01/2020 15:51:00',
                     message: 'Nessuna nuova, buona nuova',
                     status: 'sent'
                  }
               ],
            },
            {
               name: 'Federico',
               avatar: '_7',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Fai gli auguri a Martina che è il suo compleanno!',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'Grazie per avermelo ricordato, le scrivo subito!',
                     status: 'received'
                  }
               ],
            },
            {
               name: 'Davide',
               avatar: '_8',
               visible: true,
               messages: [
                  {
                     date: '10/01/2020 15:30:55',
                     message: 'Ciao, andiamo a mangiare la pizza stasera?',
                     status: 'received'
                  },
                  {
                     date: '10/01/2020 15:50:00',
                     message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                     status: 'sent'
                  },
                  {
                     date: '10/01/2020 15:51:00',
                     message: 'OK!!',
                     status: 'received'
                  }
               ],
            }
         ],

         randomAnswers: [

            "Bene, grazie. Tu?",
            "Anche io.",
            "Wow!",
            "Non penso proprio",
            "Va bene."

         ],

      };

   },

   created() {

      //
   },

   computed: {

      filteredContacts() {

         if (this.profileSearchText === "") {

            // console.log("empty input");

            return this.contacts;

         } else {

            // console.log("good input");

            return this.contacts.filter(profiles =>
            profiles.name.toLowerCase().includes(this.profileSearchText.toLowerCase()));

         };

      },

      messageBoxCheck() {

         if(this.newMessageText === "") {

            return this.showSendButton = false;

         } else {

            return this.showSendButton = true;

         };
 
      },

   },

   methods: {

      addMessageBox: function(){

         // console.log("clicked");

         if (this.newMessageText !== "") {

            const nowDate = dt.now()

            console.log("nowDate", nowDate, typeof nowDate);

            this.newMessageBox = {

               date: `${nowDate.setLocale('it').toLocaleString(dt.DATE_SHORT)} ${nowDate.setLocale('it').toLocaleString(dt.TIME_WITH_SECONDS)}`,

               message: this.newMessageText,

               status: 'sent',

            };

            console.log("this.newMessageBox", this.newMessageBox, typeof newMessageBox);

            console.log(this.simpleDate(this.newMessageBox.date));

            this.filteredContacts[this.activeIndex].messages.push(this.newMessageBox);

            this.setAnswer();

            this.newMessageText = "";
            
         };

      },

      getRandomIntInclusive: function(min, max) {

         const minCeiled = Math.ceil(min);

         const maxFloored = Math.floor(max);

         return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

      },
       

      setAnswer: function(){

         this.autoResponse = setTimeout(()=> {

            const nowDate = dt.now()

            const answerIndex = this.getRandomIntInclusive(0, this.randomAnswers.length-1)

            console.log("answerIndex", answerIndex);

            const newResponseBox = {

               date: `${nowDate.setLocale('it').toLocaleString(dt.DATE_SHORT)} ${nowDate.setLocale('it').toLocaleString(dt.TIME_WITH_SECONDS)}`,

               message: this.randomAnswers[answerIndex],

               status: 'received'

            };     

            this.filteredContacts[this.activeIndex].messages.push(newResponseBox);

         }, 1000);

      },

      deleteCurMessageBox: function(curChatIndex){

         // console.log("clicked");

         // console.log("this.chatIndex", curChatIndex);

         this.filteredContacts[this.activeIndex].messages.splice(curChatIndex, 1);

      },

      simpleDate: function(dateToSimplify){

         const dateInLuxon = dt.fromFormat(dateToSimplify, "dd/MM/yyyy TT");

         // console.log("data Luxon", dateInLuxon);

         // console.log(dateInLuxon.setLocale('it').toLocaleString(dt.TIME_SIMPLE));

         return dateInLuxon.setLocale('it').toLocaleString(dt.TIME_SIMPLE);

      },
   
      deleteCurProfileChat: function(){

         // console.log("clicked");

         // console.log("this.chatIndex", curChatIndex);

         this.contacts.splice(this.activeIndex, 1);

      },

      deleteCurProfileChatMessages: function(){

         console.log("clicked");

         // console.log("this.chatIndex", curChatIndex);

         this.filteredContacts[this.activeIndex].messages.splice(0, this.filteredContacts[this.activeIndex].messages.length);

      },

   },

}).mount("#app");