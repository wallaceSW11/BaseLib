---
inclusion: manual
---

# Testing

> ⚠️ Este projeto ainda não possui testes unitários. NÃO criar testes automaticamente.
> Quando testes forem implementados, usar Vitest + @vue/test-utils.

## Stack (quando ativado)

- Vitest 4+
- @vue/test-utils 2+
- `pnpm test` para rodar

## Princípios (para referência futura)

- Teste comportamento, não implementação
- Código de teste em inglês
- Nomenclatura: "Should... when..."
- Testes em `__tests__/` na mesma pasta do arquivo testado
- `.toBe(true/false)` para booleanos, nunca `.toBeTruthy()`
- `isVisible()` para visibilidade, `exists()` para presença no DOM
