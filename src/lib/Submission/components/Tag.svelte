<script lang="ts">
    export let tag: String;
</script>

<section>
    {#if tag}
    <p>{ tag }</p>
    {:else}
    <p>Tagless</p>
    {/if}
</section>

<style lang="sass">
    section
        grid-area: tags
        display: flex
        flex-direction: row-reverse
        position: relative
        top: $size-large
        column-gap: $size-small
        z-index: 3

        p
            color: $color-bg
            padding: $size-small $size-default
            background-color: $color-bg-emphasis
            border-radius: $size-very-large
            font-size: $size-default
            font-weight: 300
</style>