<script>
    import { onMount } from "svelte";

    // 기본 테마 상태 (초기값: 다크 모드)
    let theme = "dark";

    // 테마 변경 함수
    function toggleTheme() {
        theme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    onMount(() => {
        // 로컬스토리지에서 테마 가져오기
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            theme = savedTheme;
        } else {
            // OS 기본 테마 확인
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            theme = prefersDark ? "dark" : "light";
        }

        document.documentElement.setAttribute("data-theme", theme);
    });
</script>

<button class="btn btn-square btn-ghost" on:click={toggleTheme}>
    {#if theme === "dark"}
        <!-- 🌙 다크 모드 아이콘 -->
        <svg
            class="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
        </svg>
    {:else}
        <!-- ☀️ 라이트 모드 아이콘 -->
        <svg
            class="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
        </svg>
    {/if}
</button>
