import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);

  function loadSavedThemePreference() {
    const savedTheme = localStorage.getItem('app-theme');
    isDark.value = savedTheme === 'dark';
  }

  function toggleTheme() {
    isDark.value = !isDark.value;
    localStorage.setItem('app-theme', isDark.value ? 'dark' : 'light');
  }

  function setTheme(mode: 'light' | 'dark') {
    isDark.value = mode === 'dark';
    localStorage.setItem('app-theme', mode);
  }

  loadSavedThemePreference();

  return {
    isDark,
    toggleTheme,
    setTheme,
  };
});
