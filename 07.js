const app = new Vue({
  el: "#app",
  data: {
    titulo: "titulo vue",
    fondo: "bg-warning",
    color: false
  },
  methods: {
    mostrarInfo() {
      this.color = true;
    },
    ocultarInfo() {
      this.color = false;
    },
    alternar() {
      this.color ? (this.color = true) : (this.color = false);
    }
  }
});
