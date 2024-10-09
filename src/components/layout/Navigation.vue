<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
<!--      <img :src="logoURL" alt="" />-->
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu" id="btn-toggle">
        <i class="fa fa-angle-double-right"></i>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <i class="fa fa-users" aria-hidden="true"></i>
        <span class="text">Estudantes</span>
      </router-link>

      <router-link to="/" class="button">
        <i class="fa fa-user" aria-hidden="true"></i>
        <span class="text">Docentes</span>
      </router-link>

      <router-link to="/" class="button">
        <i class="fa fa-book" aria-hidden="true"></i>
        <span class="text">Cursos</span>
      </router-link>

      <router-link to="/" class="button">
        <i class="fa fa-building" aria-hidden="true"></i>
        <span class="text">Departamentos</span>
      </router-link>

      <router-link to="/" class="button">
        <i class="fa fa-newspaper-o" aria-hidden="true"></i>
        <span class="text">Cadeiras</span>
      </router-link>

      <router-link to="/" class="button">
        <i class="fa fa-user-plus" aria-hidden="true"></i>
        <span class="text">Assistentes</span>
      </router-link>

      <router-link to="/" class="button">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <span class="text">Avaliações</span>
      </router-link>

      <router-link to="/" class="button">
        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
        <span class="text">Notas</span>
      </router-link>

    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/settings" class="button">
        <i class="fa fa-sign-out" aria-hidden="true"></i>
        <span class="text">Logout</span>
      </router-link>
    </div>
  </aside>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'NavigationSidebar',
  setup() {
    const is_expanded = ref(false);

    const ToggleMenu = () => {
      is_expanded.value = !is_expanded.value;
      localStorage.setItem("is_expanded", is_expanded.value);
    };

    onMounted(() => {
      is_expanded.value = localStorage.getItem("is_expanded") === "true";
    });

    return {
      is_expanded,
      ToggleMenu
    };
  }
}
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  transition: 0.2s ease-in-out;
  padding: 50px 1rem 1rem;
}
aside .flex {
  flex: 1 1 0%;
}
aside .logo {
  margin-bottom: 1rem;
}
aside .logo img {
  width: 2rem;
}
aside .menu-toggle-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: 0.2s ease-in-out;
}
aside .menu-toggle-wrap .menu-toggle {
  transition: 0.2s ease-in-out;
}
aside .menu-toggle-wrap .menu-toggle .fa {
  font-size: 2rem;
  color: var(--light);
  transition: 0.2s ease-out;
}
aside .menu-toggle-wrap .menu-toggle:hover .fa {
  color: var(--primary);
  transform: translateX(0.5rem);
}
aside h3,
aside .button .text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
aside h3 {
  color: var(--grey);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
aside .menu {
  margin: 0 -1rem;
}
aside .menu .button {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
}
aside .menu .button .fa {
  font-size: 2rem;
  color: var(--light);
  transition: 0.2s ease-in-out;
}
aside .menu .button .text {
  color: var(--light);
  transition: 0.2s ease-in-out;
}
aside .menu .button:hover {
  background-color: var(--dark-alt);
}
aside .menu .button:hover .fa,
aside .menu .button:hover .text {
  color: var(--primary);
}
aside .menu .button.router-link-exact-active {
  background-color: var(--dark-alt);
  border-right: 5px solid var(--primary);
}
aside .menu .button.router-link-exact-active .fa,
aside .menu .button.router-link-exact-active .text {
  color: var(--primary);
}
aside .footer {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
aside .footer p {
  font-size: 0.875rem;
  color: var(--grey);
}
aside.is-expanded {
  width: var(--sidebar-width);
}
aside.is-expanded .menu-toggle-wrap {
  top: -3rem;
}
aside.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(-180deg);
}
aside.is-expanded h3,
aside.is-expanded .button .text {
  opacity: 1;
}
aside.is-expanded .button .fa {
  margin-right: 1rem;
}
aside.is-expanded .footer {
  opacity: 0;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

button > i {
  color: white;
  font-size: 2.5rem;
}

#btn-toggle {
  width: 40px;
  height: 40px;
}

@media (max-width: 1024px) {
  aside {
    position: absolute;
    z-index: 99;
  }
}
</style>
