import Vue from 'vue'

if (!Vue.login) {
  Vue.login = true
  Vue.mixin({
    data() {
      return {
        recognition: null,
        isRecording: false
      }
    },
    methods: {
      buildLoginRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

        this.recognition = new SpeechRecognition()
        this.recognition.lang = 'nl-NL'
        this.recognition.continuous = false
        this.recognition.interimResults = false
        this.recognition.maxAlternatives = 2
    
        this.recognition.addEventListener('result', this.loginOnResult)
        this.recognition.addEventListener('speechend', this.loginOnUserSpeechEnd)
      },
      loginOnUserSpeechEnd() {
        this.recognition.stop()
        this.isRecording = false
      },
      loginStartSpeech() {
        this.isRecording = true
        this.recognition.start()
      },
      loginOnResult(event) {
        this.recognition.stop()
        this.isRecording = false
        const speechResult = event.results[0][0].transcript.toLowerCase()

        if (speechResult === this.password) {
					document.body.style.background = '#C3E6CF'
        } else {
					document.body.style.background = '#FFD2D2'
        }
  
        console.log(speechResult)
        console.log('Confidence: ' + event.results[0][0].confidence)
      },
    }
  })
}