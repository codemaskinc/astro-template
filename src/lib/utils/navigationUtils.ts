export const cleanup = (fn: VoidFunction) => {
    document.addEventListener('astro:after-swap', fn, { once: true })
}
