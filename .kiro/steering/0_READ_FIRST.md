---
inclusion: always
priority: highest
---

# Hierarquia de Regras

## Prioridade

```
1_code-style.md > 2_kiro-guide.md > 3_project-reference.md > 7_testing-best-practices.md
```

## Checklist antes de codar

- [ ] Early returns
- [ ] Async/await (não .then())
- [ ] Optional chaining
- [ ] Zero lógica no template
- [ ] :class via computed se 2+ condições
- [ ] PascalCase nos componentes do template
- [ ] TypeScript tipado
- [ ] Sem comentários no código
- [ ] getDiagnostics após implementar

## Contexto

Projeto: `@wallacesw11/base-lib` — biblioteca Vue 3 + Vuetify + TypeScript.
NÃO é uma aplicação. É uma lib publicada no npm.
NÃO criar testes automaticamente (projeto sem testes por enquanto).
