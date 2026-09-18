# Brand assets

Original transparent PNG logos, 800 × 187 pixels. Files are preserved unchanged.
Names describe the intended background, not the color of the lettering:

- `logo-on-light.png`: dark lettering for light backgrounds (originally `majidtp-dark-logo.png`).
- `logo-on-dark.png`: light lettering for dark backgrounds (originally `majidtp-light-logo.png`).

Use `/images/brand/logo-on-light.png` and `/images/brand/logo-on-dark.png` as
public URLs. Render with `next/image`, width 800 and height 187 to preserve
the aspect ratio; set an appropriate `sizes` value for the displayed width.
Do not invert the images with CSS, as that changes the yellow brand accent.

## Navigation marks

- `mark-on-light.png`: dark symbol (originally `majidtp-box-dark.png`).
- `mark-on-dark.png`: light symbol (originally `majidtp-box-light.png`).

Original transparent PNG files, 279 × 187 pixels, preserved unchanged. The
shared header renders them at 60px wide (52px on mobile) with `next/image`.
