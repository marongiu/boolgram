

let app = new Vue({
  el: '#root',
  data: {
    profiles: [],
    posts: [],
    skeleton: true,
    like: false,
    allComments: [],
    storiesprofile: null,
    hiddenstory: null,
    next: false


  },

  mounted() {

    const axiosrequest1 = axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles');
    const axiosrequest2 = axios.get('https://flynn.boolean.careers/exercises/api/boolgram/posts');

    // all request
    axios.all([axiosrequest1, axiosrequest2]).then(response => {

      this.profiles = response[0].data;
      this.posts = response[1].data;

          console.log(this.posts);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // hide the skeleton
      this.skeletonTime()
    });

  },


  methods: {
    skeletonTime() {

      setTimeout(() => {
        // hide skeleton
        this.skeleton = false;
        // timeout
      },2000);
    },


    showComment(comment) {

      // comments
      this.allComments = comment;
    },

    showStories(profile) {

      // picture of story
      this.storiesprofile = profile.profile_picture;
      console.log(profile);


    }
  },

  created() {

  }
});
