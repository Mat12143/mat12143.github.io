<script lang="ts">
    export let link: string;
    export let icon: string;

    let ariaLabel: string;

    let name = icon
        .replace("icon-[", "")
        .split("--")[1]
        .replace("brand-", "")
        .replace("]", "");
    let capitalLetter = name.charAt(0).toUpperCase();

    let otherPart = name.slice(1, name.length);

    ariaLabel = capitalLetter + otherPart;
</script>

<a href={link} aria-label="Contact me on {ariaLabel}"
    ><span class="{icon} bg-text w-8 h-8 hover:bg-primary"></span></a
>
