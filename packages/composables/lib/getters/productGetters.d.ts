import { AgnosticMediaGalleryItem, AgnosticAttribute, AgnosticPrice, ProductGetters } from '@vue-storefront/core';
import { ProductVariant } from '@vue-storefront/shopify-api/src/types';
declare type ProductVariantFilters = any;
export declare const getProductName: (product: ProductVariant) => string;
export declare const getProductSlug: (product: ProductVariant) => string;
export declare const getProductPrice: (product: ProductVariant) => AgnosticPrice;
export declare const getProductGallery: (product: ProductVariant) => AgnosticMediaGalleryItem[];
export declare const getProductCoverImage: (product: any) => any;
export declare const getActiveVariantImage: (product: any) => number;
export declare const getProductFiltered: (products: any, filters?: ProductVariantFilters | any) => any;
export declare const getSelectedVariant: (product: ProductVariant, attribs: any) => any;
export declare const getProductOptions: (product: ProductVariant) => Record<string, AgnosticAttribute | string>;
export declare const getProductAttributes: (products: ProductVariant, filterByAttributeName?: string[]) => Record<string, AgnosticAttribute | string>;
export declare const getProductDescription: (product: ProductVariant, isWantHtml?: boolean) => any;
export declare const getProductCategoryIds: (product: ProductVariant) => string[];
export declare const getProductId: (product: ProductVariant) => string;
export declare const getFormattedPrice: (price: number) => string;
export declare const getProductStatus: (product: ProductVariant) => boolean;
export declare const checkForWishlist: (product: ProductVariant) => boolean;
export declare const getBreadcrumbs: (product: ProductVariant) => any;
export declare const getProductTotalReviews: (product: ProductVariant) => number;
export declare const getProductAverageRating: (product: ProductVariant) => number;
declare const productGetters: ProductGetters<ProductVariant, ProductVariantFilters>;
export default productGetters;
