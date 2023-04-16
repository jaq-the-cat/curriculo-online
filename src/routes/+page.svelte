<script lang="ts">
  import { say } from '$lib/i18n';

  const age = (new Date().getFullYear()) - 2005;
</script>

<main>
    <section>
      <h1>{$say("about.summary.title")}</h1>
      <p>
        <span class="tab"></span>{$say("about.summary", { age })}
      </p>
    </section>

    <section>
      <h1>{$say("about.education.title")}</h1>
      <p>
        <span class="tab"></span>{$say("about.education")}
      </p>
    </section>
  
    <section>
      <h1>{$say("about.autism.title")}</h1>
      <p>
        <span class="tab"></span>{$say("about.autism")}
      </p>
    </section>
</main>

<style lang="scss">
  .tab {
    width: 2ch;
    display: inline-block;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;
      font-size: 22pt;
    }

    h1:before, h1:after{
      content: "";
      flex: 1 1;
      border-bottom: 1px solid;
      margin: auto;
    }

    h1:before {
      margin-right: 10px
    }

    h1:after {
      margin-left: 10px
    }

    p {
      margin: 0 0 2ch;
      font-size: 16pt;
      max-width: 70ch;
      text-align: justify;
    }
  }
</style>
