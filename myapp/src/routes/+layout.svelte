<script>
    let { children } = $props();
    import Navbar from "$lib/components/navbar.svelte";
    import "../app.css";
    import "$lib/i18n";
    import { waitLocale } from "svelte-i18n";

    let loaded = $state(false);
    waitLocale().then(() => {
        loaded = true;
    });
</script>

{#if loaded}
    <Navbar />
    <main
        class="flex flex-col flex-1 items-center p-10 ml-64 overflow-x-hidden overflow-y-auto"
    >
        {@render children()}
    </main>
{/if}
