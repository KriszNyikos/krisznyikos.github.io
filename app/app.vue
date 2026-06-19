<script setup>
const { isHu } = useIsHuRoute()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const siteUrl = runtimeConfig.public?.siteUrl || ''
const canonicalHref = siteUrl ? siteUrl.replace(/\/$/, '') + route.path : ''

const title = 'Krisztian Nyikos CV'
const description = 'This is my CV website built with Nuxt 3 and Tailwind CSS. It showcases my skills, experience, and projects in web development.'
const ogImage = 'https://example.com/og-image.jpg'

useHead(() => {
  const lang = isHu.value ? 'hu' : 'en'
  const links = [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
  ]
  if (canonicalHref) links.push({ rel: 'canonical', href: canonicalHref })

  return {
    htmlAttrs: { lang },
    title,
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: links,
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Krisztian Nyikos',
          'url': siteUrl || undefined,
          description
        })
      }
    ]
  }
})
</script>

<template>
  <NuxtPage />
</template>
