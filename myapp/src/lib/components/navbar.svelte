<script>
    import Logo from "./logo.svelte";
    import ThemeBtn from "./themeBtn.svelte";
    import HamburgerBtn from "./hamburgerBtn.svelte";
    import LanguageSelectorBtn from "./lanSelector.svelte";
    import HomeIcon from "./svg/homeIcon.svelte";
    import CharIcon from "./svg/charIcon.svelte";
    import LcIcon from "./svg/lcIcon.svelte";
    import RelIcon from "./svg/relIcon.svelte";
    import { t } from "svelte-i18n";

    const menuItems = [
        { name: "home", icon: HomeIcon, link: "/" },
        { name: "char", icon: CharIcon, link: "/char" },
        { name: "lc", icon: LcIcon, link: "/lc" },
        { name: "rel", icon: RelIcon, link: "/rel" },
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
    class="hidden sm:flex flex-col w-64 min-h-screen bg-base-300 shadow-sm fixed top-0 left-0 overflow-x-hidden overflow-y-auto"
>
    <Logo />
    <ul class="menu menu-vertical flex-1 absolute top-15 left-0 pl-0">
        {#each menuItems as item}
            <li class="w-64">
                <a href={item.link} class="text-[16px] gap-4"
                    ><svelte:component this={item.icon} />{$t(item.name)}</a
                >
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
