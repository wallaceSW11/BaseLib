# flow-login-boleira

Fluxo de login da boleira (admin da confeitaria).

## rota

`/login` → LoginView.vue

## frontend

view: `frontend/src/views/bakery/LoginView.vue`
service: `frontend/src/services/auth/authService.ts` → login()
armazenamento: `localStorage` key `auth_user` (BakeryDto serializado)

fluxo:
1. usuário preenche email + senha
2. validação local (required, formato email)
3. POST `/api/auth/login` via authService.login()
4. backend retorna `{ bakery: BakeryDto }` + seta cookie `auth_token` (HttpOnly)
5. frontend salva BakeryDto no localStorage
6. redireciona: role Admin → `/admin` | Owner → `/:slug/admin/orders`
7. erro: notify.error com mensagem traduzida

recuperação de senha:
- link "Esqueci minha senha" → `/esqueci-senha` (ForgotPasswordView)
- POST `/api/auth/forgot-password` — sempre retorna 200 (não revela se email existe)
- email com link de reset → `/reset-password?token=xxx`
- POST `/api/auth/reset-password` → loga automaticamente após reset

## backend

controller: `backend/Features/Auth/Controllers/AuthController.cs`
service: `backend/Features/Auth/Services/AuthService.cs`
repository: `backend/Features/Auth/Repositories/BakeryRepository.cs`

endpoint: POST `/api/auth/login`
request: `LoginRequest { Email, Password }`
response: `{ bakery: BakeryDto }` + cookie `auth_token`

lógica:
1. busca bakery por email (case insensitive)
2. verifica senha com BCrypt
3. gera JWT via JwtTokenHelper.GenerateToken()
4. seta cookie HttpOnly via SetAuthCookie() do BaseController
5. retorna BakeryDto

erros:
- email ou senha inválidos → 401 UnauthorizedAccessException
- cookie: HttpOnly, Secure (prod), SameSite=Lax, expira conforme Jwt:ExpirationHours

## guard de rota

router.beforeEach verifica `localStorage.getItem('auth_user')`
rotas com `meta.requiresAuth: true` redirecionam para `/login` se não autenticado

## arquivos envolvidos

```
frontend/src/views/bakery/LoginView.vue
frontend/src/views/bakery/ForgotPasswordView.vue
frontend/src/views/bakery/ResetPasswordView.vue
frontend/src/services/auth/authService.ts
frontend/src/router/index.ts
frontend/src/constants/routes.ts
backend/Features/Auth/Controllers/AuthController.cs
backend/Features/Auth/Services/AuthService.cs
backend/Features/Auth/Repositories/BakeryRepository.cs
backend/Features/Auth/DTOs/LoginRequest.cs
backend/Features/Auth/DTOs/LoginResponse.cs
backend/Features/Auth/DTOs/BakeryDto.cs
backend/Features/Auth/Services/JwtTokenHelper.cs
```
