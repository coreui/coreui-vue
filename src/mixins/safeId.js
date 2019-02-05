export default{
  computed: {
    safeId () {
      if(this.id || this.$attrs.id)
        return this.id || this.$attrs.id
      return generateSafeId()
    }
  }
}

function generateSafeId () {
  const key = Math.random().toString(36).replace('0.', '') +
              (new Date()).getTime().toString(36)
  return '__safe_id__' + key
}
