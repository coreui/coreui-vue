export default{
  id: {
    type: String,
    default: null
  },
  computed: {
    safeId () {
      if(this.id)
        return this.id
      return Math.random().toString(36).replace('0.', '') + (new Date()).getTime().toString(36)
    }
  }
}
