---
name: code-style-backend
description: Regras e exemplos de code style para backend .NET 9 C# + EF Core + PostgreSQL. Use ao criar ou editar qualquer arquivo em backend/.
---

# Code Style Backend

Regras de código para .NET 9 C#. Sem exceções.

## Proibido

- NUNCA AutoMapper — MapToDto private static no service
- NUNCA expor entidade na response — sempre DTO
- NUNCA lógica de negócio no controller
- NUNCA .Result ou .Wait() — sempre async/await
- NUNCA migration manual — sempre `dotnet ef migrations add NomeDaMigration`
- NUNCA PascalCase em tabela/coluna/constraint nas migrations — Postgres é case-sensitive
- NUNCA engolir exceção — sempre throw
- NUNCA construtor tradicional quando primary constructor resolve

## Controle de fluxo

Early return sempre. Sem ifs aninhados. Ternário só para 2 caminhos simples.

```csharp
// ❌ errado
if (product != null) { if (product.BakeryId == bakeryId) { return MapToDto(product); } }

// ✅ certo
if (product is null || product.BakeryId != bakeryId)
    throw new InvalidOperationException("Produto não encontrado.");
return MapToDto(product);
```

## If de uma linha (sem chaves)

```csharp
// ✅ Uma linha, sem chaves
if (product is null) throw new InvalidOperationException("Não encontrado.");
if (!request.AcceptedTerms) return BadRequest("Aceite os termos.");

// ❌ Com chaves desnecessárias
if (product is null)
{
    throw new InvalidOperationException("Não encontrado.");
}
```

## Ternário

```csharp
// ✅ 2 caminhos simples
var label = editMode ? "Editar" : "Criar";
var stock = product.Stock - product.StockPending;

// ❌ Ternário aninhado
var x = a ? b ? c : d : e;
```

## Async

Sempre async/await. Todo método assíncrono: sufixo `Async`.

## Controllers

Finos — só orquestração. Herdam `BaseController`. Primary constructor.
`ActionResult<T>` em todos os retornos. `GetBakeryId()` para isolar por tenant.

```csharp
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class ProductsController(IProductService productService) : BaseController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDto>>> GetAll() =>
        Ok(await productService.GetAllAsync(GetBakeryId()));

    [HttpPost]
    public async Task<ActionResult<ProductDto>> Create([FromBody] CreateProductRequest request)
    {
        var product = await productService.CreateAsync(GetBakeryId(), request);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }
}
```

## Services

Lógica de negócio aqui. Valida ownership (bakeryId). MapToDto private static. Sem AutoMapper.

```csharp
public class ProductService(IProductRepository productRepository) : IProductService
{
    public async Task<ProductDto> CreateAsync(int bakeryId, CreateProductRequest request)
    {
        var product = new Product { BakeryId = bakeryId, Name = request.Name, Price = request.Price, Stock = request.Stock, Active = true };
        return MapToDto(await productRepository.CreateAsync(product));
    }

    private static ProductDto MapToDto(Product p) =>
        new(p.Id, p.BakeryId, p.Name, p.Description, p.Price, p.Stock, p.ImageUrl, p.Active, p.CreatedAt);
}
```

## Repositories

Acesso a dados apenas. DbContext via primary constructor. Sem lógica de negócio.

```csharp
public class ProductRepository(ApplicationDbContext db) : IProductRepository
{
    public async Task<IEnumerable<Product>> GetAllAsync(int bakeryId) =>
        await db.Products.Where(p => p.BakeryId == bakeryId).ToListAsync();

    public async Task<Product> CreateAsync(Product product)
    {
        db.Products.Add(product);
        await db.SaveChangesAsync();
        return product;
    }
}
```

## UpdateAsync — entidades com HasConversion

Entidades com `HasConversion<string>()` em enums: usar `context.Entry(entity).State = EntityState.Modified` em vez de `context.X.Update(entity)`.

```csharp
// ❌ errado — pode não salvar mudanças em enums com HasConversion
context.Orders.Update(order);
await context.SaveChangesAsync();

// ✅ certo
order.UpdatedAt = DateTime.UtcNow;
context.Entry(order).State = EntityState.Modified;
await context.SaveChangesAsync();
```

## Entidade carregada por contexto diferente

Usar `ExecuteUpdateAsync` para atualizar diretamente no banco sem depender do change tracker:

```csharp
// ❌ errado — entidade não está tracked
created.PixQrCode = qrCode;
await dbContext.SaveChangesAsync();

// ✅ certo
await dbContext.Orders
    .Where(o => o.Id == order.Id)
    .ExecuteUpdateAsync(s => s
        .SetProperty(o => o.PixQrCode, qrCode)
        .SetProperty(o => o.PixQrCodeBase64, qrCodeBase64));
```

## DTOs

```csharp
public record CreateProductRequest(string Name, string? Description, decimal Price, int Stock, string? ImageUrl);
public record UpdateProductRequest(string Name, string? Description, decimal Price, int Stock, string? ImageUrl, bool Active);
public record ProductDto(int Id, int BakeryId, string Name, string? Description, decimal Price, int Stock, string? ImageUrl, bool Active, DateTime CreatedAt);
```

- `CreateXRequest` — input POST
- `UpdateXRequest` — input PUT/PATCH
- `XDto` — response
- Sempre `record`. Nunca expor entidade.

## Nomenclatura

PascalCase: classes, interfaces, constantes.
Prefixo `I`: interfaces (`IProductService`).
Sufixo `Async`: métodos assíncronos.
camelCase: parâmetros e variáveis.

## Banco — snake_case obrigatório

```
tabelas:  customers, customer_addresses, bakeries
colunas:  origin_bakery_id, created_at, password_hash
índices:  ix_customers_origin_bakery_id
PKs:      pk_customers
FKs:      fk_customers_bakeries_origin_bakery_id
```

## Enums recebidos do frontend

Frontend envia `SCREAMING_SNAKE_CASE`. Normalizar antes do parse:

```csharp
var normalized = request.Status.Replace("_", "");
if (!Enum.TryParse<OrderStatus>(normalized, ignoreCase: true, out var status))
    throw new InvalidOperationException("Status inválido");
```

## Enums serializados para o frontend

Usar `ToSnakeCase` — nunca `.ToString().ToUpper()`:

```csharp
private static string ToSnakeCase(string value)
{
    if (string.IsNullOrEmpty(value)) return value;
    return System.Text.RegularExpressions.Regex.Replace(value, "([A-Z])", "_$1").TrimStart('_').ToUpper();
}

// InPreparation → IN_PREPARATION
ToSnakeCase(order.Status.ToString())
```

## JWT claims

`MapInboundClaims = false` no scheme padrão. Claims lidos pelos nomes originais do JWT.
`CustomerScheme` mantém `MapInboundClaims = true` (padrão).

## Camadas

```
Controller → Service → Repository → Database
Request DTO → Service → MapToDto → Response DTO
```

Controller não acessa Repository diretamente.
