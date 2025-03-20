<script>
    let { children } = $props();
    import Navbar from "$lib/components/navbar.svelte";
    import Frame from "$lib/components/frame.svelte";
    import "../app.css";
</script>

{@render children()}

<Navbar />