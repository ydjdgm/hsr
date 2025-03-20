<script>
    import { Globe } from "lucide-svelte";
</script>

<div class="dropdown dropdown-top dropdown-start btn btn-square btn-ghost">
    <div tabindex="0" role="button" class="btn btn-square btn-ghost">
        <Globe />
    </div>
    <ul
        tabindex="-1"
        class="dropdown-content menu bg-base-100 rounded-box z-1 w-26 p-2 shadow-sm"
    >
        <li><button>English</button></li>
        <li><button>한국어</button></li>
    </ul>
</div>
