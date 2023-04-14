<script lang="ts">
  import { t, locale, locales } from '$lib/i18n';
</script>

<nav>
  <a href="/">{ $t("nav.aboutme") }</a>
  <a href="/projects">{ $t("nav.projects") }</a>
  <select bind:value={$locale}>
    {#each locales as l}
      <option value={l}>{l}</option>
    {/each}
  </select>
</nav>

<slot/>
