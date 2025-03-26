<script>
    import { t } from "svelte-i18n";
    import Typewriter from "svelte-typewriter";
    import { concurrent, loop } from "svelte-typewriter";

    const words = ["Hello Svelte", "Hello World", "Hello Universe"];
</script>

<h1 class="fixed top-10 left-150">{$t("char")}</h1>
