<script lang="ts">
    export let karma;
</script>

<section>
    <img
        src="chevron-up-solid.svg"
        alt="Upvote arrow"
    >
    <h2>
        { karma }
    </h2>
    <img
        src="chevron-down-solid.svg"
        alt="Downvote arrow"
    >
</section>

<style lang="sass">
    section
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: center
        padding: 0 $size-very-large

        img
            width: $size-large
            fill: red

        h2
            font-family: Roboto
</style>