<script lang="ts">
  import { say } from '$lib/i18n';
  let projects = [
    "ezcats",
    "ezspend",
    "simple-auth",
    "ezmd",
    "gtk-anim",
    "sharekitten",
    "file-crypto-gtk",
    "eztags",
    "eznotes",
  ];
</script>

<main>
  <ul>
    {#each projects as project}
      <li>
        <h3>{project}</h3>
        <a href="https://github.com/jaq-the-cat/{project}">{$say(`projects.${project}`)}</a>
      </li>
    {/each}
  </ul>
</main>

<style lang="scss">
  main {
    min-height: 100%;
    margin: 0;
    padding: 5ch 10ch;
    background-color: $black;
  }

  ul {
    margin: 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: stretch;
    row-gap: 15px;

    li {
      color: $inactive-orange;
      font-size: 16pt;
      border: 1px solid $inactive-orange;
      padding: 10px;
    }

    li:hover {
      color: $orange;
      border-color: $orange;
    }

    h3 {
      font-family: 'Montserrat';
      color: inherit;
      margin: 0;
      padding: 0;
      font-size: 22pt;
    }

    a {
      color: inherit;
    }
  }
</style>
