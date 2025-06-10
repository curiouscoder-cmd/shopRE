# Category Images

This directory contains images for product categories.

## Required Images

Place the following images in this directory:

### Electronics
- `Tv.png` - Television image (the TV image you provided should be placed here)
- `fridges.jpg` - Refrigerator image
- `acs.jpg` - Air conditioner image
- `mobiles.jpg` - Mobile phone image
- `fans.jpg` - Fan image
- `lights.jpg` - Lighting image
- `inductions.jpg` - Induction cooktop image

### Furniture
- `almirahs.jpg` - Almirah/wardrobe image
- `beds.jpg` - Bed image
- `tables.jpg` - Table image
- `chairs.jpg` - Chair image
- `dining-sets.jpg` - Dining set image
- `sofa-sets.jpg` - Sofa set image

## Image Requirements

- Format: JPG or PNG
- Recommended size: 800x600 pixels or higher
- Aspect ratio: 4:3 or 16:9 works best
- File size: Under 500KB for optimal loading

## TV Image - READY TO USE! 📺

**IMPORTANT:** The TV image should be saved as `Tv.png` in this directory.

Your TV image (showing two televisions - one with mountain landscape, one with golf course) should be saved as `Tv.png` in this directory.

**Where it will appear:**
1. ✅ **Home page** - Product Categories section (Electronics grid)
2. ✅ **Products page** - Electronics section (Beautiful card with hover effects)
3. ✅ **TV Category page** - Hero section (Large banner with overlay text)

**Current Status:**
- ✅ All components updated and error-free
- ✅ Client Components created for proper image handling
- ✅ Fallback handling implemented
- ✅ Updated to use Tv.png format
- ✅ Pricing removed from all products
- ✅ TV image file (Tv.png) already exists in directory

The components have been updated to display actual images with fallback to placeholder content if images are not found.

## Technical Implementation

The image display is handled by custom Client Components:

1. **CategoryImage** (`src/components/ui/CategoryImage.tsx`) - Used in product category grids
2. **CategoryHeroImage** (`src/components/ui/CategoryHeroImage.tsx`) - Used in individual category page heroes

These components provide:
- Proper error handling for missing images
- Graceful fallbacks with appropriate icons and styling
- Client-side interactivity while maintaining server-side rendering compatibility
- Responsive design and hover effects

## Error Fixed

The previous "Event handlers cannot be passed to Client Component props" error has been resolved by creating dedicated Client Components for image handling instead of using inline event handlers in Server Components.
