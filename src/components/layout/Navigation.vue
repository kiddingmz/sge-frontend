<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''} size`">
    <div class="logo">
      <img :src="require('@/assets/logo.png')" alt="" />
    </div>

    <h5>SIGE</h5>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu" id="btn-toggle">
        <i class="fa fa-angle-double-right"></i>
      </button>
    </div>

    <hr>

    <h4 class="size">Menu</h4>
    <div class="menu scroll">
      <router-link to="/registration" class="button"
                   v-if="$hasAnyAuthority('STUDENT_VIEW', 'STUDENT_CREATE', 'STUDENT_EDIT', 'STUDENT_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-user-plus"></i>
          <span class="text">Matriculas</span>
        </div>
      </router-link>

      <router-link to="/enrollment" class="button"
                   v-if="$hasAnyAuthority('STUDENT_VIEW', 'STUDENT_CREATE', 'STUDENT_EDIT', 'STUDENT_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-brands fa-readme"></i>
          <span class="text">Inscrições</span>
        </div>
      </router-link>

<!--      <router-link to="/student" class="button"-->
<!--      v-if="$hasAnyAuthority('STUDENT_VIEW', 'STUDENT_CREATE', 'STUDENT_EDIT', 'STUDENT_DELETE')"-->
<!--      >-->
<!--        <div class="d-flex align-items-center justify-content-between aside-item">-->
<!--          <i class="fa fa-solid fa-people-line"></i>-->
<!--          <span class="text">Estudantes</span>-->
<!--        </div>-->
<!--      </router-link>-->

      <router-link to="/teacher" class="button"
      v-if="$hasAnyAuthority('TEACHER_VIEW', 'TEACHER_CREATE', 'TEACHER_EDIT', 'TEACHER_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-chalkboard-user"></i>
          <span class="text">Docentes</span>
        </div>
      </router-link>

      <router-link to="/college" class="button"
                   v-if="$hasAnyAuthority('COURSE_VIEW', 'COURSE_CREATE', 'COURSE_EDIT', 'COURSE_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-building-columns"></i>
          <span class="text">Faculdades</span>
        </div>
      </router-link>

      <router-link to="course" class="button"
      v-if="$hasAnyAuthority('COURSE_VIEW', 'COURSE_CREATE', 'COURSE_EDIT', 'COURSE_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-chalkboard"></i>
          <span class="text">Cursos</span>
        </div>
      </router-link>

      <router-link to="department" class="button"
      v-if="$hasAnyAuthority('DEPARTMENT_VIEW', 'DEPARTMENT_CREATE', 'DEPARTMENT_EDIT', 'DEPARTMENT_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-school"></i>
          <span class="text">Departamentos</span>
        </div>
      </router-link>

      <router-link to="class" class="button"
      v-if="$hasAnyAuthority('CLASS_VIEW', 'CLASS_CREATE', 'CLASS_EDIT', 'CLASS_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-swatchbook"></i>
          <span class="text">Cadeiras</span>
        </div>
      </router-link>

      <router-link to="evaluation" class="button"
      v-if="$hasAnyAuthority('EVALUATION_VIEW', 'EVALUATION_CREATE', 'EVALUATION_EDIT', 'EVALUATION_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-regular fa-file-lines"></i>
          <span class="text">Avaliações</span>
        </div>
      </router-link>

      <router-link to="/catalog" class="button"
       v-if="$hasAnyAuthority('COURSE_VIEW', 'COURSE_CREATE', 'COURSE_EDIT', 'COURSE_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-boxes-stacked"></i>
          <span class="text">Catalogo</span>
        </div>
      </router-link>

      <router-link to="grade" class="button"
      v-if="$hasAnyAuthority('GRADE_VIEW', 'GRADE_CREATE', 'GRADE_EDIT', 'GRADE_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-square-poll-vertical"></i>
          <span class="text">Notas</span>
        </div>
      </router-link>

      <hr>
      <router-link to="role" class="button"
      v-if="$hasAnyAuthority('ROLE_VIEW', 'ROLE_CREATE', 'ROLE_EDIT', 'ROLE_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-user-shield"></i>
          <span class="text">Papel</span>
        </div>
      </router-link>

      <router-link to="user" class="button"
      v-if="$hasAnyAuthority('USER_VIEW', 'USER_CREATE', 'USER_EDIT', 'USER_DELETE')"
      >
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-users-gear"></i>
          <span class="text">Usuario</span>
        </div>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <hr>
      <router-link :to="{ name: 'logout' }" class="button">
        <div class="d-flex align-items-center justify-content-between aside-item">
          <i class="fa fa-solid fa-arrow-right-from-bracket"></i>
          <span class="text">Sair</span>
        </div>
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
.aside-item {
  display: flex;
}

.aside-item .fa {
  display: flex;
  width: 30px;
  align-items: center;
  justify-content: center;
}

.scroll {
  overflow-y: auto;
  overflow-x: hidden;
}

aside {
  position: relative;
  top: 0;
  bottom: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  height: 100vh;
  transition: 0.2s ease-in-out;
  padding: 1.5rem 1rem 1rem;
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
  font-size: 1.3rem;
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
  font-size: 0.8rem;
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
