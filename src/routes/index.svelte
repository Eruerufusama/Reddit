<script lang="ts">
    import { FetchReddit } from '$lib/functions/FetchData';
    import Submission from '$lib/Submission/Submission.svelte';
    
    const PromiseToFetchDataFromReddit = FetchReddit('pathofexile');
</script>

{#await PromiseToFetchDataFromReddit }

    <h1>
        Constructing additional pylons...
    </h1>

{:then data }

    {#each data as post, i}
        <Submission
            data={post.data}
            delay={i * 25}
        />
    {/each}

{/await}

<style lang="sass">
    h1
        color: white
</style>