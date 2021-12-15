<script lang="ts">
    import { getTimeSincePosted } from '$lib/functions/time';

    export let timestamp: number;
    export let user: string;
    export let nComments: number;

    const timeSincePosted: {time: number, format: string} = getTimeSincePosted(timestamp);
</script>

<section>
    <p>
        Submitted
        <span class="time">
            { timeSincePosted.time } {timeSincePosted.format}{timeSincePosted.time === 1 ? '' : 's'} ago.
        </span>
        by
        <span class="user">
            { user }
        </span>
    </p>
    <p>
        <a href="/">
            { nComments } comment{nComments === 1 ? '' : 's'}
        </a>
    </p>
</section>

<style lang="sass">
    section
        grid-area: sub
        display: flex
        justify-content: space-between
        //          height        width
        padding: $size-small $size-very-large
        color: $color-main-2
        @include drop-shadow
        border-bottom-left-radius: $size-very-large
        border-bottom-right-radius: $size-very-large
        background-color: $color-bg
        z-index: 1


        .time
            color: $color-main-1
        .user
            color: $color-emphasis-2
            font-weight: 600
</style>