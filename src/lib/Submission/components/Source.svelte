<script lang="ts">
    export let domain: string;
</script>

<section>
    <p>
        <a href="/">
            { domain }
        </a>
    </p>
</section>

<style lang="sass">
    section
        grid-area: link
        display: flex

        p
            color: $color-bg
            @include drop-shadow
            border-bottom-left-radius: $size-very-large
            border-bottom-right-radius: $size-very-large
            padding: $size-small $size-very-large
            background-color: $color-bg-emphasis
            font-weight: 600
</style>