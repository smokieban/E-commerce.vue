<template>
  <footer class="container-fluid bg-dark text-secondary mt-5 pt-5">
    <div class="row px-xl-5 pt-5">
      <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <h5 class="text-secondary text-uppercase mb-4">Get In Touch</h5>
        <p class="mb-4">
          No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no
        </p>
        <p class="mb-2">
          <i class="bi bi-geo-alt-fill text-primary mr-3"></i>{{ contactInfo.address }}
        </p>
        <p class="mb-2">
          <i class="bi bi-envelope-fill text-primary mr-3"></i>{{ contactInfo.email }}
        </p>
        <p class="mb-0">
          <i class="bi bi-telephone-fill text-primary mr-3"></i>{{ contactInfo.phone }}
        </p>
      </div>
      <div class="col-lg-8 col-md-12">
        <div class="row">
          <QuickLinks
              v-for="(section, index) in quickLinks"
              :key="index"
              :title="section.title"
              :links="section.links"
          />
          <div class="col-md-4 mb-5">
            <h5 class="text-secondary text-uppercase mb-4">Newsletter</h5>
            <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <form @submit.prevent="subscribeToNewsletter">
              <div class="input-group">
                <input
                    type="email"
                    v-model="newsletterEmail"
                    class="form-control"
                    placeholder="Your Email Address"
                />
                <div class="input-group-append">
                  <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
              </div>
            </form>
            <h6 class="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
            <div class="d-flex">
              <a
                  v-for="(icon, index) in socialLinks"
                  :key="index"
                  :href="icon.url"
                  class="btn btn-primary btn-square mr-2"
              >
                <i :class="icon.class"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="row border-top mx-xl-5 py-4"
        style="border-color: rgba(256, 256, 256, .1) !important;"
    >
      <div class="col-md-6 px-xl-0">
        <p class="mb-md-0 text-center text-md-left text-secondary">
          &copy;
          <a class="text-primary" href="#">Domain</a>. All Rights Reserved. Designed by
          <a class="text-primary" href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>
      <div class="col-md-6 px-xl-0 text-center text-md-right">
        <img class="img-fluid" src="@/assets/images/payments.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script>
import QuickLinks from "@/components/QuickLinks.vue";


export default {
  name: "Footer",
  components: { QuickLinks },
  data() {
    return {
      contactInfo: {
        address: "123 Street, New York, USA",
        email: "info@example.com",
        phone: "+012 345 67890",
      },
      quickLinks: [
        {
          title: "Quick Shop",
          links: [
            { text: "Home", url: "#" },
            { text: "Our Shop", url: "#" },
            { text: "Shop Detail", url: "#" },
            { text: "Shopping Cart", url: "#" },
            { text: "Checkout", url: "#" },
            { text: "Contact Us", url: "#" },
          ],
        },
        {
          title: "My Account",
          links: [
            { text: "Home", url: "#" },
            { text: "Our Shop", url: "#" },
            { text: "Shop Detail", url: "#" },
            { text: "Shopping Cart", url: "#" },
            { text: "Checkout", url: "#" },
            { text: "Contact Us", url: "#" },
          ],
        },
      ],
      socialLinks: [
        { class: "bi bi-twitter", url: "#" },
        { class: "bi bi-facebook", url: "#" },
        { class: "bi bi-linkedin", url: "#" },
        { class: "bi bi-instagram", url: "#" },
      ],
      newsletterEmail: "",
    };
  },
  methods: {
    subscribeToNewsletter() {
      if (this.newsletterEmail) {
        alert(`Thank you for subscribing with ${this.newsletterEmail}`);
        this.newsletterEmail = "";
      }
    },
  },
};
</script>
<style>
/* Ensure the full height of the page */
html, body {
  height: 100%;
  margin: 0;
}

/* Set the app to be a flex container */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

/* Push footer to the bottom of the page */
footer {
  margin-top: auto;
}
</style>
