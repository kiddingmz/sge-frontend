<template>

  <router-view />
</template>

<style>
:root {
  --primary: #2fb15c;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 200px;
  --light-basic: #EAEAEA;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

  #app {
    height: 100vh;
    width: 100vw;
    background-color: var(--light-basic);
  }

.barra-vertical {
  border-right: 5px solid #4CAF50;
}

.btn-p {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  background-color: var(--primary);
  width: 40px;
  color: white;
}
.btn-p:hover {
  background-color: var(--primary-alt);
}

.size {
  font-size: 0.7rem;
}

</style>