# BaseLib Playground

Interactive development and testing environment for the BaseLib component library.

## 🎯 Purpose

The playground provides:
- **Live component testing** - See all components in action
- **Real-time development** - Test changes immediately with Hot Module Replacement (HMR)
- **Example implementations** - Learn how to use each component
- **Theme testing** - Experiment with themes and white-labeling
- **Utility testing** - Try notifications, loading, confirmations, and API calls

## 🚀 Getting Started

### Start the Playground

```bash
# From the root of the BaseLib repository
pnpm dev:playground
```

The playground will start at `http://localhost:5173` (or another available port).

### Build the Playground

```bash
pnpm build:playground
```

Built files will be in `playground/dist/`.

## 📁 Structure

```
playground/
├── src/
│   ├── views/
│   │   ├── HomeView.vue          # Landing page
│   │   └── ComponentsView.vue    # Interactive component showcase
│   ├── plugins/
│   │   ├── i18n.ts              # i18n configuration
│   │   └── vuetify.ts           # Vuetify configuration
│   ├── styles/
│   │   └── main.scss            # Custom styles
│   ├── App.vue                  # Main app component
│   ├── main.ts                  # Entry point
│   └── router.ts                # Vue Router configuration
├── public/
│   └── theme.json               # Example theme configuration
├── index.html                   # HTML template
└── vite.config.ts              # Vite configuration
```

## 🎮 Available Routes

- `/` - Home page with library overview
- `/components` - Interactive component showcase with live examples

## 🎨 Testing Themes

The playground includes an example `public/theme.json` file. You can modify it to test different white-label configurations:

```json
{
  "name": "Custom Theme",
  "version": "1.0.0",
  "logo": {
    "light": "/logo-light.svg",
    "dark": "/logo-dark.svg"
  },
  "colors": {
    "light": {
      "primary": "#1976D2",
      "secondary": "#424242"
    },
    "dark": {
      "primary": "#2196F3",
      "secondary": "#616161"
    }
  },
  "customization": {
    "appName": "My Custom App"
  }
}
```

Changes to `theme.json` will be reflected immediately when you reload the page or toggle the theme.

## 🧪 Testing Components

The playground includes interactive examples for:

### Buttons
- Test all button variants (Primary, Secondary, Tertiary, Quartenary)
- Try different sizes (x-small, small, default, large, x-large)
- Test states (disabled, loading)
- Experiment with custom colors and variants

### Notifications
- Trigger success, error, warning, and info notifications
- See toast behavior with auto-hide
- Test custom messages

### Loading Overlay
- Show full-screen loading states
- Test custom messages and durations

### Confirm Dialog
- Test yes/no confirmation dialogs
- See the returned boolean value

### Theme System
- Toggle between light and dark modes
- View current theme colors
- Force specific theme mode
- Test theme persistence

### Language Selector
- Switch between available languages (pt-BR and en-US)
- See translations update in real-time

### Modal Base
- Open customizable modals
- Test different actions and content

### Icon Tooltips
- Test icon buttons with hover tooltips
- Try as-button mode

### API Client
- Simulate successful API calls
- Simulate API errors
- See automatic loading states and error notifications

## 🔧 Adding New Examples

To add new component examples to the playground:

1. Open `playground/src/views/ComponentsView.vue`
2. Add a new `<v-row>` section within the template
3. Import and use your component
4. Add interactive examples and descriptions

Example:

```vue
<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mb-6">
        <v-card-title class="d-flex align-center">
          <v-icon class="mr-2">mdi-your-icon</v-icon>
          Your Component Name
        </v-card-title>
        <v-card-text>
          <p class="mb-3">Description of your component:</p>
          <YourComponent :prop="value" @event="handler" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { YourComponent } from '@/components'

const handler = () => {
  // Your logic
}
</script>
```

## 💡 Development Tips

1. **Hot Module Replacement (HMR)** - Changes to library components are reflected instantly
2. **Vue DevTools** - Use the browser extension for debugging components and Pinia stores
3. **Console Logging** - Check the browser console for debug information and errors
4. **Theme Events** - Listen to the `theme-changed` custom event for theme updates
5. **LocalStorage** - Theme preference is persisted automatically between sessions
6. **Component Refs** - Required global components (FloatingNotify, LoadingOverlay, ConfirmDialog) are registered in `App.vue`

## 🌐 Testing Internationalization

The playground uses the same i18n configuration as the library. To test translations:

1. Use the Language Selector component in the app bar
2. Switch between pt-BR and en-US
3. See all text update automatically
4. Add new translation keys to test custom messages

To add new locales:
1. Edit `playground/src/plugins/i18n.ts`
2. Add your locale to the messages object
3. Add the locale to the available locales array in `App.vue`

## 📝 Important Notes

- The playground uses the **local source code** of BaseLib via path aliases (`@/`)
- Changes to library components (`src/`) are immediately reflected in the playground
- The playground shares the same dependencies as the library
- No build step is required during development - Vite handles everything
- The playground is NOT published with the library - it's for development only

## 🔗 Related Documentation

- [Main README](../README.md) - Complete library documentation
- [Components](../src/components/) - Component source code
- [Utilities](../src/utils/) - Utility functions source code
- [Stores](../src/stores/) - Pinia stores source code
- [Composables](../src/composables/) - Vue composables source code

## 🚦 Quick Commands

```bash
# Start development server
pnpm dev:playground

# Build for production
pnpm build:playground

# Type check
pnpm vue-tsc --noEmit

# Lint
pnpm lint
```

## 🎯 Best Practices

When using the playground for development:

1. **Test edge cases** - Try extreme values, empty states, and error conditions
2. **Check responsiveness** - Resize the browser window to test mobile layouts
3. **Verify accessibility** - Use keyboard navigation and screen readers
4. **Test theme modes** - Always check both light and dark themes
5. **Validate i18n** - Switch languages to ensure all text is translated
6. **Monitor performance** - Check browser DevTools for performance issues
7. **Document examples** - Add clear descriptions to help other developers

Enjoy developing with BaseLib! 🎉
