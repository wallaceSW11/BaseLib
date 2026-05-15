---
name: code-review
description: Checklist de code review para o projeto Confeitaria. Use após implementar uma tarefa ou quando solicitado review.
---

# Code Review

Checklist de code review. CRÍTICO = bloqueia entrega | ATENÇÃO = melhoria

## Backend

### Controller
- [ ] Sem lógica de negócio? (CRÍTICO)
- [ ] Herda BaseController? (CRÍTICO)
- [ ] Usa GetBakeryId()? (CRÍTICO)
- [ ] ActionResult<T> em todos os retornos? (ATENÇÃO)
- [ ] Primary constructor? (ATENÇÃO)

### Service
- [ ] Lógica de negócio centralizada aqui? (CRÍTICO)
- [ ] MapToDto private static presente? (CRÍTICO)
- [ ] Sem AutoMapper? (CRÍTICO)
- [ ] Exceptions com throw, nunca engolidas? (CRÍTICO)
- [ ] Valida ownership (bakeryId)? (CRÍTICO)

### Repository
- [ ] Apenas acesso a dados, sem lógica de negócio? (CRÍTICO)

### DTOs
- [ ] Inputs: sufixo Request? (ATENÇÃO)
- [ ] Responses: sufixo Dto? (ATENÇÃO)
- [ ] Usando record? (ATENÇÃO)
- [ ] Nenhuma entidade exposta diretamente? (CRÍTICO)

### Async / Banco
- [ ] Sem .Result ou .Wait()? (CRÍTICO)
- [ ] Métodos assíncronos com sufixo Async? (ATENÇÃO)
- [ ] Migration usa snake_case? (CRÍTICO)

## Frontend

### Template / Async
- [ ] Zero lógica no template? (CRÍTICO)
- [ ] Computed para condicionais e class bindings? (CRÍTICO)
- [ ] Loading reseta no finally? (ATENÇÃO)
- [ ] Catch notifica o usuário? (ATENÇÃO)

### Camadas / TypeScript
- [ ] Component chama store, não service? (CRÍTICO)
- [ ] Service faz HTTP apenas? (CRÍTICO)
- [ ] Tudo tipado, sem any? (ATENÇÃO)
- [ ] Sem var? (CRÍTICO)
- [ ] Sem prefixo is/has? (ATENÇÃO)

### Componentes
- [ ] PascalCase? (ATENÇÃO)
- [ ] Boolean props sem valor? (ATENÇÃO)

## Geral
- [ ] Código em inglês? (CRÍTICO)
- [ ] Sem comentários no código? (ATENÇÃO)
- [ ] Sem console.log ou código morto? (CRÍTICO)
- [ ] Sem implementação além do pedido (YAGNI)? (ATENÇÃO)
