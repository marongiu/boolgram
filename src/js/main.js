let app = new Vue({
  el: '#root',
  data: {
    profiles: [],
    skeleton: true
  },

  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
    .then(response => {
      this.profiles = response.data;
      console.log(this.profiles.profile_name);

      setTimeout(() => {
					this.skeleton = false;
				},3000)
    })
  },

  methods: {

  }
})
