module.exports = {
  stories: [
    '../projects/canopy/src/lib/docs/welcome.stories.mdx',
    '../projects/canopy/src/lib/docs/principles/writing.stories.mdx',
    '../projects/canopy/src/lib/docs/foundation/colours/colours.stories.mdx',
    '../projects/canopy/src/lib/docs/foundation/colours/colours.stories.ts',
    '../projects/canopy/src/lib/docs/foundation/typography/typography.stories.mdx',
    '../projects/canopy/src/lib/docs/foundation/typography/typography.stories.ts',
    '../projects/canopy/src/lib/accordion/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/accordion/docs/accordion.stories.ts',
    '../projects/canopy/src/lib/alert/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/alert/docs/alert.stories.ts',
    '../projects/canopy/src/lib/brand-icon/brand-icons.stories.ts',
    '../projects/canopy/src/lib/breadcrumb/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/breadcrumb/docs/breadcrumb.stories.ts',
    '../projects/canopy/src/lib/button/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/button/docs/button.stories.ts',
    '../projects/canopy/src/lib/button/docs/button-group.stories.ts',
    '../projects/canopy/src/lib/card/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/card/docs/card.stories.ts',
    '../projects/canopy/src/lib/carousel/carousel.stories.ts',
    '../projects/canopy/src/lib/data-point/data-point.stories.ts',
    '../projects/canopy/src/lib/details/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/details/docs/details.stories.ts',
    '../projects/canopy/src/lib/feature-toggle/feature-toggle.stories.ts',
    '../projects/canopy/src/lib/filter-container/filter-container.stories.ts',
    '../projects/canopy/src/lib/forms/checkbox-group/checkbox-group.stories.ts',
    '../projects/canopy/src/lib/forms/checkbox-group/filter-group.stories.ts',
    '../projects/canopy/src/lib/forms/date/date-field.stories.ts',
    '../projects/canopy/src/lib/forms/input/input.stories.ts',
    '../projects/canopy/src/lib/forms/docs/filter-buttons/guide.stories.mdx',
    '../projects/canopy/src/lib/forms/docs/filter-buttons/filter-single.stories.ts',
    '../projects/canopy/src/lib/forms/docs/filter-buttons/filter-multiple.stories.ts',
    '../projects/canopy/src/lib/forms/radio/radio.stories.ts',
    '../projects/canopy/src/lib/forms/radio/segment.stories.ts',
    '../projects/canopy/src/lib/forms/select/select.stories.ts',
    '../projects/canopy/src/lib/forms/sort-code/sort-code.stories.ts',
    '../projects/canopy/src/lib/forms/toggle/checkbox.stories.ts',
    '../projects/canopy/src/lib/forms/toggle/switch.stories.ts',
    '../projects/canopy/src/lib/forms/validation/form.stories.ts',
    '../projects/canopy/src/lib/forms/validation/validation.stories.ts',
    '../projects/canopy/src/lib/focus/focus.stories.ts',
    '../projects/canopy/src/lib/footer/footer.stories.ts',
    '../projects/canopy/src/lib/grid/grid.stories.ts',
    '../projects/canopy/src/lib/heading/heading.stories.ts',
    '../projects/canopy/src/lib/header/header.stories.ts',
    '../projects/canopy/src/lib/hero/hero.stories.ts',
    '../projects/canopy/src/lib/hero-img/hero-img.stories.ts',
    '../projects/canopy/src/lib/hide-at/hide-at.stories.ts',
    '../projects/canopy/src/lib/icon/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/icon/docs/icons.stories.ts',
    '../projects/canopy/src/lib/link-menu/link-menu.stories.ts',
    '../projects/canopy/src/lib/modal/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/modal/docs/modal.stories.ts',
    '../projects/canopy/src/lib/page/page.stories.ts',
    '../projects/canopy/src/lib/primary-message/primary-message.stories.ts',
    '../projects/canopy/src/lib/promo-card/promo-card.stories.ts',
    '../projects/canopy/src/lib/quick-action/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/quick-action/docs/quick-action.stories.ts',
    '../projects/canopy/src/lib/separator/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/separator/docs/separator.stories.ts',
    '../projects/canopy/src/lib/shadow/shadow.stories.ts',
    '../projects/canopy/src/lib/show-at/show-at.stories.ts',
    '../projects/canopy/src/lib/side-nav/side-nav.stories.ts',
    '../projects/canopy/src/lib/skeleton/skeleton.stories.ts',
    '../projects/canopy/src/lib/spacing/margin/margin.stories.ts',
    '../projects/canopy/src/lib/spacing/padding/padding.stories.ts',
    '../projects/canopy/src/lib/spacing/row-gap/row-gap.stories.ts',
    '../projects/canopy/src/lib/spinner/docs/guide.stories.mdx',
    '../projects/canopy/src/lib/spinner/docs/spinner.stories.ts',
    '../projects/canopy/src/lib/sr-alert-message/sr-alert-message.stories.ts',
    '../projects/canopy/src/lib/variant/variant.stories.ts',
    '../projects/canopy/src/lib/pipes/camel-case/camel-case.stories.ts',
    '../projects/canopy/src/lib/pipes/kebab-case/kebab-case.stories.ts',
    '../projects/canopy/src/lib/table/table.stories.ts',
    '../projects/canopy/src/lib/tabs/tab-nav-bar.stories.ts',
    '../projects/canopy/src/lib/tabs/tabs.stories.ts',
    '../projects/canopy/src/styles/grid.stories.ts',
    '../projects/canopy/src/styles/links.stories.ts',
    '../projects/canopy/src/styles/mixins.stories.mdx',
    '../projects/canopy/src/styles/spacing.stories.mdx',
    '../projects/canopy/src/styles/utils.stories.mdx',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
  ],
  staticDirs: [
    '../assets/',
    { from: '../assets/fonts/', to: 'assets/fonts' },
  ],
  core: {
    builder: 'webpack5',
    fsCache: true,
  },
};
