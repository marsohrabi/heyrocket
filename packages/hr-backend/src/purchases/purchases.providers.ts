import { PurchaseEntity } from "./purchase.entity";

export const purchasesProviders = [
    {
        provide: "PURCHASE_REPOSITORY",
        useValue: PurchaseEntity
    }
]