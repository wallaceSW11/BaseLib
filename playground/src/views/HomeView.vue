<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6">BaseLib Playground</h1>
        <p class="text-h6 mb-4">Ambiente de desenvolvimento e testes para a BaseLib</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Sobre o Playground</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item prepend-icon="mdi-flask">
                <v-list-item-title>Ambiente de Testes</v-list-item-title>
                <v-list-item-subtitle>
                  Teste componentes e funcionalidades sem projetos externos
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item prepend-icon="mdi-code-braces">
                <v-list-item-title>Desenvolvimento Local</v-list-item-title>
                <v-list-item-subtitle>
                  Imports diretos da pasta src/ sem builds
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item prepend-icon="mdi-lightning-bolt">
                <v-list-item-title>Hot Reload</v-list-item-title>
                <v-list-item-subtitle>
                  Veja mudanças instantaneamente
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Como Usar</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-title class="text-caption">
                  <code>pnpm dev:playground</code> - Iniciar playground
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-caption">
                  <code>pnpm build</code> - Build da biblioteca
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-caption">
                  <code>pnpm test</code> - Rodar testes
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" to="/components">
              Ver Componentes
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>
