import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ProductCard = ({ product }) => {
  const price = product?.price?.toFixed(2);
  const discount = product?.discountPercentage?.toFixed(2);
  const isPremium = Number(product?.price) > 100;

  return (
    <Card className="overflow-hidden border border-border bg-card p-0 shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="border-b border-border p-0">
        <div className="relative aspect-4/3 overflow-hidden bg-muted">
          <img
            src={product?.thumbnail || product?.images?.[0]}
            alt={product?.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className={`absolute right-3 top-3 ${isPremium ? 'bg-blue-600 text-white' : 'bg-emerald-500 text-white'} rounded-full px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur`}>
            <span>
              {isPremium ? 'Premium' : 'Best Seller'}
            </span>
          </div>
        </div>
        <div className="space-y-2 px-4 py-4">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="line-clamp-2 text-base leading-snug">
              {product?.title}
            </CardTitle>
            <div className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              ${price}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-muted px-2 py-1">{product?.brand}</span>
            <span className="rounded-full bg-muted px-2 py-1">{product?.category}</span>
            <span className="rounded-full bg-muted px-2 py-1">★ {product?.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-4 py-4 text-sm">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {product?.description}
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
          <div className="rounded-md bg-muted px-3 py-2">
            <p className="text-muted-foreground">Stock</p>
            <p className="font-semibold">{product?.stock}</p>
          </div>
          <div className="rounded-md bg-muted px-3 py-2">
            <p className="text-muted-foreground">Discount</p>
            <p className="font-semibold">{discount}%</p>
          </div>
          <div className="rounded-md bg-muted px-3 py-2">
            <p className="text-muted-foreground">Min Order</p>
            <p className="font-semibold">{product?.minimumOrderQuantity}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product?.tags?.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2 py-1 text-xs text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
      <div className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
        <div className="flex items-center justify-between gap-3">
          <span>{product?.shippingInformation}</span>
          <span>{product?.sku}</span>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span>{product?.warrantyInformation}</span>
          <span>{product?.returnPolicy}</span>
        </div>
      </div>
    </Card>
  );
};

export { ProductCard };