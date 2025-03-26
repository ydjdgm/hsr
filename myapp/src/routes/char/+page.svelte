<script>
    import { t } from "svelte-i18n";
    import Typewriter from "svelte-typewriter";
    import { concurrent, loop } from "svelte-typewriter";

    const words = ["Hello Svelte", "Hello World", "Hello Universe"];
</script>

<h1 class="flex text-[50px]">
    Honkai:<Typewriter
        interval={100}
        mode="loopOnce"
        delay={2000}
        wordInterval={1500}
    >
        <h1>Tlqkf좆망겜</h1>
        <h1>Starrail Wiki</h1>
    </Typewriter>
</h1>

<iframe title="DDUDDA" src={$t("SHIN CHANG SUB")}></iframe>
