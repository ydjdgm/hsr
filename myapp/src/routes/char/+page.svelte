<script lang="ts">
    import { t } from "svelte-i18n";
    import { onMount } from "svelte";
    import type { ApiResponse, CharacterData, Character } from "$lib/types";

    let res_json_data_list: Character[] = [];

    onMount(async () => {
        try {
            const res = await fetch("api/char", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({}),
            });
            if (!res.ok) {
                throw new Error(`Failed to fetch: ${res.status}`);
            }
            console.log("api call success");
            res_json_data_list = await res.json();
            console.log("characters:", res_json_data_list[1]);
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    });
</script>

<h1 class="">{$t("char")}</h1>
{#if res_json_data_list.length > 0}
    <ul class="charGrid">
        {#each Object.entries(res_json_data_list) as [entry_page_id, char]}
            <li>
                <img src={char.icon_url} alt={char.name} />
            </li>
        {/each}
    </ul>
{:else}
    <p>Loading...</p>
{/if}
