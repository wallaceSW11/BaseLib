<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-title class="text-body-1 font-weight-bold">
        Forizi UI — Playground
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-tabs
        v-model="activeTab"
        color="primary"
        grow
      >
        <v-tab value="botoes">Botões</v-tab>
        <v-tab value="inputs">Inputs</v-tab>
        <v-tab value="modal">Modal</v-tab>
        <v-tab value="mensagens">Mensagens</v-tab>
        <v-tab value="layout">Layout</v-tab>
      </v-tabs>

      <v-divider />

      <div style="height: calc(100dvh - 200px); overflow-y: auto;">
        <v-window v-model="activeTab">
        <v-window-item value="botoes" class="pa-6">
          <SectionCard title="FzIconToolTip">
            <template #description>
              Botão icônico com tooltip. Útil para ações rápidas em tabelas e listas.
            </template>

            <div class="text-subtitle-2 mb-2">Variantes de cor</div>

            <div class="d-flex flex-wrap ga-4">
              <FzIconToolTip
                icon="mdi-pencil"
                text="Editar"
                color="primary"
                @click="onClick('Editar')"
              />

              <FzIconToolTip
                icon="mdi-delete"
                text="Excluir"
                color="error"
                @click="onClick('Excluir')"
              />

              <FzIconToolTip
                icon="mdi-content-save"
                text="Salvar"
                color="success"
                @click="onClick('Salvar')"
              />

              <FzIconToolTip
                icon="mdi-download"
                text="Download"
                color="info"
                @click="onClick('Download')"
              />

              <FzIconToolTip
                icon="mdi-cog"
                text="Configurações"
                color="warning"
                @click="onClick('Configurações')"
              />
            </div>

            <v-divider class="my-4" />

            <div class="text-subtitle-2 mb-2">Modo botão (as-button)</div>

            <div class="d-flex flex-wrap ga-4">
              <FzIconToolTip
                icon="mdi-pencil"
                tooltip="Clique para editar"
                as-button
                color="primary"
                @click="onClick('Editar (botão)')"
              />

              <FzIconToolTip
                icon="mdi-delete"
                tooltip="Clique para excluir"
                as-button
                color="error"
                @click="onClick('Excluir (botão)')"
              />

              <FzIconToolTip
                icon="mdi-content-save"
                tooltip="Salvar alterações"
                as-button
                color="success"
                @click="onClick('Salvar (botão)')"
              />
            </div>

            <v-divider class="my-4" />

            <div class="text-subtitle-2 mb-2">Desabilitado sem tooltip</div>

            <div class="d-flex flex-wrap ga-4 mb-4">
              <FzIconToolTip
                icon="mdi-pencil"
                text="Editar"
                disabled
                color="primary"
              />

              <FzIconToolTip
                icon="mdi-delete"
                text="Excluir"
                disabled
                color="error"
              />

              <FzIconToolTip
                icon="mdi-pencil"
                tooltip="Editar (desabilitado)"
                as-button
                disabled
                color="primary"
              />
            </div>

            <div class="text-subtitle-2 mb-2">Desabilitado com motivo (disabledTooltip)</div>

            <div class="d-flex flex-wrap ga-4">
              <FzIconToolTip
                icon="mdi-pencil"
                text="Editar"
                disabled
                disabled-tooltip="Sem permissão para editar"
                color="primary"
              />

              <FzIconToolTip
                icon="mdi-delete"
                text="Excluir"
                disabled
                disabled-tooltip="Exclusão bloqueada"
                color="error"
              />

              <FzIconToolTip
                icon="mdi-content-save"
                tooltip="Salvar alterações"
                as-button
                disabled
                disabled-tooltip="Preencha todos os campos obrigatórios"
                color="primary"
              />
            </div>
          </SectionCard>
        </v-window-item>

        <v-window-item value="inputs" class="pa-6">
          <SectionCard title="FzEmailField">
            <template #description>
              Campo de e-mail com validação automática e ícone dinâmico.
            </template>

            <div class="d-flex flex-wrap ga-4">
              <div style="min-width: 280px; max-width: 360px;">
                <FzEmailField v-model="emailValue" label="E-mail" />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzEmailField
                  v-model="emailRequired"
                  label="E-mail (obrigatório)"
                  required
                />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzEmailField
                  v-model="emailDisabled"
                  label="E-mail (desabilitado)"
                  disabled
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="FzMoneyField">
            <template #description>
              Campo monetário com formatação automática em Real (BRL).
            </template>

            <div class="d-flex flex-wrap ga-4">
              <div style="min-width: 280px; max-width: 360px;">
                <FzMoneyField v-model="moneyValue" label="Preço" />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzMoneyField
                  v-model="moneyValue2"
                  label="Com valor máximo"
                  :max="1000"
                />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzMoneyField
                  v-model="moneyDisabled"
                  label="Desabilitado"
                  disabled
                />
              </div>
            </div>

            <div class="mt-2 text-caption text-medium-emphasis">
              Valor: {{ moneyValue }}
            </div>
          </SectionCard>

          <SectionCard title="FzNumberField">
            <template #description>
              Campo numérico com formatação de milhar e casas decimais.
            </template>

            <div class="d-flex flex-wrap ga-4">
              <div style="min-width: 280px; max-width: 360px;">
                <FzNumberField
                  v-model="numberValue"
                  label="Quantidade"
                  :decimal-places="0"
                />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzNumberField
                  v-model="numberDecimal"
                  label="Com decimais"
                  :decimal-places="2"
                />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzNumberField
                  v-model="numberDisabled"
                  label="Desabilitado"
                  disabled
                  :decimal-places="0"
                />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzNumberField
                  v-model="numberNegative"
                  label="Negativo permitido"
                  :decimal-places="2"
                  :allow-negative="true"
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="FzPhoneField">
            <template #description>
              Campo de telefone com máscara automática (fixo ou celular).
            </template>

            <div class="d-flex flex-wrap ga-4">
              <div style="min-width: 280px; max-width: 360px;">
                <FzPhoneField v-model="phoneValue" label="Telefone" />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzPhoneField
                  v-model="phoneCustom"
                  label="Celular"
                  icon="mdi-cellphone"
                />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzPhoneField
                  v-model="phoneDisabled"
                  label="Desabilitado"
                  disabled
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="FzZipCodeField">
            <template #description>
              Campo de CEP com busca automática via ViaCEP.
            </template>

            <div class="d-flex flex-wrap ga-4">
              <div style="min-width: 280px; max-width: 360px;">
                <FzZipCodeField v-model="zipValue" label="CEP" />
              </div>

              <div style="min-width: 280px; max-width: 360px;">
                <FzZipCodeField
                  v-model="zipDisabled"
                  label="Desabilitado"
                  disabled
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="FzFullAddress">
            <template #description>
              Formulário completo de endereço com busca por CEP.
            </template>

            <div class="d-flex flex-wrap ga-6">
              <div style="min-width: 400px; max-width: 600px;">
                <div class="text-subtitle-2 mb-2">Padrão</div>

                <FzFullAddress v-model="addressValue" />
              </div>

              <div style="min-width: 400px; max-width: 600px;">
                <div class="text-subtitle-2 mb-2">Campos bloqueados após CEP</div>

                <FzFullAddress
                  v-model="addressDisabled"
                  :disabled-fields="true"
                />
              </div>

              <div style="min-width: 400px; max-width: 600px;">
                <div class="text-subtitle-2 mb-2">Totalmente desabilitado</div>

                <FzFullAddress
                  v-model="addressAllDisabled"
                  disabled
                />
              </div>
            </div>
          </SectionCard>
        </v-window-item>

        <v-window-item value="modal" class="pa-6">
          <SectionCard title="FzModalBase">
            <template #description>
              Modal base com ações customizáveis e suporte a teclado (Enter/Esc).
            </template>

            <div class="d-flex flex-wrap ga-4">
              <v-btn color="primary" @click="openModal = true">
                Abrir Modal
              </v-btn>

              <v-btn color="secondary" @click="openModalLarge = true">
                Modal Grande
              </v-btn>
            </div>

            <FzModalBase
              v-model="openModal"
              title="Confirmar ação"
              message="Deseja realmente executar esta ação?"
              :actions="defaultActions"
            />

            <FzModalBase
              v-model="openModalLarge"
              title="Modal com conteúdo personalizado"
              :actions="largeModalActions"
              :max-width="600"
            >
              <v-text-field
                v-model="modalField"
                label="Nome do item"
                variant="outlined"
                density="comfortable"
              />

              <v-select
                v-model="modalSelect"
                :items="['Opção 1', 'Opção 2', 'Opção 3']"
                label="Categoria"
                variant="outlined"
                density="comfortable"
              />
            </FzModalBase>
          </SectionCard>
        </v-window-item>

        <v-window-item value="mensagens" class="pa-6">
          <SectionCard title="Notificações (FzFloatingNotify)">
            <template #description>
              Notificações flutuantes com auto-hide. Use o utilitário <code>notify</code>.
            </template>

            <div class="d-flex flex-wrap ga-2">
              <v-btn color="success" @click="notifySuccess">
                Sucesso
              </v-btn>

              <v-btn color="error" @click="notifyError">
                Erro
              </v-btn>

              <v-btn color="warning" @click="notifyWarning">
                Aviso
              </v-btn>

              <v-btn color="info" @click="notifyInfo">
                Informação
              </v-btn>
            </div>
          </SectionCard>

          <SectionCard title="Confirmação (FzConfirmDialog)">
            <template #description>
              Diálogo de confirmação assíncrono. Use o utilitário <code>confirm</code>.
            </template>

            <div class="d-flex flex-wrap ga-2">
              <v-btn color="primary" @click="confirmDelete">
                Excluir item
              </v-btn>

              <v-btn color="secondary" @click="confirmInfo">
                Informação
              </v-btn>
            </div>

            <v-alert
              v-if="confirmResult !== null"
              :type="confirmResult ? 'success' : 'warning'"
              class="mt-3"
              density="compact"
              variant="tonal"
            >
              {{ confirmResult ? 'Usuário confirmou' : 'Usuário cancelou' }}
            </v-alert>
          </SectionCard>
        </v-window-item>

        <v-window-item value="layout" class="pa-6">
          <SectionCard title="Loading Overlay (FzLoadingOverlay)">
            <template #description>
              Overlay de carregamento com delay configurável. Use o composable <code>useLoading()</code>.
            </template>

            <div class="d-flex flex-wrap align-center ga-4">
              <v-btn color="primary" @click="showTimedLoading">
                Mostrar Loading
              </v-btn>

              <FzNumberField
                v-model="loadingSeconds"
                label="Segundos"
                :decimal-places="0"
                :min="1"
                :max="30"
                style="max-width: 160px;"
              />
            </div>
          </SectionCard>
        </v-window-item>
        </v-window>
      </div>
    </v-main>

    <FzFloatingNotify />
    <FzLoadingOverlay :is-loading="isActive" :message="message" />
    <FzConfirmDialog ref="confirmRef" />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLoading } from '@/composables/useLoading';
import { useConfirmStore, notify, confirm } from '@/utils';
import type { ConfirmComponentRef } from '@/utils/types';
import type { ModalAction } from '@/components';
import SectionCard from './components/SectionCard.vue';

const activeTab = ref('botoes');

// Loading overlay
const loadingState = useLoading();
const { isActive, message } = loadingState;
const loadingSeconds = ref(3);
let loadingTimeoutId: ReturnType<typeof setTimeout> | null = null;

function showTimedLoading() {
  if (loadingTimeoutId) {
    clearTimeout(loadingTimeoutId);
  }

  loadingState.show('Carregando...');

  loadingTimeoutId = setTimeout(() => {
    loadingState.hide();
    loadingTimeoutId = null;
  }, loadingSeconds.value * 1000);
}

// Confirm dialog
const confirmRef = ref<ConfirmComponentRef | null>(null);
const confirmResult = ref<boolean | null>(null);

onMounted(() => {
  if (!confirmRef.value) return;

  useConfirmStore().setConfirmRef(confirmRef.value);
});

function notifySuccess() {
  notify.success('Sucesso', 'Operação realizada com sucesso.');
}

function notifyError() {
  notify.error('Erro', 'Ocorreu um erro ao executar a operação.');
}

function notifyWarning() {
  notify.warning('Atenção', 'Verifique os dados antes de continuar.');
}

function notifyInfo() {
  notify.info('Informação', 'Esta é uma notificação informativa.');
}

async function confirmDelete() {
  confirmResult.value = await confirm.show('Excluir', 'Deseja realmente excluir este item?', {
    confirmText: 'Sim, excluir',
    confirmColor: 'error',
  });
}

async function confirmInfo() {
  confirmResult.value = await confirm.show('Informação', 'Esta ação não pode ser desfeita.', {
    confirmText: 'OK',
    cancelText: 'Fechar',
    confirmColor: 'info',
  });
}

// Modal
const openModal = ref(false);
const openModalLarge = ref(false);
const modalField = ref('');
const modalSelect = ref('');

const defaultActions: ModalAction[] = [
  { text: 'Cancelar', color: 'secondary', handler: () => { openModal.value = false; } },
  { text: 'Confirmar', color: 'primary', handler: () => { openModal.value = false; } },
];

const largeModalActions: ModalAction[] = [
  { text: 'Salvar', color: 'primary', variant: 'elevated', handler: () => { openModalLarge.value = false; } },
  { text: 'Fechar', color: 'secondary', handler: () => { openModalLarge.value = false; } },
];

function onClick(action: string) {
  notify.info('Ação', `Clicou em: ${action}`);
}

// Email
const emailValue = ref('');
const emailRequired = ref('');
const emailDisabled = ref('user@example.com');

// Money
const moneyValue = ref(0);
const moneyValue2 = ref(0);
const moneyDisabled = ref(150.50);

// Number
const numberValue = ref(0);
const numberDecimal = ref(0);
const numberDisabled = ref(42);
const numberNegative = ref(0);

// Phone
const phoneValue = ref('');
const phoneCustom = ref('');
const phoneDisabled = ref('11999999999');

// ZipCode
const zipValue = ref('');
const zipDisabled = ref('');

// FullAddress
const addressValue = ref({});
const addressDisabled = ref({});
const addressAllDisabled = ref({
  zipCode: '01001000',
  street: 'Praça da Sé',
  number: '1',
  complement: 'Centro',
  neighborhood: 'Sé',
  city: 'São Paulo',
  state: 'SP',
});
</script>

<style>
kbd {
  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  font-size: 0.85em;
  font-weight: 600;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}
</style>
