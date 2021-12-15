<script lang="ts">
    import Voting from "./Voting.svelte";

    export let karma: number = 69;
    export let title: string = "This is the default title. Here is some more text just to fill it out some more to match component size..........................."
</script>

<section class="body">
    <Voting bind:karma />
    <h2>{ title.replace('&amp;', '&') }</h2>
</section>

<style lang="sass">
    .body
        grid-area: main
        border-radius: $size-very-small
        padding: $size-default $size-very-large $size-default 0
        display: flex
        align-items: center
        @include drop-shadow
        background-color: white
        z-index: 2

        h2
            margin: $size-default 0 
            padding: 0 0 0 $size-default
            border-left: 2px solid $color-main-3
</style>