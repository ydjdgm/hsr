<script>
    import { t } from "svelte-i18n";
    import Typewriter from "svelte-typewriter";
    import { concurrent, loop } from "svelte-typewriter";

    const words = ["Hello Svelte", "Hello World", "Hello Universe"];
</script>

<h1 class="flex text-[50px]">
    Honkai:Star<Typewriter
        interval={100}
        mode="loopOnce"
        delay={2000}
        wordInterval={1500}
    >
        <h1>Gay</h1>
        <h1>rail</h1>
    </Typewriter>
</h1>

<iframe title="DDUDDA" src={$t("SHIN CHANG SUB")}></iframe>
