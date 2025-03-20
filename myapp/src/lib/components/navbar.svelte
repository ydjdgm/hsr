<script>
    import Logo from "./logo.svelte";
    import ThemeBtn from "./themeBtn.svelte";
    import HamburgerBtn from "./hamburgerBtn.svelte";
    import LanguageSelecterBtn from "./lanSelector.svelte";
</script>

<!-- 가로 -->
<div class="sm:hidden navbar bg-base-300 shadow-sm fixed top-0 left-0">
    <Logo />
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li>
                <ThemeBtn />
            </li>
            <li>
                <HamburgerBtn />
            </li>
        </ul>
    </div>
</div>

<!-- 세로 -->
<div
    class="hidden sm:flex flex-col w-64 min-h-screen bg-base-300 shadow-sm fixed top-0 left-0"
>
    <Logo />
    <ul class="menu menu-horizontal px-2 flex-1 absolute bottom-0 left-2">
        <li>
            <ThemeBtn />
        </li>
        <li>
            <LanguageSelecterBtn />
        </li>
    </ul>
</div>
