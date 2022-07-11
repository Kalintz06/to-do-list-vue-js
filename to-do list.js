const RootComponent = {
  data() {
    return {
      tache: "",
      liste: [],
      en,
      cours: [],
      terminée: [],
    };
  },
  methods: {
    modifierTache(e) {
      this.tache = e.target.value;
    },

    ajouterTache() {
      this.liste.push(this.tache);
      this.tache = "";
    },
    switchList(e) {
      const index = e.target.dataset(index);
      this.en, cours.push(this.list);
      this.liste.splice(index, 1);
    },
  },
};
Vue.createApp(RootComponent).mount("#app");
