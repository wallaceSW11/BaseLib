# flow-cadastro-produtos

Fluxo de cadastro e edição de produtos da confeitaria.

## rotas

criar: `/:slug/admin/products/new` → ProductFormView.vue
editar: `/:slug/admin/products/:id/edit` → ProductFormView.vue
listagem: `/:slug/admin/products` → ProductListView.vue

## frontend

view: `frontend/src/views/bakery/ProductFormView.vue`
store: `frontend/src/stores/bakery/product.ts` → useProductStore
service: `frontend/src/services/bakery/productService.ts`

modo da view:
- editMode = !!route.params.id
- pageTitle computado: "Novo Produto" | "Editar Produto"

campos do formulário:
- name: obrigatório
- description: obrigatório
- price: número > 0, prefixo R$
- stock: número >= 0
- active: switch (padrão true)
- imageUrl: upload separado via endpoint `/api/products/upload-image`

fluxo criar:
1. usuário preenche form
2. submit → valida form
3. productStore.createProduct(form) → productService.create() → POST `/api/products`
4. sucesso → notify.success + redirect para listagem

fluxo editar:
1. onMounted → productStore.loadProduct(id) → GET `/api/products/:id`
2. preenche form com dados existentes
3. submit → productStore.updateProduct(id, form) → PUT `/api/products/:id`
4. sucesso → notify.success + redirect para listagem

toggle ativo:
- na listagem: PATCH `/api/products/:id/toggle-active`
- inverte o campo active sem abrir o form

## backend

controller: `backend/Features/Products/Controllers/ProductsController.cs`
service: `backend/Features/Products/Services/ProductService.cs`
repository: `backend/Features/Products/Repositories/ProductRepository.cs`

endpoints:
- GET    `/api/products`          → lista todos do bakeryId
- GET    `/api/products/:id`      → busca por id + bakeryId
- POST   `/api/products`          → cria produto
- PUT    `/api/products/:id`      → atualiza produto
- DELETE `/api/products/:id`      → remove produto
- PATCH  `/api/products/:id/toggle-active` → inverte active
- POST   `/api/products/upload-image`      → upload imagem (IFormFile)

todos os endpoints requerem [Authorize] + GetBakeryId() para isolamento por tenant

request criar: `CreateProductRequest { Name, Description, Price, Stock, ImageUrl, Active }`
request editar: `UpdateProductRequest { Name, Description, Price, Stock, ImageUrl, Active }`
response: `ProductDto { Id, BakeryId, Name, Description, Price, Stock, ImageUrl, Active, CreatedAt, UpdatedAt }`

lógica do service:
- GetAllAsync: filtra por bakeryId
- GetByIdAsync: busca por id + bakeryId, lança InvalidOperationException se não encontrado
- CreateAsync: cria entidade, persiste, retorna MapToDto
- UpdateAsync: busca, atualiza campos, persiste, retorna MapToDto
- DeleteAsync: busca, remove
- ToggleActiveAsync: inverte product.Active, persiste
- UploadImageAsync: delega para IStorageService.UploadAsync(file, "products")

## arquivos envolvidos

```
frontend/src/views/bakery/ProductFormView.vue
frontend/src/views/bakery/ProductListView.vue
frontend/src/stores/bakery/product.ts
frontend/src/services/bakery/productService.ts
frontend/src/constants/routes.ts
backend/Features/Products/Controllers/ProductsController.cs
backend/Features/Products/Services/ProductService.cs
backend/Features/Products/Services/IProductService.cs
backend/Features/Products/Repositories/ProductRepository.cs
backend/Features/Products/Repositories/IProductRepository.cs
backend/Features/Products/DTOs/CreateProductRequest.cs
backend/Features/Products/DTOs/UpdateProductRequest.cs
backend/Features/Products/DTOs/ProductDto.cs
backend/Features/Products/DTOs/UploadImageResponse.cs
backend/Infrastructure/Storage/StorageService.cs
```
