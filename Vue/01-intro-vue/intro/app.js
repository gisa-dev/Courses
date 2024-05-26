const { createApp, ref } = Vue


const app = createApp({

  setup() {

    const message = ref("I'm Batman")
    const author = ref("Bruce Wayne")


    const changeMessage = () => {

      message.value = "I'm Spiderman"

      author.value = "Peter Parker"

    }

    // setTimeout(() => {

    //   message.value = "I'm Spiderman"

    //   author.value = "Peter Parker"
    // }, 1000);


    return { message, author, changeMessage }
  }

})


app.mount('#myApp')