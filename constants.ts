
import type { Product, CategoryTitles, ProductCategory } from './types';

export const products: Product[] = [
    { name: 'Adhesive Tapes & Bandages', category: 'surgical' },
    { name: 'Alcohol Swabs', category: 'surgical' },
    { name: 'Examination Gloves', category: 'surgical' },
    { name: 'First-Aid Boxes', category: 'surgical' },
    { name: 'Surgical Masks', category: 'surgical' },
    { name: 'Stethoscopes', category: 'diagnostic' },
    { name: 'Manual BP Cuffs', category: 'diagnostic' },
    { name: 'Medical Thermometers', category: 'diagnostic' },
    { name: 'Canes and Crutches', category: 'mobility' },
    { name: 'Manual Wheelchairs', category: 'mobility' },
    { name: 'Dental Floss', category: 'dental' },
    { name: 'Spectacle Frames', category: 'dental' },
];

export const categoryTitles: CategoryTitles = {
    surgical: 'General & Surgical Aids',
    diagnostic: 'Diagnostic & Monitoring Devices',
    mobility: 'Mobility & Support',
    dental: 'Dental & Ophthalmic'
};

export const filterButtons: { label: string; filter: ProductCategory | 'all' }[] = [
    { label: 'All Products', filter: 'all' },
    { label: 'Surgical Aids', filter: 'surgical' },
    { label: 'Diagnostic', filter: 'diagnostic' },
    { label: 'Mobility', filter: 'mobility' },
    { label: 'Dental & Ophthalmic', filter: 'dental' },
];
