<script lang="ts">
    import HomePage from "$lib/components/HomePage.svelte";
    import Projects from "$lib/components/Projects.svelte";

    let slideId = $state(0);

</script>

<div class="flex flex-col h-full w-full lg:h-screen lg:w-screen">
    <nav class="flex flex-row items-center justify-center w-full pt-5 gap-5 text-text font-semibold text-md">
        <button onclick={() => slideId = 0}>{slideId == 0 ? "< " : ""}HomePage{slideId == 0 ? " >" : ""}</button>
        <button onclick={() => slideId = 1}>{slideId == 1 ? "< " : ""}Projects{slideId == 1 ? " >" : ""}</button>
    </nav>

    <div class="flex flex-row w-full h-full justify-center items-center">

        {#if slideId == 0}
            <HomePage/>
        {:else if slideId == 1}
            <Projects/>
        {/if}

    </div>

</div>