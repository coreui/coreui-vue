const hideMobile = {
  methods: {
    hideMobile() {
      if (document.body.classList.contains('sidebar-show')) {
        document.body.classList.toggle('sidebar-show')
      }
    }
  }
}

export { hideMobile }
