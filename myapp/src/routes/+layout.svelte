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
    <main class="flex-1 p-10 pl-50 ml-64">
        {@render children()}
    </main>
{/if}
