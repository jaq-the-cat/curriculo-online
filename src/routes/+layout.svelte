<script lang="ts">
  import { say, locale, locales } from '$lib/i18n';
  import logo from "$lib/assets/jaque_256.png";
  import { page } from '$app/stores';
</script>

<nav>
  <ul>
    <img src={logo} width=64 alt="Logo">
    <li>
      <a class:selected={$page.url.pathname == "/"} href="/">{ $say("nav.aboutme") }</a>
    </li>
    <li>
      <a class:selected={$page.url.pathname == "/projects"}  href="/projects">{ $say("nav.projects") }</a>
    </li>
  </ul>
  <select bind:value={$locale}>
    {#each locales as l}
      <option value={l}>{l.toUpperCase()}</option>
    {/each}
  </select>
</nav>

<slot/>


<style lang="scss">
  nav {
    * {
      font-family: 'Montserrat';
    }
    background-color: $black;
    font-size: 20pt;
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;

    img {
      border: 3px solid $orange;
      border-radius: 100%;
    }

    ul {
      display: flex;
      align-items: center;
      column-gap: 15px;
      padding: 0;
      margin: 0;
      li {
        display: inline-block;
        a {
          color: $inactive-orange;
          border: 1px solid transparent;
        }
      }
    }

    select {
      padding: 5px;
      border: 1px solid $orange;
      background-color: $black;
      color: $white;
      font-size: 22pt;
    }

    .selected {
      color: $orange;
    }
  }
</style>
