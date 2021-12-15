<script lang="ts">
    let subreddit = '';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">    
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
</svelte:head>
<div>

    <header>
        <form on:submit|preventDefault>
            <h1>/r/</h1>
            <input type="text" bind:value={subreddit} placeholder="all">
            <button type="submit"> Switch subreddit</button>
        </form>
    </header>

    <main>
        <slot />
    </main>

    <aside>
    
    </aside>

</div>

<style lang="sass">

    :global(html, body, h1, h2, h3, h4, h5, h6, p)
        margin: 0
        padding: 0

    :global(html)
        font-family: Roboto
    
    :global(body)
        max-width: 1800px
        background-color: $color-main-1

    :global(h1, h2, h3, h4, h5, h6)
        font-family: 'Roboto Condensed', sans-serif
        font-weight: 400

    :global(h1)
        font-size: $size-very-large
    :global(h2)
        font-size: $size-large
    :global(a)
        text-decoration: none
        color: inherit
    :global(a:visited)
        color: inherit
    :global(p)
        font-size: $size-default

    main
        display: grid
        place-items: center
        padding: $size-very-large

    header
        padding: $size-very-large $size-very-large * 2.5
        background-color: $color-bg
        display: grid
        place-items: center

        form
            display: flex

            input
                border: none
                font-size: $size-large
                border-bottom: 2px solid $color-bg

                &:focus
                    outline: none
                    border-bottom: 2px solid $color-main-1
            h1
                border-bottom: 2px solid $color-bg
</style>