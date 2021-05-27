new Vue({
  el: "#app",
  data: {
    show: true,
    headerlinks: [
      {
        text: "Home",
        span: "",
      },
      {
        text: "Who We Are",
        span: "",
      },
      {
        text: "What We Do",
        span: "",
      },
      {
        text: "Where We Work",
        span: "",
      },
      {
        text: "Careers",
        span: "Apply",
      },
      {
        text: "News",
        span: "",
      },
    ],
    footerlinks: [
      {
        text: "Home",
      },
      {
        text: "Who We Are",
      },
      {
        text: "What We Do",
      },
      {
        text: "Where We Work",
      },
      {
        text: "Careers",
      },
      {
        text: "News",
      },
      {
        text: "Get in touch now",
      },
    ],
    imagesList: [
      {
        img: "images/clients_partner_5-200x202.png",
      },
      {
        img: "images/clients_partner_6-200x202.png",
      },
      {
        img: "images/clients_partner_1-200x202.png",
      },
      {
        img: "images/clients_partner_2-200x202.png",
      },
    ],
    clientsList: [
      {
        img: "images/testimonials-2.jpg",
        text: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.",
        name: "Luis Desalvo",
        agency: "CREO TECH",
      },
      {
        img: "images/testimonials-1.jpg",
        text: "All We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.",
        name: "Amanda De Santa",
        agency: "LIFE INVADER",
      },
    ],
    activeClient: 0,
    interval: 0,
  },

  methods: {
    onDotClick(clickedIndex) {
      this.activeClient = clickedIndex;
    },
    changeClient(direction, changedByAI) {
      this.activeClient = this.activeClient + direction;

      if (this.activeClient > this.clientsList.length - 1) {
        this.activeClient = 0;
      }
    },
    play() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.changeClient(+1, true);
      }, 5000);
    },
    pause() {
      clearInterval(this.interval);
    },
  },

  mounted() {
    const elementoHtml = document.querySelector(".client-slider");

    elementoHtml.focus();

    this.play();
  },
});
