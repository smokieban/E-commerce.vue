<template>
  <div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
      <!-- Categories Sidebar -->
      <div class="col-lg-3 d-none d-lg-block">
        <button
            class="btn d-flex align-items-center justify-content-between bg-primary w-100"
            @click="toggleVerticalNavbar"
            style="height: 65px; padding: 0 30px;"
        >
          <h6 class="text-dark m-0">
            <i class="bi bi-list mr-2"></i>Categories
          </h6>
          <i :class="['bi', isVerticalNavbarOpen ? 'bi-chevron-up' : 'bi-chevron-down', 'text-dark']"></i>
        </button>
        <nav
            v-show="isVerticalNavbarOpen"
            class="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            style="width: calc(100% - 30px); z-index: 999;"
        >
          <div class="navbar-nav w-100">
            <div
                class="nav-item dropdown dropright"
                @mouseenter="openDropdown('dresses')"
                @mouseleave="closeDropdown('dresses')"
            >
              <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  @click.prevent="toggleDropdown('dresses')"
              >
                Dresses
                <i
                    :class="['bi', isDressesDropdownOpen ? 'bi-chevron-down' : 'bi-chevron-right', 'float-right mt-1']"
                ></i>
              </a>
              <!-- Use v-show for dropdown visibility -->
              <div v-show="isDressesDropdownOpen" class="dropdown-menu position-absolute rounded-0 border-0 m-0">
                <a href="#" class="dropdown-item">Men's Dresses</a>
                <a href="#" class="dropdown-item">Women's Dresses</a>
                <a href="#" class="dropdown-item">Baby's Dresses</a>
              </div>
            </div>
            <a href="#" class="nav-item nav-link">Shirts</a>
            <a href="#" class="nav-item nav-link">Jeans</a>
            <a href="#" class="nav-item nav-link">Swimwear</a>
            <a href="#" class="nav-item nav-link">Sleepwear</a>
            <a href="#" class="nav-item nav-link">Sportswear</a>
            <a href="#" class="nav-item nav-link">Jumpsuits</a>
            <a href="#" class="nav-item nav-link">Blazers</a>
            <a href="#" class="nav-item nav-link">Jackets</a>
            <a href="#" class="nav-item nav-link">Shoes</a>
          </div>
        </nav>
      </div>

      <!-- Main Navbar -->
      <div class="col-lg-9">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
          <div class="navbar-nav mr-auto py-0">
            <router-link
                to="/HomePage.vue"
                class="nav-item nav-link"
                :class="{ active: $route.path === '/HomePage.vue' }"
            >
              Home
            </router-link>
            <router-link
                to="/ShopPage.vue"
                class="nav-item nav-link"
                :class="{ active: $route.path === '/ShopPage.vue' }"
            >
              Shop
            </router-link>
            <a href="detail.html" class="nav-item nav-link">Shop Detail</a>
            <div
                class="nav-item dropdown"
                @mouseenter="openDropdown('pages')"
                @mouseleave="closeDropdown('pages')"
            >
              <a href="#" class="nav-link dropdown-toggle" @click.prevent="toggleDropdown('pages')">
                Pages <i :class="['bi', isPagesDropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down']"></i>
              </a>
              <!-- Use v-show for dropdown visibility -->
              <div v-show="isPagesDropdownOpen" class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                <a href="cart.html" class="dropdown-item">Shopping Cart</a>
                <a href="checkout.html" class="dropdown-item">Checkout</a>
              </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
          </div>
          <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
            <a href="" class="btn px-0">
              <i class="bi bi-heart-fill text-primary"></i>
              <span class="badge text-secondary border border-secondary rounded-circle" style="padding-bottom: 2px; margin-left: 3px;">0</span>
            </a>
            <a href="" class="btn px-0 ml-3">
              <i class="bi bi-cart-fill text-primary"></i>
              <span class="badge text-secondary border border-secondary rounded-circle" style="padding-bottom: 2px;margin-left: 3px;">0</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVerticalNavbarOpen: false,
      isDressesDropdownOpen: false, // Dresses dropdown starts closed
      isNavbarCollapsed: false,
      isPagesDropdownOpen: false, // Pages dropdown starts closed
    };
  },
  methods: {
    toggleVerticalNavbar() {
      this.isVerticalNavbarOpen = !this.isVerticalNavbarOpen;
    },
    toggleDropdown(dropdown) {
      // Toggle dropdown visibility on click
      if (dropdown === "dresses") {
        this.isDressesDropdownOpen = !this.isDressesDropdownOpen;
      } else if (dropdown === "pages") {
        this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
      }
    },
    openDropdown(dropdown) {
      // Open dropdown on hover
      if (dropdown === "dresses" && !this.isDressesDropdownOpen) {
        this.isDressesDropdownOpen = true;
      } else if (dropdown === "pages" && !this.isPagesDropdownOpen) {
        this.isPagesDropdownOpen = true;
      }
    },
    closeDropdown(dropdown) {
      // Close dropdown on hover out
      if (dropdown === "dresses" && this.isDressesDropdownOpen) {
        this.isDressesDropdownOpen = false;
      } else if (dropdown === "pages" && this.isPagesDropdownOpen) {
        this.isPagesDropdownOpen = false;
      }
    },
    toggleNavbarCollapse() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    },
  },
};
</script>

<style scoped>
/* Styling for dropdown toggle button and chevron */
.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

/* If the dropdown is empty, adjust chevron */
.dropdown-toggle:empty::after {
  margin-left: 0;
}

/* Dropdown menu styling */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #6C757D;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: block;
  opacity: 0;
  transition: opacity 0.3s ease-in-out; /* Add smooth transition */
}

/* When dropdown is shown, fade in */
.dropdown-menu[v-show] {
  opacity: 1;
}

/* Hover effect for dropdown */
.nav-item.dropdown:hover .dropdown-menu {
  opacity: 1;
}
</style>






<!--<template>
  <div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
      &lt;!&ndash; Sidebar Menu &ndash;&gt;
      <div class="col-lg-3 d-none d-lg-block">
        <button
            class="btn d-flex align-items-center justify-content-between bg-primary w-100"
            @click="toggleVerticalNavbar"
            style="height: 65px; padding: 0 30px;"
        >
          <h6 class="text-dark m-0">
            <i class="bi bi-list mr-2"></i>Categories
          </h6>
          <i class="bi bi-chevron-down text-dark"></i>
        </button>
        <nav
            v-if="isVerticalNavbarOpen"
            class="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            style="width: calc(100% - 30px); z-index: 999;"
        >
          <div class="navbar-nav w-100">
            <div class="nav-item dropdown dropright">
              <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  @click.prevent="toggleDressesDropdown"
              >
                Dresses <i class="bi bi-chevron-right float-right mt-1"></i>
              </a>
              <div v-if="isDressesDropdownOpen" class="dropdown-menu position-absolute rounded-0 border-0 m-0">
                <a href="#" class="dropdown-item">Men's Dresses</a>
                <a href="#" class="dropdown-item">Women's Dresses</a>
                <a href="#" class="dropdown-item">Baby's Dresses</a>
              </div>
            </div>
            <a href="#" class="nav-item nav-link">Shirts</a>
            <a href="#" class="nav-item nav-link">Jeans</a>
            <a href="#" class="nav-item nav-link">Swimwear</a>
            <a href="#" class="nav-item nav-link">Sleepwear</a>
            <a href="#" class="nav-item nav-link">Sportswear</a>
            <a href="#" class="nav-item nav-link">Jumpsuits</a>
            <a href="#" class="nav-item nav-link">Blazers</a>
            <a href="#" class="nav-item nav-link">Jackets</a>
            <a href="#" class="nav-item nav-link">Shoes</a>
          </div>
        </nav>
      </div>

      &lt;!&ndash; Main Navbar &ndash;&gt;
      <div class="col-lg-9">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
          <a href="#" class="text-decoration-none d-block d-lg-none">
            <span class="h1 text-uppercase text-dark bg-light px-2">Multi</span>
            <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
          </a>
          <button
              type="button"
              class="navbar-toggler"
              @click="toggleNavbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div :class="['collapse navbar-collapse', { show: isNavbarCollapsed }]" id="navbarCollapse">
            <div class="navbar-nav mr-auto py-0">
              <router-link to="/HomePage.vue" class="nav-item nav-link active">Home</router-link>
              <a href="shop.html" class="nav-item nav-link">Shop</a>
              <a href="detail.html" class="nav-item nav-link">Shop Detail</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" @click.prevent="togglePagesDropdown">
                  Pages <i class="fa fa-angle-down mt-1"></i>
                </a>
                <div v-if="isPagesDropdownOpen" class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                  <a href="cart.html" class="dropdown-item">Shopping Cart</a>
                  <a href="checkout.html" class="dropdown-item">Checkout</a>
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
            <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
              <a href="#" class="btn px-0">
                <i class="fas fa-heart text-primary"></i>
                <span class="badge text-secondary border border-secondary rounded-circle" style="padding-bottom: 2px;">0</span>
              </a>
              <a href="#" class="btn px-0 ml-3">
                <i class="fas fa-shopping-cart text-primary"></i>
                <span class="badge text-secondary border border-secondary rounded-circle" style="padding-bottom: 2px;">0</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      isVerticalNavbarOpen: false,
      isDressesDropdownOpen: false,
      isNavbarCollapsed: false,
      isPagesDropdownOpen: false
    };
  },
  methods: {
    addResizeEvent() {
      window.addEventListener("resize", this.toggleNavbarMethod);
      this.toggleNavbarMethod();
    },
    addScrollEvent() {
      window.addEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      const backToTopButton = document.querySelector('.back-to-top');
      if (backToTopButton) {
        if (window.scrollY > 100) {
          backToTopButton.classList.add('show');
        } else {
          backToTopButton.classList.remove('show');
        }
      }
    },
    toggleDressesDropdown() {
      this.isDressesDropdownOpen = !this.isDressesDropdownOpen;
    },
    toggleNavbarCollapse() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    },
    toggleNavbarMethod() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 992) {
        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.addEventListener('mouseover', () => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            dropdownToggle.click();
          });
          dropdown.addEventListener('mouseout', () => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            dropdownToggle.click();
          });
        });
      } else {
        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.removeEventListener('mouseover');
          dropdown.removeEventListener('mouseout');
        });
      }
    },
    togglePagesDropdown() {
      this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
    },
    toggleVerticalNavbar() {
      this.isVerticalNavbarOpen = !this.isVerticalNavbarOpen;
    }
  },
  mounted() {
    this.addScrollEvent();
    this.addResizeEvent();
  },
  name: 'MyComponent'
};
</script>

<style scoped>
/* Add your component-specific styles here */

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  cursor: pointer;
}

.back-to-top.show {
  display: block;
}

</style>-->
<!--

<template>
  <div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
      &lt;!&ndash; Categories Sidebar &ndash;&gt;
      <div class="col-lg-3 d-none d-lg-block">
        <button
            class="btn d-flex align-items-center justify-content-between bg-primary w-100"
            @click="toggleVerticalNavbar"
            style="height: 65px; padding: 0 30px;"
        >
          <h6 class="text-dark m-0">
            <i class="bi bi-list mr-2"></i>Categories
          </h6>
          <i class="bi bi-chevron-down text-dark"></i>
        </button>
        <nav
            v-if="isVerticalNavbarOpen"
            class="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            style="width: calc(100% - 30px); z-index: 999;"
        >
          <div class="navbar-nav w-100">
            <div class="nav-item dropdown dropright">
              <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  @click.prevent="toggleDressesDropdown"
              >
                Dresses <i class="bi bi-chevron-right float-right mt-1"></i>
              </a>
              <div v-if="isDressesDropdownOpen" class="dropdown-menu position-absolute rounded-0 border-0 m-0">
                <a href="#" class="dropdown-item">Men's Dresses</a>
                <a href="#" class="dropdown-item">Women's Dresses</a>
                <a href="#" class="dropdown-item">Baby's Dresses</a>
              </div>
            </div>
            <a href="#" class="nav-item nav-link">Shirts</a>
            <a href="#" class="nav-item nav-link">Jeans</a>
            <a href="#" class="nav-item nav-link">Swimwear</a>
            <a href="#" class="nav-item nav-link">Sleepwear</a>
            <a href="#" class="nav-item nav-link">Sportswear</a>
            <a href="#" class="nav-item nav-link">Jumpsuits</a>
            <a href="#" class="nav-item nav-link">Blazers</a>
            <a href="#" class="nav-item nav-link">Jackets</a>
            <a href="#" class="nav-item nav-link">Shoes</a>
          </div>
        </nav>
      </div>

      &lt;!&ndash; Main Navbar &ndash;&gt;
&lt;!&ndash;      &lt;!&ndash; Main Navbar &ndash;&gt;&ndash;&gt;
      <div class="col-lg-9">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
          <a href="#" class="text-decoration-none d-block d-lg-none">
            <span class="h1 text-uppercase text-dark bg-light px-2">Multi</span>
            <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
          </a>
          <button
              type="button"
              class="navbar-toggler"
              @click="toggleNavbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div :class="['collapse navbar-collapse', { show: isNavbarCollapsed }]" id="navbarCollapse">
            <div class="navbar-nav mr-auto py-0">
              <router-link to="/HomePage.vue" class="nav-item nav-link active">Home</router-link>
              <a href="shop.html" class="nav-item nav-link">Shop</a>
              <a href="detail.html" class="nav-item nav-link">Shop Detail</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" @click.prevent="togglePagesDropdown">
                  Pages <i class="fa fa-angle-down mt-1"></i>
                </a>
                <div v-if="isPagesDropdownOpen" class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                  <a href="cart.html" class="dropdown-item">Shopping Cart</a>
                  <a href="checkout.html" class="dropdown-item">Checkout</a>
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
            <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
              <a href="" class="btn px-0">
                <i class="bi bi-heart-fill text-primary"></i>
                <span
                    class="badge text-secondary border border-secondary rounded-circle"
                    style="padding-bottom: 2px;"
                >0</span
                >
              </a>
              <a href="" class="btn px-0 ml-3">
                <i class="bi bi-cart-fill text-primary"></i>
                <span
                    class="badge text-secondary border border-secondary rounded-circle"
                    style="padding-bottom: 2px;"
                >0</span
                >
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      isVerticalNavbarOpen: false,
      isDressesDropdownOpen: false,
      isNavbarCollapsed: false,
      isPagesDropdownOpen: false
    };
  },
  methods: {
    addResizeEvent() {
      window.addEventListener("resize", this.toggleNavbarMethod);
      this.toggleNavbarMethod();
    },
    addScrollEvent() {
      window.addEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      const backToTopButton = document.querySelector('.back-to-top');
      if (backToTopButton) {
        if (window.scrollY > 100) {
          backToTopButton.classList.add('show');
        } else {
          backToTopButton.classList.remove('show');
        }
      }
    },
    toggleDressesDropdown() {
      this.isDressesDropdownOpen = !this.isDressesDropdownOpen;
    },
    toggleNavbarCollapse() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    },
    toggleNavbarMethod() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 992) {
        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.addEventListener('mouseover', () => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            dropdownToggle.click();
          });
          dropdown.addEventListener('mouseout', () => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            dropdownToggle.click();
          });
        });
      } else {
        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.removeEventListener('mouseover');
          dropdown.removeEventListener('mouseout');
        });
      }
    },
    togglePagesDropdown() {
      this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
    },
    toggleVerticalNavbar() {
      this.isVerticalNavbarOpen = !this.isVerticalNavbarOpen;
    }
  },
  mounted() {
    this.addScrollEvent();
    this.addResizeEvent();
  },
  name: 'MyComponent'
};
</script>

<style scoped>
/* Add your component-specific styles here */

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  cursor: pointer;
}

.back-to-top.show {
  display: block;
}

</style>&ndash;&gt;
-->

<!--<template>
  <div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
      &lt;!&ndash; Sidebar Menu &ndash;&gt;
      <div class="col-lg-3 d-none d-lg-block">
        <button
            class="btn d-flex align-items-center justify-content-between bg-primary w-100"
            @click="toggleVerticalNavbar"
            style="height: 65px; padding: 0 30px;"
        >
          <h6 class="text-dark m-0">
            <i class="bi bi-list mr-2"></i>Categories
          </h6>
          <i class="bi bi-chevron-down text-dark"></i>
        </button>
        <nav
            v-if="isVerticalNavbarOpen"
            class="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            style="width: calc(100% - 30px); z-index: 999;"
        >
          <div class="navbar-nav w-100">
            <div class="nav-item dropdown dropright">
              <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  @click.prevent="toggleDressesDropdown"
              >
                Dresses <i class="bi bi-chevron-right float-right mt-1"></i>
              </a>
              <div v-if="isDressesDropdownOpen" class="dropdown-menu position-absolute rounded-0 border-0 m-0">
                <a href="#" class="dropdown-item">Men's Dresses</a>
                <a href="#" class="dropdown-item">Women's Dresses</a>
                <a href="#" class="dropdown-item">Baby's Dresses</a>
              </div>
            </div>
            <a href="#" class="nav-item nav-link">Shirts</a>
            <a href="#" class="nav-item nav-link">Jeans</a>
            <a href="#" class="nav-item nav-link">Swimwear</a>
            <a href="#" class="nav-item nav-link">Sleepwear</a>
            <a href="#" class="nav-item nav-link">Sportswear</a>
            <a href="#" class="nav-item nav-link">Jumpsuits</a>
            <a href="#" class="nav-item nav-link">Blazers</a>
            <a href="#" class="nav-item nav-link">Jackets</a>
            <a href="#" class="nav-item nav-link">Shoes</a>
          </div>
        </nav>
      </div>

      &lt;!&ndash; Main Navbar &ndash;&gt;
      <div class="col-lg-9">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
          <a href="#" class="text-decoration-none d-block d-lg-none">
            <span class="h1 text-uppercase text-dark bg-light px-2">Multi</span>
            <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
          </a>
          <button
              type="button"
              class="navbar-toggler"
              @click="toggleNavbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div :class="['collapse navbar-collapse', { show: isNavbarCollapsed }]" id="navbarCollapse">
            <div class="navbar-nav mr-auto py-0">
              <router-link to="/HomePage.vue" class="nav-item nav-link active">Home</router-link>
              <a href="shop.html" class="nav-item nav-link">Shop</a>
              <a href="detail.html" class="nav-item nav-link">Shop Detail</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" @click.prevent="togglePagesDropdown">
                  Pages <i class="fa fa-angle-down mt-1"></i>
                </a>
                <div v-if="isPagesDropdownOpen" class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                  <a href="cart.html" class="dropdown-item">Shopping Cart</a>
                  <a href="checkout.html" class="dropdown-item">Checkout</a>
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
            <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
              <a href="#" class="btn px-0">
                <i class="fas fa-heart text-primary"></i>
                <span class="badge text-secondary border border-secondary rounded-circle" style="padding-bottom: 2px;">0</span>
              </a>
              <a href="#" class="btn px-0 ml-3">
                <i class="fas fa-shopping-cart text-primary"></i>
                <span class="badge text-secondary border border-secondary rounded-circle" style="padding-bottom: 2px;">0</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      isVerticalNavbarOpen: false,
      isDressesDropdownOpen: false,
      isNavbarCollapsed: false,
      isPagesDropdownOpen: false
    };
  },
  methods: {
    // Toggles the vertical navbar menu
    addResizeEvent() {
      window.addEventListener("resize", this.toggleNavbarMethod);
      this.toggleNavbarMethod(); // Initialize method on mount
    },
    // Toggles the Dresses dropdown
    addScrollEvent() {
      window.addEventListener("scroll", this.handleScroll);
    },
    // Toggles the main navbar collapse
    handleScroll() {
      const backToTopButton = document.querySelector('.back-to-top');
      if (backToTopButton) {
        if (window.scrollY > 100) {
          backToTopButton.classList.add('show');
        } else {
          backToTopButton.classList.remove('show');
        }
      }
    },
    // Toggles the Pages dropdown
    toggleDressesDropdown() {
      this.isDressesDropdownOpen = !this.isDressesDropdownOpen;
    },
    // Scroll event for the "Back to Top" button
    toggleNavbarCollapse() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    },
    toggleNavbarMethod: function () {
      const windowWidth = window.innerWidth;
      if (windowWidth > 992) {
        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.addEventListener('mouseover', () => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            dropdownToggle.click();
          });
          dropdown.addEventListener('mouseout', () => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            dropdownToggle.click();
          });
        });
      } else {
        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.removeEventListener('mouseover');
          dropdown.removeEventListener('mouseout');
        });
      }
    },
    // Resize event for navbar hover method
    togglePagesDropdown() {
      this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
    },
    toggleVerticalNavbar() {
      this.isVerticalNavbarOpen = !this.isVerticalNavbarOpen;
    }
  },
  mounted() {
    this.addScrollEvent();
    this.addResizeEvent();
  },
  name: 'MyComponent'
};
</script>

<style scoped>
/* Add your component-specific styles here */

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  cursor: pointer;
}

.back-to-top.show {
  display: block;
}

</style>-->
