<script>
    import { t } from "svelte-i18n";
    import Typewriter from "svelte-typewriter";

    const words = ["Hello Svelte", "Hello World", "Hello Universe"];
</script>

<h1 class="text-[50px] flex">
    Honkai:Star
    <Typewriter
        interval={100}
        mode="loopOnce"
        delay={2000}
        wordInterval={1500}
    >
        <span>Gay</span>
        <span>rail Wiki</span>
    </Typewriter>
</h1>

<iframe title="DDUDDA" src={$t("SHIN CHANG SUB")}></iframe>
