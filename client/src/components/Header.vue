<template>
  <div class="header">
    <div class="logo">
      <div class="logo__margin logo__margin--top"></div>
      <div class="logo__main">
        <div class="logo__main--container">
          <div>책</div>
        </div>
        <div class="logo__main--container">
          <div>갈</div>
        </div>
        <div class="logo__main--container">
          <div>피</div>
        </div>
      </div>
      <div class="logo__margin logo__margin--bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  height: 5rem;
  font-family: 'Dovemayo-Medium';
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.logo__main,
.logo__main--container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo__margin {
  width: 100%;
  height: 5px;
}
.logo__margin--top {
  border-top: 2px solid rgba(255, 55, 55, 0.9);
}
.logo__margin--bottom {
  border-bottom: 2px solid rgba(255, 55, 55, 0.9);
}
.logo__main {
  border: 1px solid rgba(255, 55, 55, 0.9);
}
.logo__main--container {
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid rgba(255, 55, 55, 0.9);
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
