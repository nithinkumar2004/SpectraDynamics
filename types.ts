
export type ProductCategory = 'surgical' | 'diagnostic' | 'mobility' | 'dental';

export interface Product {
    name: string;
    category: ProductCategory;
}

export type CategoryTitles = {
    [key in ProductCategory]: string;
};
