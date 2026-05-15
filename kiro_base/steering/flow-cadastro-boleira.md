# flow-cadastro-boleira

Fluxo de cadastro de nova confeitaria (registro do tenant).

## rota

`/cadastro` → RegisterBakeryView.vue

## frontend

view: `frontend/src/views/bakery/RegisterBakeryView.vue`
services: authService.register(), storeService.checkSlug()

campos do formulário:
- name: nome da confeitaria (obrigatório)
- email: email do admin (obrigatório, formato válido)
- password: mínimo 6 caracteres
- confirmPassword: deve coincidir com password
- slug: endereço da loja (apenas letras minúsculas, números e hífens, máx 50)
- acceptedTerms: checkbox obrigatório

fluxo:
1. usuário preenche o formulário
2. slug: usuário digita → botão "Verificar disponibilidade" → GET `/api/store/check-slug/:slug`
3. slug disponível → chip verde | indisponível → chip vermelho
4. aceite dos termos via checkbox ou modal (botão "Li e aceito")
5. submit: valida form + slug verificado + termos aceitos
6. POST `/api/auth/register` via authService.register()
7. backend retorna `{ bakery: BakeryDto }` + seta cookie `auth_token`
8. frontend salva BakeryDto no localStorage
9. redireciona para `/:slug/admin/registrations/profile` (ProfileView)

erros:
- slug não verificado → notify.error antes de submeter
- termos não aceitos → notify.error antes de submeter
- email já cadastrado → notify.error com mensagem da API

## backend

controller: `backend/Features/Auth/Controllers/AuthController.cs`
service: `backend/Features/Auth/Services/AuthService.cs`
repository: `backend/Features/Auth/Repositories/BakeryRepository.cs`

endpoint: POST `/api/auth/register`
request: `RegisterRequest { Name, Email, Password, Phone, AcceptedTerms, Slug }`
response: `{ bakery: BakeryDto }` + cookie `auth_token`

lógica:
1. valida AcceptedTerms = true
2. normaliza email (ToLower().Trim())
3. verifica se email já existe
4. cria Bakery com PasswordHash (BCrypt), Role = Owner
5. gera JWT e seta cookie via SetAuthCookie()
6. retorna 201 com BakeryDto

slug check:
controller: `backend/Features/Store/Controllers/StoreController.cs`
endpoint: GET `/api/store/check-slug/:slug`
retorna: `{ available: bool }`

## arquivos envolvidos

```
frontend/src/views/bakery/RegisterBakeryView.vue
frontend/src/services/auth/authService.ts
frontend/src/services/bakery/storeService.ts
frontend/src/router/index.ts
frontend/src/constants/routes.ts
backend/Features/Auth/Controllers/AuthController.cs
backend/Features/Auth/Services/AuthService.cs
backend/Features/Auth/Repositories/BakeryRepository.cs
backend/Features/Auth/DTOs/RegisterRequest.cs
backend/Features/Auth/DTOs/LoginResponse.cs
backend/Features/Auth/DTOs/BakeryDto.cs
backend/Features/Store/Controllers/StoreController.cs
backend/Features/Store/DTOs/SlugCheckDto.cs
```
