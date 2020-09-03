<template>
  <div>
    <Chat
      v-if="visible"
      :participants="participants"
      :myself="myself"
      :messages="messages"
      :chat-title="chatTitle"
      :placeholder="placeholder"
      :send-images="false"
      :colors="colors"
      :border-style="borderStyle"
      :hide-close-button="hideCloseButton"
      :scroll-bottom="scrollBottom"
      @onMessageSubmit="onMessageSubmit"
    />
  </div>
</template>

<script>
import { Chat } from 'vue-quick-chat'
import 'vue-quick-chat/dist/vue-quick-chat.css'

export default {
  name: 'liveChat',
  components: {
    Chat
  },
  data () {
    return {
      visible: true,
      hideCloseButton: true,
      messages: [],
      chatTitle: 'Live Chat',
      placeholder: 'send your message',
      participants: [
        {
          name: 'Chat Bot',
          id: 1
        }
      ],
      myself: {
        name: 'You',
        id: 2
      },
      colors: {
        header: {
          bg: '#000',
          text: '#fff'
        },
        message: {
          myself: {
            bg: '#000',
            text: '#bdb8b8'
          },
          others: {
            bg: '#bdb8b8',
            text: '#000'
          },
          messagesDisplay: {
            bg: '#f7f3f3'
          }
        },
        submitIcon: '#000',
        submitImageIcon: '#110'
      },
      borderStyle: {
        topLeft: '10px',
        topRight: '10px',
        bottomLeft: '10px',
        bottomRight: '10px'
      },
      toLoad: {
        content: 'Hello My name is Mongkonkawee Tuntipidok.',
        myself: false,
        participantId: 1,
        timestamp: {},
        uploaded: false,
        viewed: false,
        type: 'text'
      },
      scrollBottom: {
        messageSent: true,
        messageReceived: false
      }
    }
  },
  methods: {
    onClose () {
      this.visible = false
    },
    onMessageSubmit (message) {
      this.messages.push(message)
      setTimeout(() => {
        message.uploaded = true
      }, 2000)
      if (message.content.slice(0, 4) === 'Pond') {
        this.messages.push(this.toLoad)
      } else {
        setTimeout(() => {
          this.$store.dispatch('lineMsg')
        }, 1000)
      }
    }
  }
}
</script>
