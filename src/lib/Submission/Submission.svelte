<script lang="ts">
    import { fly } from 'svelte/transition';

    import MainSection from "./components/MainSection.svelte";
    import SubSection from "./components/SubSection.svelte";
    import Tag from "./components/Tag.svelte";
    import Source from "./components/Source.svelte";

    export let data: any;
    export let delay: number = 0;

    // Prop-maps
    const mainSection = { title: data.title, karma: data.score };
    const subSection = { user: data.author, nComments: data.num_comments, timestamp: data.created_utc };
    const source = { domain: data.domain };
    const tag = { tag: data.link_flair_text };
</script>

<article
    class="post"
    transition:fly="{{
        x: 1000,
        duration: 400,
        delay
    }}"
>
    <MainSection {...mainSection} />

    <SubSection {...subSection}/>

    <Source {...source} />
    
    <Tag {...tag} />

</article>

<style lang="sass">
    .post
        margin: -$size-default $size-large
        display: grid
        grid-template-columns: 2.5em 2.5em auto auto 2.5em
        grid-template-areas: ". . tags tags ." "main main main main main" ". sub sub link ."
        column-gap: 1em
        width: 100%
</style>