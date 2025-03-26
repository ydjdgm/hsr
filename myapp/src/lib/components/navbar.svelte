<script>
    import Logo from "./logo.svelte";
    import ThemeBtn from "./themeBtn.svelte";
    import HamburgerBtn from "./hamburgerBtn.svelte";
    import LanguageSelectorBtn from "./lanSelector.svelte";

    const menuItems = [
        { name: "홈", link: "/" },
        { name: "캐릭터", link: "/characters" },
        { name: "광추", link: "/light-cones" },
        { name: "유물", link: "/relics" },
    ];
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
    <ul class = "menu menu-vertical flex-1 absolute top-10 left-0">
        {#each menuItems as item}
            <li class="w-64">
                <a href={item.link} class="">{item.name}</a>
            </li>
        {/each}
    </ul>
    <ul class="menu menu-horizontal px-2 flex-1 absolute bottom-0 left-2">
        <li>
            <ThemeBtn />
        </li>
        <li>
            <LanguageSelectorBtn />
        </li>
    </ul>
</div>
