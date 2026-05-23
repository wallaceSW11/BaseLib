<template>
  <v-dialog
    v-model="isOpen"
    :max-width="maxWidth"
    :persistent="persistent"
    :content-class="dialogContentClass"
    :fullscreen="fullscreen"
    scrollable
    :z-index="2400"
    @keydown="onDialogKeydown"
  >
    <v-card>
      <v-card-title
        v-if="title"
        class="text-h5 d-flex align-center px-6 pt-6 modal-title"
      >
        <v-icon v-if="titleIcon" class="mr-2">{{ titleIcon }}</v-icon>
        <span>{{ title }}</span>
      </v-card-title>

      <v-card-text class="px-6 pt-4">
        <slot>
          {{ message }}
        </slot>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          v-for="(action, index) in actions"
          :key="index"
          :color="action.color || 'primary'"
          :prepend-icon="action.icon"
          :variant="action.variant || 'text'"
          type="button"
          class="text-none"
          @click="handleAction(action)"
        >
          {{ action.text }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';
import { useTheme } from 'vuetify';

export interface ModalAction {
  text: string;
  icon?: string;
  color?: string;
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  handler?: () => void | Promise<void>;
}

interface Props {
  modelValue: boolean;
  title?: string;
  message?: string;
  maxWidth?: string | number;
  persistent?: boolean;
  actions?: ModalAction[];
  contentClass?: string;
  fullscreen?: boolean;
  titleIcon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  message: '',
  maxWidth: 500,
  persistent: true,
  actions: () => [],
  contentClass: undefined,
  fullscreen: false,
  titleIcon: undefined,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  close: [];
}>();

const theme = useTheme();

const isOpen = ref(props.modelValue);

const dialogThemeClass = computed(() => `v-theme--${theme.global.name.value}`);

const dialogContentClass = computed(() => {
  if (!props.contentClass) return dialogThemeClass.value;

  return `${dialogThemeClass.value} ${props.contentClass}`;
});

watch(
  () => props.modelValue,
  (newVal) => {
    isOpen.value = newVal;
  },
);

watch(isOpen, (newVal) => {
  emit('update:modelValue', newVal);
});

function findCancelAction(): ModalAction | undefined {
  return props.actions.find((a) => a.color === 'secondary' || a.color === 'error');
}

function findPrimaryAction(): ModalAction | undefined {
  return props.actions.find(
    (a) => a.color === 'primary' || (!a.color && props.actions.indexOf(a) === props.actions.length - 1),
  );
}

function isInteractiveElement(target: HTMLElement): boolean {
  return target.tagName === 'TEXTAREA';
}

async function handleAction(action: ModalAction): Promise<void> {
  if (!action.handler) return;

  await action.handler();
}

function onDialogKeydown(e: KeyboardEvent): void {
  if (props.actions.length === 0) return;

  if (e.key === 'Escape') {
    const cancelAction = findCancelAction();

    if (!cancelAction) return;

    e.preventDefault();
    e.stopPropagation();
    handleAction(cancelAction);

    return;
  }

  if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
    const target = e.target as HTMLElement;

    if (isInteractiveElement(target)) return;

    const primaryAction = findPrimaryAction();

    if (!primaryAction) return;

    e.preventDefault();
    e.stopPropagation();
    handleAction(primaryAction);
  }
}

function onGlobalKeydown(e: KeyboardEvent): void {
  if (!isOpen.value || props.actions.length === 0) return;

  if (e.key === 'Escape' && !props.persistent) {
    const cancelAction = findCancelAction();

    if (!cancelAction) return;

    e.preventDefault();
    handleAction(cancelAction);

    return;
  }

  if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
    const target = e.target as HTMLElement;

    if (isInteractiveElement(target)) return;

    const primaryAction = findPrimaryAction();

    if (!primaryAction) return;

    e.preventDefault();
    handleAction(primaryAction);
  }
}

onMounted(() => {
  window.addEventListener('keydown', onGlobalKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onGlobalKeydown);
});
</script>

<style scoped>
.modal-title {
  word-break: break-word;
  white-space: normal;
}
</style>

<style>
.v-overlay-container .v-menu > .v-overlay__content,
.v-overlay-container .v-select__content,
.v-overlay-container .v-autocomplete__content {
  z-index: 2500;
}
</style>
