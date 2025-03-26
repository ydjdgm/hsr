<script>
    import { Globe } from "lucide-svelte";
    import { locale } from 'svelte-i18n';
</script>

<div class="dropdown dropdown-top dropdown-start btn btn-square btn-ghost">
    <div tabindex="0" role="button" class="btn btn-square btn-ghost">
        <Globe />
    </div>
    <ul
        tabindex="-1"
        class="dropdown-content menu bg-base-100 rounded-box z-1 w-26 p-2 shadow-sm"
    >
        <li><button on:click={() => locale.set('en')}>English</button></li>
        <li><button on:click={() => locale.set('ko')}>한국어</button></li>
    </ul>
</div>
