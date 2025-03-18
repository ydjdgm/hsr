<script>
    import Logo from "./logo.svelte";
    import ThemeBtn from "./themeBtn.svelte";
    import HamburgerBtn from "./hamburgerBtn.svelte";
    import LanguageSelecterBtn from "./languageSelecterBtn.svelte";
</script>

<!-- 가로 -->
<div class="sm:hidden navbar bg-base-100 shadow-sm">
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
<div class="hidden sm:flex flex-col w-64 min-h-screen bg-base-100 shadow-sm">
    <Logo />
    <ul class="menu menu-vertical px-2 flex-1">
        <li>
            <ThemeBtn />
        </li>
        <li>
            <LanguageSelecterBtn />
        </li>
    </ul>
</div>
